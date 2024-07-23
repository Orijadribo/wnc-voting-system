import React, { useEffect, useState } from 'react';
import Chart from './Chart';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../api/firebaseConfig';

const Votes = () => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'votes'),
      (voters) => {
        const articleVotes = {};

        // Process each document in the collection
        voters.docs.forEach((doc) => {
          const data = doc.data();
          const votes = data.votes; // Assuming votes is a map with article IDs as keys

          for (const [key, vote] of Object.entries(votes)) {
            const { vote: voteType } = vote;

            // Initialize article if not present
            if (!articleVotes[key]) {
              articleVotes[key] = { yes: 0, no: 0 };
            }

            // Increment the count based on the vote
            if (voteType === 'yes') {
              articleVotes[key].yes += 1;
            } else if (voteType === 'no') {
              articleVotes[key].no += 1;
            }
          }
        });

        // Convert aggregated results into the desired format
        const results = Object.entries(articleVotes).map(
          ([article, counts]) => ({
            article,
            yes: counts.yes,
            no: counts.no,
          })
        );

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
    <div className=''>
      <div className='mb-5 text-2xl'>Votes</div>
      <div
        className='grid grid-cols-1 md:grid-cols-3 gap-5 overflow-y-auto rounded-lg'
        style={{ height: 'calc(100vh - 220px)' }}
      >
        {votes.map((article, index) => (
          <div
            key={index}
            className='rounded-lg shadow-sm bg-green-50/80 h-[250px] pt-2 px-5'
          >
            <div className='text-xl font-light -mb-5'>
              Article {article.article}
            </div>
            <Chart yesVote={article.yes} noVote={article.no} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Votes;
