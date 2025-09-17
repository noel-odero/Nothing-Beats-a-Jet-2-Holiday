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
  referenceNo,
  courseTitle,
  instructors,
  recipientName,
  date,
  lengthHours,
}: CertificateProps) {
  return (
    <A4Landscape className="overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-x-16 -translate-y-16" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-green-500/10 to-blue-500/10 rounded-full translate-x-20 translate-y-20" />
      <div className="absolute top-1/2 right-8 w-2 h-24 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-20" />

      {/* Main content frame */}
      <div className="absolute inset-0 p-8 sm:p-12 md:p-16 lg:p-20">
        {/* Header with border accent */}
        <div className="relative">
          <div className="absolute top-0 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          <div className="flex items-start justify-between pt-4">
            <div className="flex items-center gap-3 sm:gap-4">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={brand}
                  width={48}
                  height={48}
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                />
              ) : (
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
              )}
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {brand}
              </div>
            </div>
            <div className="text-right text-xs lg:text-sm text-gray-600 space-y-1 bg-white/50 backdrop-blur-sm p-3 rounded-lg">
              {certificateNo && (
                <p className="font-mono">
                  <span className="text-gray-500">ID:</span>{" "}
                  <span className="font-semibold">{certificateNo}</span>
                </p>
              )}
              {referenceNo && (
                <p className="font-mono">
                  <span className="text-gray-500">REF:</span>{" "}
                  <span className="font-semibold">{referenceNo}</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Certificate badge and title */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <p className="uppercase tracking-[0.2em] text-xs sm:text-sm text-gray-600 font-medium mb-3">
            Certificate of Achievement
          </p>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent max-w-4xl mx-auto">
            {courseTitle}
          </h1>

          {instructors && (
            <div className="mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-gray-600">
                <span className="font-medium">Led by:</span>{" "}
                <span className="text-gray-800 font-semibold">
                  {instructors}
                </span>
              </p>
            </div>
          )}
        </div>

        {/* Recipient section with decorative line */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <p className="text-sm sm:text-lg text-gray-600 mb-3">
            This certifies that
          </p>
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              {recipientName}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            has successfully completed the requirements
          </p>
        </div>

        {/* Footer with enhanced styling */}
        <div className="absolute left-8 right-8 sm:left-12 sm:right-12 md:left-16 md:right-16 lg:left-20 lg:right-20 bottom-8 sm:bottom-12 lg:bottom-16">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              {date && (
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-medium">Completed:</span>
                  <span className="font-semibold">{date}</span>
                </div>
              )}
              {lengthHours && (
                <div className="flex items-center gap-2 text-sm sm:text-base text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="font-medium">Duration:</span>
                  <span className="font-semibold">{lengthHours}</span>
                </div>
              )}
            </div>

            {/* Verification seal */}
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-blue-500/30">
                <div className="text-xs sm:text-sm font-bold text-blue-600">
                  VERIFIED
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Digital Certificate</p>
            </div>
          </div>
        </div>
      </div>
    </A4Landscape>
  );
}
