"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import CertificateTemplate from "@/components/certificates/CertificateTemplate";
import CertificatePDF from "@/components/certificates/CertificatePDF";
import { mockCertificates } from "../data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { pdf } from "@react-pdf/renderer";

export default function CertificatePage() {
  const params = useParams();
  const certificateId = params.id as string;

  // Find the certificate
  const certificate = mockCertificates.find(
    (cert) => cert.id === certificateId
  );

  const generatePDF = async () => {
    if (!certificate) return;

    try {
      // Create the PDF document using React-PDF
      const doc = (
        <CertificatePDF
          brand="NextWork"
          logoUrl="/vercel.svg"
          certificateNo={certificate.certificateNo}
          certificateUrl={certificate.certificateUrl}
          referenceNo={certificate.referenceNo}
          courseTitle={certificate.courseTitle}
          instructors={certificate.instructors}
          recipientName={certificate.recipientName}
          date={certificate.date}
          lengthHours={certificate.lengthHours}
        />
      );

      // Generate and download the PDF
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Certificate-${
        certificate.certificateNo || "download"
      }.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF generation failed:", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  if (!certificate) {
    notFound();
  }

  if (certificate.status !== "completed") {
    return (
      <div className="min-h-screen bg-background p-3 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 sm:mb-6">
            <Button asChild variant="outline" size="sm" className="mb-4">
              <Link href="/student/certificates">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Back to Certificates</span>
                <span className="sm:hidden">Back</span>
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border border-border bg-card p-4 sm:p-6 lg:p-8 text-center">
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">
              Certificate Not Available
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">
              This certificate is not yet available. Complete the course to
              unlock your certificate.
            </p>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium line-clamp-2">
              Course: {certificate.courseTitle}
            </p>
            <Button asChild className="mt-4 w-full sm:w-auto">
              <Link href="/student/dashboard">Continue Learning</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Certificate: ${certificate.courseTitle}`,
          text: `Check out my certificate for completing ${certificate.courseTitle}`,
          url: window.location.href,
        });
      } catch {
        // Fall back to copying to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  const handleDownload = () => {
    void generatePDF();
  };

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Navigation */}
      <div className="bg-background border-b border-border sticky top-0 z-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild variant="outline" size="sm" className="w-fit">
                <Link href="/student/certificates">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span className="hidden sm:inline">Back to Certificates</span>
                  <span className="sm:hidden">Back</span>
                </Link>
              </Button>
              <div className="min-w-0 flex-1">
                <h1 className="text-lg sm:text-xl font-semibold text-foreground">
                  Certificate
                </h1>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {certificate.courseTitle}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Button
                onClick={handleShare}
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
              >
                <Share2 className="mr-2 h-4 w-4" />
                <span>Share</span>
              </Button>
              <Button
                onClick={handleDownload}
                size="sm"
                className="w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4" />
                <span>Download PDF</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Display */}
      <div className="py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="bg-white shadow-lg rounded-xl p-6 lg:p-8">
            <div className="transform scale-95 sm:scale-100 lg:scale-105 xl:scale-110 origin-center transition-transform duration-300">
              <CertificateTemplate
                brand="NextWork"
                logoUrl="/vercel.svg"
                certificateNo={certificate.certificateNo}
                certificateUrl={certificate.certificateUrl}
                referenceNo={certificate.referenceNo}
                courseTitle={certificate.courseTitle}
                instructors={certificate.instructors}
                recipientName={certificate.recipientName}
                date={certificate.date}
                lengthHours={certificate.lengthHours}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Information */}
      <div className="pb-12 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-xl border border-border shadow-sm p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Certificate Information
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="space-y-1">
                <dt className="text-sm font-medium text-muted-foreground">
                  Certificate Number
                </dt>
                <dd className="text-xs text-foreground font-mono bg-muted/50 p-2 rounded border break-all">
                  {certificate.certificateNo}
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium text-muted-foreground">
                  Reference Number
                </dt>
                <dd className="text-sm text-foreground font-mono bg-muted/50 p-2 rounded border">
                  {certificate.referenceNo}
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium text-muted-foreground">
                  Completed Date
                </dt>
                <dd className="text-sm text-foreground bg-muted/50 p-2 rounded border">
                  {certificate.date}
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium text-muted-foreground">
                  Course Duration
                </dt>
                <dd className="text-sm text-foreground bg-muted/50 p-2 rounded border">
                  {certificate.lengthHours}
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm font-medium text-muted-foreground">
                  Instructors
                </dt>
                <dd className="text-sm text-foreground bg-muted/50 p-2 rounded border">
                  {certificate.instructors}
                </dd>
              </div>
              <div className="space-y-1 sm:col-span-2 lg:col-span-1">
                <dt className="text-sm font-medium text-muted-foreground">
                  Verification URL
                </dt>
                <dd className="text-xs text-foreground font-mono bg-muted/50 p-2 rounded border break-all">
                  {certificate.certificateUrl}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
