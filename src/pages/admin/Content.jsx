import React, { useEffect, useState } from 'react';
import { db } from '../../api/firebaseConfig';
import { collection, onSnapshot } from 'firebase/firestore';
import Home from './content/home/Home';
import Users from './content/users/Users';
import Votes from './content/votes/Votes';
import Report from './content/report/Report';

const Content = ({ selectedScreen }) => {
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
    .sort((a, b) => b.startTime - a.startTime);

  // Compare voters and paid-up members
  useEffect(() => {
    const votedUsernames = voters.map(
      (voter) => `${voter.firstName}.${voter.lastName}`
    );
    const notVoted = paidUpMembers.filter(
      (member) => !votedUsernames.includes(member.userName)
    );
    setYetToVote(notVoted);
  }, [voters, paidUpMembers]);

  return (
    <div className='flex flex-col gap-3 py-3 md:py-6 px-5 md:px-10'>
      {selectedScreen === 'home' && (
        <Home yetToVote={yetToVote} latestVoters={latestVoters} />
      )}
      {selectedScreen === 'users' && (
        <Users
          yetToVote={yetToVote}
          voters={voters}
          paidUpMembers={paidUpMembers}
        />
      )}
      {selectedScreen === 'votes' && <Votes />}
      {selectedScreen === 'report' && (
        <Report voters={voters} paidUpMembers={paidUpMembers} />
      )}
    </div>
  );
};

export default Content;
