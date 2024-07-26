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
import Chart from '../votes/Chart';

const styles = StyleSheet.create({
  pdfContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 20,
  },
  pdfHeader: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  pdfHeaderImage: {
    height: 96,
    width: 110,
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
    fontWeight: 500,
  },
  pdfResults: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  sectionTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    paddingVertical: 10,
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
  voteResultsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  voteResults: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 20,
    paddingBottom: 20,
  },
  voteCounts: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  chart: {
    flex: 2,
    width: '100%',
    height: '100%',
  },
  reasons: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  reason: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 10,
  },
  reasonName: {
    display: 'flex',
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  reasonComment: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
  noReasons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ActualReport = ({ votes }) => {
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
              <Text>29th July, 2024 - 7th August, 2024</Text>
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
            <View style={styles.title}>
              <Text style={styles.sectionTitle}>Result Summary</Text>
            </View>
            {votes.map((article, index) => (
              <View key={index} style={styles.article}>
                <Text style={styles.articleTitle}>
                  Article {article.article}
                </Text>
                <View style={styles.voteResultsContainer}>
                  <View style={styles.voteResults}>
                    <View style={styles.voteCounts}>
                      <Text>Voted Yes: {article.yes}</Text>
                      <Text>Voted No: {article.no}</Text>
                    </View>
                    <View style={styles.chart}>
                      {/* <Chart yesVote={article.yes} noVote={article.no} /> */}
                    </View>
                  </View>
                </View>
                <View style={styles.reasons}>
                  <View style={styles.title}>
                    <Text style={styles.sectionTitle}>Reasons For No Vote</Text>
                  </View>
                  {article.voterReasons && article.voterReasons.length > 0 ? (
                    article.voterReasons.map((voter, index) => (
                      <View key={index}>
                        {voter?.reason !== '' && (
                          <View>
                            <View style={styles.reason}>
                              <Text style={styles.reasonName}>
                                {voter?.voterName}
                              </Text>
                              <Text style={styles.reasonComment}>
                                {voter?.reason}
                              </Text>
                            </View>
                            <View style={styles.separator}>
                              <View style={styles.separatorLine} />
                            </View>
                          </View>
                        )}
                      </View>
                    ))
                  ) : (
                    <View style={styles.noReasons}>
                      <Text style={styles.noReasonsText}>
                        No reasons provided.
                      </Text>
                    </View>
                  )}
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
