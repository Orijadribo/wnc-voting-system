import React, { useEffect, useState } from 'react';
import { db } from '../../../../api/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';

const Home = () => {
  const [voters, setVoters] = useState([]);
  const [paidUpMembers, setPaidUpMembers] = useState([]);
  const [yetToVote, setYetToVote] = useState([]);

  //Fetch paid up members
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'votes'),
      (members) => {
        let list = [];
        members.docs.forEach((doc, index) => {
          list.push({ id: index + 1, ...doc.data() });
        });
        setVoters(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  //Fetch paid up members
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'paidUpMembers'),
      (members) => {
        let list = [];
        members.docs.forEach((doc, index) => {
          list.push({ id: index + 1, ...doc.data() });
        });
        setPaidUpMembers(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);

  // Sort the voters by startTime in descending order and get the latest 5 voters
  const latestVoters = voters
    .filter((voter) => voter.startTime)
    .sort((a, b) => b.startTime - a.startTime)
    .slice(0, 5);

  // Compare voters and paid-up members
  useEffect(() => {
    const votedUsernames = voters.map((voter) => voter.userName);
    const notVoted = paidUpMembers
      .filter((member) => !votedUsernames.includes(member.userName))
      .slice(0, 5);
    setYetToVote(notVoted);
  }, [voters, paidUpMembers]);

  return (
    <div className=''>
      <div className='mb-5 text-2xl'>Home</div>
      <div
        className='flex flex-col gap-5 overflow-y-auto rounded-lg'
        style={{ height: 'calc(100vh - 220px)' }}
      >
        <div className='flex flex-col md:flex-row gap-5 rounded-lg'>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm cursor-pointer relative'>
            <div className='text-xl sticky top-0 py-2 px-5 bg-white/60 backdrop-blur-sm rounded-t-lg'>
              Active users
            </div>
            <div className='py-2 px-5'>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
              <div>Active users</div>
            </div>
          </div>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm cursor-pointer relative'>
            <div className='text-xl sticky top-0 py-2 px-5 bg-white/60 backdrop-blur-sm rounded-t-lg'>
              Previous Voters
            </div>
            <div className='py-2 px-5 capitalize'>
              {latestVoters.map((voter) => (
                <div key={voter.id}>
                  {voter.firstName} {voter.lastName}
                </div>
              ))}
            </div>
          </div>
          <div className='flex-[2] bg-green-50/80 rounded-lg shadow-sm cursor-pointer relative'>
            <div className='text-xl sticky top-0 py-2 px-5 bg-white/60 backdrop-blur-sm rounded-t-lg'>
              Yet to vote
            </div>
            <div className='py-2 px-5 capitalize'>
              {yetToVote.map((voter) => (
                <div key={voter.id}>
                  {voter.firstName} {voter.lastName}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='bg-green-50/80 rounded-lg cursor-pointer shadow-sm h-40'>
          <div className='text-xl sticky top-0 py-2 px-5 bg-white/60 backdrop-blur-sm rounded-t-lg'>
            Votes each day
          </div>
          <div className='py-2 px-5'>
            <div>Orija</div>
            <div>Orija</div>
            <div>Orija</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
