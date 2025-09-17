"use client";

import Image from "next/image";
import React from "react";

export type CertificateProps = {
  brand?: string; // e.g., "Next Work"
  logoUrl?: string; // optional logo path
  certificateNo?: string;
  certificateUrl?: string;
  referenceNo?: string;
  courseTitle: string;
  instructors?: string; // comma-separated or styled text
  recipientName: string;
  date: string; // preformatted date
  lengthHours?: string; // e.g., "42 total hours"
};

// Utility: A4 landscape aspect box using tailwind (approx 1123x794 px at 96dpi)
const A4Landscape: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <div
    className={`relative mx-auto bg-white text-black shadow-sm print:shadow-none aspect-[1.4142/1] w-full max-w-[1056px] min-w-[320px] h-auto print:w-full ${
      className ?? ""
    }`}
    style={{
      // Maintain ~A4 landscape ratio; fallback if aspect not supported
      aspectRatio: "1.4142 / 1",
    }}
  >
    {children}
  </div>
);

export default function CertificateTemplate({
  brand = "NextWork",
  logoUrl,
  certificateNo,
  certificateUrl,
  referenceNo,
  courseTitle,
  instructors,
  recipientName,
  date,
  lengthHours,
}: CertificateProps) {
  return (
    <A4Landscape className="overflow-hidden">
      {/* Margins frame */}
      <div className="absolute inset-0 p-6 sm:p-8 md:p-10 lg:p-16">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            {logoUrl ? (
              <Image
                src={logoUrl}
                alt={brand}
                width={40}
                height={40}
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
            ) : (
              <div
                className="h-8 w-8 sm:h-10 sm:w-10 rounded bg-black"
                aria-hidden
              />
            )}
            <div className="text-lg sm:text-xl lg:text-2xl font-semibold">
              {brand}
            </div>
          </div>
          <div className="text-right text-xs lg:text-xs text-neutral-600 space-y-1">
            {certificateNo ? (
              <p>
                <span className="text-neutral-500">Certificate no:</span>{" "}
                <span className="block sm:inline">{certificateNo}</span>
              </p>
            ) : null}
            {certificateUrl ? (
              <p>
                <span className="text-neutral-500">Certificate url:</span>{" "}
                <span className="block sm:inline break-all">
                  {certificateUrl}
                </span>
              </p>
            ) : null}
            {referenceNo ? (
              <p>
                <span className="text-neutral-500">Reference Number:</span>{" "}
                {referenceNo}
              </p>
            ) : null}
          </div>
        </div>

        {/* Body */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <p className="uppercase tracking-widest text-xs sm:text-sm text-neutral-600">
            Certificate of Completion
          </p>
          <h1 className="mt-2 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            {courseTitle}
          </h1>
          {instructors ? (
            <p className="mt-3 sm:mt-4 lg:mt-6 text-xs sm:text-sm">
              <span className="text-neutral-600">Instructors</span>{" "}
              {instructors}
            </p>
          ) : null}
        </div>

        {/* Recipient */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            {recipientName}
          </p>
        </div>

        {/* Footer */}
        <div className="absolute left-6 right-6 sm:left-8 sm:right-8 md:left-10 md:right-10 lg:left-16 lg:right-16 bottom-6 sm:bottom-8 lg:bottom-10 flex items-end justify-between text-xs sm:text-sm">
          <div className="space-y-1 text-neutral-700">
            {date ? (
              <p>
                <span className="text-neutral-500">Date</span> {date}
              </p>
            ) : null}
            {lengthHours ? (
              <p>
                <span className="text-neutral-500">Length</span> {lengthHours}
              </p>
            ) : null}
          </div>
          {/* Placeholder for signature or seal if needed later */}
          <div className="h-8 sm:h-12" />
        </div>
      </div>
    </A4Landscape>
  );
}
