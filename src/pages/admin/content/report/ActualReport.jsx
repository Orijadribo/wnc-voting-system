import React from 'react';
import {
  Document,
  Page,
  StyleSheet,
  Text,
  View,
  Image,
} from '@react-pdf/renderer';
import { WNGC_logo } from '../../../../assets/index';

const styles = StyleSheet.create({
  pdfContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
  },
  pdfHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  pdfHeaderImage: {
    height: 96,
  },
  pdfTitle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  mainTitle: {
    fontSize: 32,
  },
  subTitle: {
    fontSize: 28,
    fontWeight: 300,
  },
  resultsTitle: {
    fontSize: 24,
    fontWeight: 300,
  },
  pdfStats: {
    paddingBottom: 20,
  },
  stat: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  statLabel: {
    fontWeight: 'bold',
  },
  pdfResults: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
  article: {
    border: '1px solid #000',
    borderRadius: 8,
    marginBottom: 20,
    padding: 20,
  },
  articleTitle: {
    fontSize: 28,
    paddingBottom: 20,
  },
  voteResults: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 20,
  },
  voteCounts: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  chart: {
    flex: 3,
  },
  reasons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  reason: {
    display: 'flex',
    paddingBottom: 10,
  },
  reasonName: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  reasonComment: {
    flex: 4,
    textAlign: 'justify',
  },
  separator: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px 0',
  },
  separatorLine: {
    border: '1px solid #000',
    width: '95%',
  },
  pdfSignatures: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'space-between',
    marginTop: 80,
    padding: '0 40px',
  },
  signature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  signatureLine: {
    border: '1px solid #000',
    width: '100%',
  },
  signatureText: {
    margin: '5px 0',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: -50,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const ActualReport = () => {
  return (
    <Document>
      <Page
        style={{
          paddingTop: 50, // Adjust the value as needed
          paddingBottom: 70, // Adjust the value as needed
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.pdfContainer}>
          <View style={styles.pdfHeader}>
            <Image
              style={styles.pdfHeaderImage}
              src={WNGC_logo}
              alt='WNGC_logo'
            />
          </View>
          <View style={styles.pdfTitle}>
            <Text style={styles.mainTitle}>West Nile Golf Club</Text>
            <Text style={styles.subTitle}>Constitution Vote</Text>
            <Text style={styles.resultsTitle}>Results</Text>
          </View>
          <View style={styles.pdfStats}>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Period:</Text>
              <Text>Monday 29th July 2024 - Wednesday 7th August 2024</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Verified Voters:</Text>
              <Text>50</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statLabel}>Those Who Voted:</Text>
              <Text>30</Text>
            </View>
          </View>
          <View style={styles.pdfResults}>
            <Text style={styles.sectionTitle}>Result Summary</Text>
            {[1, 2, 3, 4, 5].map((article, index) => (
              <View key={index} style={styles.article}>
                <Text style={styles.articleTitle}>Article {article}</Text>
                <View style={styles.voteResults}>
                  <View style={styles.voteCounts}>
                    <Text>Voted Yes: 20</Text>
                    <Text>Voted No: 10</Text>
                  </View>
                  <View style={styles.chart}>
                    <Text>pie chart</Text>
                  </View>
                </View>
                <View style={styles.reasons}>
                  <Text style={styles.sectionTitle}>Reasons For No Vote</Text>
                  <View style={styles.reason}>
                    <Text style={styles.reasonName}>Daniel</Text>
                    <Text style={styles.reasonComment}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Illum sed vel nostrum nesciunt saepe repudiandae porro
                      officia animi, ipsum magnam.
                    </Text>
                  </View>
                  <View style={styles.separator}>
                    <View style={styles.separatorLine} />
                  </View>
                  <View style={styles.reason}>
                    <Text style={styles.reasonName}>Orija</Text>
                    <Text style={styles.reasonComment}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Earum odio ipsa pariatur sunt fuga distinctio voluptas
                      itaque ex consequuntur iure in natus voluptate beatae
                      magnam, hic dolorem libero amet! Et.
                    </Text>
                  </View>
                  <View style={styles.separator}>
                    <View style={styles.separatorLine} />
                  </View>
                  <View style={styles.reason}>
                    <Text style={styles.reasonName}>peti</Text>
                    <Text style={styles.reasonComment}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Est, dicta?
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.pdfSignatures}>
            <View style={styles.signature}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureText}>Chair Name</Text>
              <Text style={styles.signatureText}>Chairman</Text>
            </View>
            <View style={styles.signature}>
              <View style={styles.signatureLine} />
              <Text style={styles.signatureText}>Sec Name</Text>
              <Text style={styles.signatureText}>General Secretary</Text>
            </View>
          </View>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </View>
      </Page>
    </Document>
  );
};

export default ActualReport;
