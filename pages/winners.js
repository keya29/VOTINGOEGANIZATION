/** @format */

import Stylee from '../components/card/card.module.css';
import jahnavi from '../assets/jahnavi.jpg';

/** @format */

import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Countdown from 'react-countdown';
import Style from '../styles/index.module.css';
//INTERNAL IMPORT
import { VotingContext } from '../context/Voter';
// import Style from '../styles/card.module.css';
// import Card from '../components/card/card';
// import image from '../candidate.png';

const card = () => {
  const {
    getNewCandidate,
    candidateArray,
    giveVote,
    checkIfWalletIsConnected,
    candidateLength,
    getAllVoterData,
    currentAccount,
    voterLength,
  } = useContext(VotingContext);

  useEffect(() => {
    // getNewCandidate();
    // console.log(candidateArray);/
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className={Style.home}>
      {currentAccount && (
        <div className={Style.winner}>
          <div className={Style.winner_info}>
            <div className={Style.candidate_list}>
              <p>
                No Candidate:<span>{candidateLength}</span>
              </p>
            </div>
            <div className={Style.candidate_list}>
              <p>
                No Voter:<span>{voterLength}</span>
              </p>
            </div>
          </div>
          <div className={Style.winner_message}>
            <small>
              <Countdown date={Date.now() + 10000} />
            </small>
          </div>
        </div>
      )}

      <div className={Stylee.card}>
        <div className={Stylee.card_box}>
          <div className={Stylee.image}>
            <Image
              src={jahnavi}
              alt="Profile photo"
            />
          </div>

          <div className={Stylee.card_info}>
            <h2>Jahnavi</h2>
            <p>22</p>
            <p>Address: 0xc59e2441bD6b8b47E207E4cD40EbD0CD35c85aaF</p>
            <p className={Stylee.total}>Total Vote</p>
          </div>

          <div className={Stylee.card_vote}>
            <p>3</p>
          </div>

          <div className={Stylee.card_button}>
            This Candidate is the Winner
            {/* <button
              onClick={() =>
                giveVote({ id: el[2].toNumber(), address: el[6] })
              }>
              Give Vote
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default card;
