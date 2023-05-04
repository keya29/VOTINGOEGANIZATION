import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {useNavigate} from "react-router-dom"
import { AiFillLock, AiFillUnlock } from "react-icons/ai";
import { useEffect } from "react";
//INTERNAL IMPORT/
import { VotingContext } from "../../context/Voter";
import Style from "./NavBar.module.css";
import loding from "../../loding.gif";
import { useRouter } from 'next/router';


const NavBar = () => {
const router = useRouter();
  const { connectWallet, error, currentAccount } = useContext(VotingContext);
  const [openNav, setOpenNav] = useState(true);
  const [admin, setAdmin] = useState(false);


  const openNaviagtion = async() => {
  
    console.log(currentAccount);
    if (openNav) {
      setOpenNav(false);
    } else if (!openNav) {
      setOpenNav(true);
    }
  };
  async function checkAdmin() {
    if (currentAccount == 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266)
      router.push('/candidate-regisration')
    else
      alert("You are not admin, Please Switch to address 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  }

   async function checkVoter() {
    if (currentAccount == 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266)
      router.push('/allowed-voters')
    else
      alert("You are not admin, Please Switch to address 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266")
  }
  return (
    <div className={Style.navbar}>
      {error === "" ? (
        ""
      ) : (
        <div className={Style.message__Box}>
          <div style={Style.message}>
            <p>{error}</p>
          </div>
        </div>
      )}

      <div className={Style.navbar_box}>
        <div className={Style.title}>
          <Link href={{ pathname: "/" }}>
            <Image src={loding} alt="logo" width={80} height={80} />
          </Link>
        </div>
        <div className={Style.connect}>
          {currentAccount ? (
            <div>
              <div className={Style.connect_flex}>
                <button onClick={() => openNaviagtion()}>
                  {currentAccount.slice(0, 10)}..
                </button>
                {currentAccount && (
                  <span>
                    {openNav ? (
                      <AiFillUnlock onClick={() => openNaviagtion()} />
                    ) : (
                      <AiFillLock onClick={() => openNaviagtion()} />
                    )}
                  </span>
                )}
              </div>

              {openNav  && (
                <div className={Style.navigation}>
                  <p>
                    <Link href={{ pathname: "/" }}>Home</Link>
                  </p>
                  <>
                    <p>
                   
                        <button onClick={checkAdmin} >
                          Candidate Registraction
                        </button>
                      
                  </p>
                  <p>
                    <button onClick={checkAdmin}>
                      Voter Registration
                   </button>
                  </p>
                      
                  </>
                  <p>
                      
                    <Link href={{ pathname: "voterList" }}>Voter Lsit</Link>
                  </p>
                      <p>
                    <Link href={{ pathname: "winners" }}>Winner</Link>
                  </p>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => connectWallet()}>Connect Wallet</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
