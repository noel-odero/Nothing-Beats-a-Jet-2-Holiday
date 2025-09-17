// Mock certificate data for student
export interface Certificate {
  id: string;
  certificateNo: string;
  certificateUrl: string;
  referenceNo: string;
  courseTitle: string;
  instructors: string;
  recipientName: string;
  date: string;
  lengthHours: string;
  status: "completed" | "in-progress" | "failed";
  completedAt: string;
  issuer: string;
}

export const mockCertificates: Certificate[] = [
  {
    id: "cert-001",
    certificateNo: "NWC-6494dff7-c653-4758-a278-8ffc5a1b0d0d",
    certificateUrl: "certs.nextwork.rw/NWC-6494dff7",
    referenceNo: "0001",
    courseTitle: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
    instructors: "Jonas Schmedtmann",
    recipientName: "Ibrahim Maâzou Djahadi",
    date: "May 1, 2025",
    lengthHours: "42 total hours",
    status: "completed",
    completedAt: "2025-05-01",
    issuer: "Next Work",
  },
  {
    id: "cert-002",
    certificateNo: "NWC-7895abc2-d456-4f89-b012-3cde6f7g8h9i",
    certificateUrl: "certs.nextwork.rw/NWC-7895abc2",
    referenceNo: "0002",
    courseTitle: "Full-Stack Web Development with React & Node.js",
    instructors: "Sarah Johnson, Mike Chen",
    recipientName: "Ibrahim Maâzou Djahadi",
    date: "June 15, 2025",
    lengthHours: "38 total hours",
    status: "completed",
    completedAt: "2025-06-15",
    issuer: "Next Work",
  },
  {
    id: "cert-003",
    certificateNo: "NWC-1234efgh-5678-9abc-def0-123456789abc",
    certificateUrl: "certs.nextwork.rw/NWC-1234efgh",
    referenceNo: "0003",
    courseTitle: "Advanced Python Programming & Data Science",
    instructors: "Dr. Amelia Rodriguez",
    recipientName: "Ibrahim Maâzou Djahadi",
    date: "July 20, 2025",
    lengthHours: "55 total hours",
    status: "completed",
    completedAt: "2025-07-20",
    issuer: "Next Work",
  },
  {
    id: "cert-004",
    certificateNo: "NWC-5678ijkl-9012-3mno-4pqr-567890123def",
    certificateUrl: "certs.nextwork.rw/NWC-5678ijkl",
    referenceNo: "0004",
    courseTitle: "Digital Marketing & E-commerce Fundamentals",
    instructors: "Rachel Thompson",
    recipientName: "Ibrahim Maâzou Djahadi",
    date: "August 10, 2025",
    lengthHours: "28 total hours",
    status: "in-progress",
    completedAt: "",
    issuer: "Next Work",
  },
];
