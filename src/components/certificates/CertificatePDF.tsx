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
  certificateUrl?: string;
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
    backgroundColor: "#ffffff",
    padding: 60,
    fontFamily: "Open Sans",
  },
  container: {
    flex: 1,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 60,
  },
  brandSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  brandName: {
    fontSize: 20,
    fontWeight: 600,
    color: "#000000",
  },
  headerInfo: {
    alignItems: "flex-end",
    maxWidth: 200,
  },
  headerInfoText: {
    fontSize: 10,
    color: "#666666",
    marginBottom: 2,
    textAlign: "right",
  },
  certificateType: {
    fontSize: 10,
    color: "#666666",
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 16,
  },
  courseTitle: {
    fontSize: 36,
    fontWeight: 700,
    color: "#000000",
    lineHeight: 1.1,
    marginBottom: 20,
  },
  instructorsSection: {
    marginBottom: 40,
  },
  instructorsLabel: {
    fontSize: 12,
    color: "#666666",
  },
  instructorsText: {
    fontSize: 12,
    color: "#000000",
  },
  recipientName: {
    fontSize: 28,
    fontWeight: 600,
    color: "#000000",
    marginBottom: 80,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  footerInfo: {
    flexDirection: "column",
  },
  footerLabel: {
    fontSize: 10,
    color: "#666666",
  },
  footerValue: {
    fontSize: 10,
    color: "#000000",
    marginBottom: 4,
  },
});

export const CertificatePDF: React.FC<CertificatePDFProps> = ({
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
}) => (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.brandSection}>
            {logoUrl && (
              // eslint-disable-next-line jsx-a11y/alt-text
              <Image style={styles.logo} src={logoUrl} />
            )}
            <Text style={styles.brandName}>{brand}</Text>
          </View>

          <View style={styles.headerInfo}>
            {certificateNo && (
              <Text style={styles.headerInfoText}>
                Certificate no: {certificateNo}
              </Text>
            )}
            {certificateUrl && (
              <Text style={styles.headerInfoText}>
                Certificate url: {certificateUrl}
              </Text>
            )}
            {referenceNo && (
              <Text style={styles.headerInfoText}>
                Reference Number: {referenceNo}
              </Text>
            )}
          </View>
        </View>

        {/* Main Content */}
        <View>
          <Text style={styles.certificateType}>Certificate of Completion</Text>

          <Text style={styles.courseTitle}>{courseTitle}</Text>

          {instructors && (
            <View style={styles.instructorsSection}>
              <Text style={styles.instructorsLabel}>
                Instructors{" "}
                <Text style={styles.instructorsText}>{instructors}</Text>
              </Text>
            </View>
          )}
        </View>

        {/* Recipient */}
        <Text style={styles.recipientName}>{recipientName}</Text>

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.footerInfo}>
            {date && (
              <View>
                <Text style={styles.footerLabel}>Date</Text>
                <Text style={styles.footerValue}>{date}</Text>
              </View>
            )}
            {lengthHours && (
              <View>
                <Text style={styles.footerLabel}>Length</Text>
                <Text style={styles.footerValue}>{lengthHours}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default CertificatePDF;
