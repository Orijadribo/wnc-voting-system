import React, { useEffect, useState } from 'react';
import ActualReport from './ActualReport';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../api/firebaseConfig';

const Report = ({ voters, paidUpMembers }) => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'votes'),
      (voters) => {
        const articleVotes = {};

        // Process each document in the collection
        voters.docs.forEach((doc) => {
          const data = doc.data();
          const { firstName, lastName, votes } = data;

          for (const [articleId, voteData] of Object.entries(votes)) {
            const { vote: voteType, reason } = voteData;
            const voterName = `${firstName} ${lastName}`;

            // Initialize article if not present
            if (!articleVotes[articleId]) {
              articleVotes[articleId] = {
                yes: 0,
                no: 0,
                voters: [],
              };
            }

            // Increment the count based on the vote
            if (voteType === 'yes') {
              articleVotes[articleId].yes += 1;
            } else if (voteType === 'no') {
              articleVotes[articleId].no += 1;
            }

            // Add voter name and reason to the voters array for the article
            articleVotes[articleId].voters.push({ voterName, reason });
          }
        });

        // Convert aggregated results into the desired format
        const results = Object.entries(articleVotes).map(([article, data]) => ({
          article,
          yes: data.yes,
          no: data.no,
          voterReasons: data.voters,
        }));

        // Update the state with the results
        setVotes(results);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      // Cleanup the listener on component unmount
      unsub();
    };
  }, []);

  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <div className='text-2xl p-2 pl-0'>Report</div>
        <div className=''>
          <PDFDownloadLink
            document={
              <ActualReport
                votes={votes}
                voters={voters}
                paidUpMembers={paidUpMembers}
              />
            }
            fileName='vote_results_2024'
          >
            {({ loading }) =>
              loading ? (
                <button className='border p-2 rounded-lg hover:bg-green-200 cursor-not-allowed'>
                  Loading Document
                </button>
              ) : (
                <button className='border p-2 rounded-lg hover:bg-green-200'>
                  Download
                </button>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
      <div
        className='flex flex-col gap-5 overflow-y-auto overflow-x-auto rounded-lg w-full border p-5'
        style={{ height: 'calc(100vh - 240px)' }}
      >
        <ActualReport
          votes={votes}
          voters={voters}
          paidUpMembers={paidUpMembers}
        />
      </div>
    </div>
  );
};

export default Report;
