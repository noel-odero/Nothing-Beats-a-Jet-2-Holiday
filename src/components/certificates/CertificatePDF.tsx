import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";

export type CertificatePDFProps = {
  brand?: string;
  logoUrl?: string;
  certificateNo?: string;
  referenceNo?: string;
  courseTitle: string;
  instructors?: string;
  recipientName: string;
  date: string;
  lengthHours?: string;
};

// Register fonts for better typography (optional)
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsjZ0B4gaVc.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsg-1x4gaVc.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/opensans/v40/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4gaVc.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#f8fafc",
    padding: 30,
    fontFamily: "Open Sans",
    minHeight: "100%",
    position: "relative",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100%",
  },
  // Decorative elements
  decorativeCircle1: {
    position: "absolute",
    top: -20,
    left: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#dbeafe",
    opacity: 0.3,
  },
  decorativeCircle2: {
    position: "absolute",
    bottom: -30,
    right: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#dcfce7",
    opacity: 0.3,
  },
  decorativeBar: {
    position: "absolute",
    top: "40%",
    right: 15,
    width: 3,
    height: 50,
    backgroundColor: "#3b82f6",
    borderRadius: 2,
    opacity: 0.2,
  },
  // Main content sections
  topSection: {
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
    paddingTop: 8,
    position: "relative",
  },
  headerAccent: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 40,
    height: 2,
    backgroundColor: "#3b82f6",
    borderRadius: 1,
  },
  brandSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logoPlaceholder: {
    width: 28,
    height: 28,
    backgroundColor: "#3b82f6",
    borderRadius: 5,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  logoText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: 700,
  },
  logo: {
    width: 28,
    height: 28,
    marginRight: 8,
  },
  brandName: {
    fontSize: 18,
    fontWeight: 700,
    color: "#1f2937",
  },
  headerInfo: {
    backgroundColor: "#ffffff",
    padding: 6,
    borderRadius: 5,
    opacity: 0.9,
    maxWidth: 120,
  },
  headerInfoText: {
    fontSize: 7,
    color: "#6b7280",
    marginBottom: 1,
    fontFamily: "Courier",
  },
  headerInfoValue: {
    fontSize: 7,
    color: "#111827",
    fontWeight: 600,
    fontFamily: "Courier",
  },
  // Certificate badge section
  badgeSection: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  badge: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  badgeInner: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeIcon: {
    fontSize: 14,
    color: "#3b82f6",
  },
  certificateType: {
    fontSize: 9,
    color: "#6b7280",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 8,
    fontWeight: 500,
  },
  courseTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#1f2937",
    lineHeight: 1.1,
    textAlign: "center",
    marginBottom: 10,
    maxWidth: 450,
  },
  instructorsSection: {
    textAlign: "center",
    marginBottom: 10,
  },
  instructorsLabel: {
    fontSize: 9,
    color: "#6b7280",
    fontWeight: 500,
  },
  instructorsText: {
    fontSize: 9,
    color: "#1f2937",
    fontWeight: 600,
  },
  // Recipient section
  recipientSection: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  recipientLabel: {
    fontSize: 10,
    color: "#6b7280",
    marginBottom: 8,
    textAlign: "center",
  },
  recipientName: {
    fontSize: 20,
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: 8,
    textAlign: "center",
  },
  recipientLine: {
    width: 60,
    height: 2,
    backgroundColor: "#3b82f6",
    borderRadius: 1,
    marginBottom: 8,
  },
  recipientText: {
    fontSize: 9,
    color: "#6b7280",
    textAlign: "center",
  },
  // Footer section
  footerSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 20,
    paddingTop: 10,
  },
  footerInfo: {
    flexDirection: "column",
  },
  footerItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  footerDot: {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#3b82f6",
    marginRight: 5,
  },
  footerLabel: {
    fontSize: 8,
    color: "#374151",
    fontWeight: 500,
    marginRight: 5,
  },
  footerValue: {
    fontSize: 8,
    color: "#111827",
    fontWeight: 600,
  },
  verificationSeal: {
    alignItems: "center",
  },
  sealCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#dbeafe",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#93c5fd",
  },
  sealText: {
    fontSize: 6,
    fontWeight: 700,
    color: "#1d4ed8",
  },
  sealLabel: {
    fontSize: 6,
    color: "#6b7280",
    marginTop: 2,
  },
});

export const CertificatePDF: React.FC<CertificatePDFProps> = ({
  brand = "NextWork",
  logoUrl,
  certificateNo,
  referenceNo,
  courseTitle,
  instructors,
  recipientName,
  date,
  lengthHours,
}) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      {/* Decorative elements */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
      <View style={styles.decorativeBar} />

      <View style={styles.container}>
        {/* Top section with header and main content */}
        <View style={styles.topSection}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerAccent} />
            <View style={styles.brandSection}>
              {logoUrl ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <Image style={styles.logo} src={logoUrl} />
              ) : (
                <View style={styles.logoPlaceholder}>
                  <Text style={styles.logoText}>N</Text>
                </View>
              )}
              <Text style={styles.brandName}>{brand}</Text>
            </View>

            <View style={styles.headerInfo}>
              {certificateNo && (
                <View>
                  <Text style={styles.headerInfoText}>ID:</Text>
                  <Text style={styles.headerInfoValue}>{certificateNo}</Text>
                </View>
              )}
              {referenceNo && (
                <View>
                  <Text style={styles.headerInfoText}>REF:</Text>
                  <Text style={styles.headerInfoValue}>{referenceNo}</Text>
                </View>
              )}
            </View>
          </View>

          {/* Certificate badge and title */}
          <View style={styles.badgeSection}>
            <View style={styles.badge}>
              <View style={styles.badgeInner}>
                <Text style={styles.badgeIcon}>✓</Text>
              </View>
            </View>

            <Text style={styles.certificateType}>
              Certificate of Achievement
            </Text>

            <Text style={styles.courseTitle}>{courseTitle}</Text>

            {instructors && (
              <View style={styles.instructorsSection}>
                <Text style={styles.instructorsLabel}>
                  Led by:{" "}
                  <Text style={styles.instructorsText}>{instructors}</Text>
                </Text>
              </View>
            )}
          </View>

          {/* Recipient section */}
          <View style={styles.recipientSection}>
            <Text style={styles.recipientLabel}>This certifies that</Text>
            <Text style={styles.recipientName}>{recipientName}</Text>
            <View style={styles.recipientLine} />
            <Text style={styles.recipientText}>
              has successfully completed the requirements
            </Text>
          </View>
        </View>

        {/* Footer section */}
        <View style={styles.footerSection}>
          <View style={styles.footerInfo}>
            {date && (
              <View style={styles.footerItem}>
                <View
                  style={[styles.footerDot, { backgroundColor: "#3b82f6" }]}
                />
                <Text style={styles.footerLabel}>Completed:</Text>
                <Text style={styles.footerValue}>{date}</Text>
              </View>
            )}
            {lengthHours && (
              <View style={styles.footerItem}>
                <View
                  style={[styles.footerDot, { backgroundColor: "#8b5cf6" }]}
                />
                <Text style={styles.footerLabel}>Duration:</Text>
                <Text style={styles.footerValue}>{lengthHours}</Text>
              </View>
            )}
          </View>

          {/* Verification seal */}
          <View style={styles.verificationSeal}>
            <View style={styles.sealCircle}>
              <Text style={styles.sealText}>VERIFIED</Text>
            </View>
            <Text style={styles.sealLabel}>Digital Certificate</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
export default CertificatePDF;
