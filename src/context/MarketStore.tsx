"use client";

import { Wallet } from "@/utils/Wallet";
import React, { createContext, useEffect, useMemo, useState } from "react";
import azukiCat from "../../public/images/azukiCat.png";
import bakcCat from "../../public/images/bakcCat.png";
import checkCat from "../../public/images/checkCat.png";
import cloneCat from "../../public/images/cloneCat.png";
import doodleCat from "../../public/images/doodleCat.png";
import meebitsCat from "../../public/images/meebitsCat.png";
import metroCat from "../../public/images/metroCat.png";
import on1Cat from "../../public/images/on1Cat.png";
import superpumaCat from "../../public/images/superpumaCat.png";
import bayc from "../../public/images/bayc.png";

const categories = [
  {
    id: "bayc",
    name: "Bored Ape Yacht Club",
    image: bayc,
    count: 24,
    floor: 16.02,
    volume: "11k",
  },
  {
    id: "meebits",
    name: "Meebits",
    image: meebitsCat,
    count: 24,
    floor: 39.4,
    volume: "1536",
  },
  {
    id: "clonex",
    name: "CLONE X - X TAKASHI",
    image: cloneCat,
    count: 24,
    floor: 24.02,
    volume: "1234",
  },
  {
    id: "superpuma",
    name: "Super PUMA",
    image: superpumaCat,
    count: 24,
    floor: 48.1,
    volume: "4523",
  },
  {
    id: "checks",
    name: "Checks - VV Edition",
    image: checkCat,
    count: 24,
    floor: 72.59,
    volume: "2382",
  },
  {
    id: "doodles",
    name: "Doodles",
    image: doodleCat,
    count: 24,
    floor: 35.4,
    volume: "6457",
  },
  {
    id: "azuki",
    name: "Azuki",
    image: azukiCat,
    count: 24,
    floor: 93.67,
    volume: "10k",
  },
  {
    id: "bakc",
    name: "Bored Ape Kennel Club",
    image: bakcCat,
    count: 24,
    floor: 54.9,
    volume: "8623",
  },
  {
    id: "on1force",
    name: "ON1 Force",
    image: on1Cat,
    count: 24,
    floor: 52.23,
    volume: "3275",
  },
  {
    id: "metro",
    name: "Metropolis by mpkoz",
    image: metroCat,
    count: 24,
    floor: 25.4,
    volume: "3356",
  },
];

type MarketContextType = {
  wallet?: Wallet;
  handleAuth?: () => void;
  isAuth?: boolean;
  categories?: any;
};
let value: MarketContextType = {};
export const MarketContext = createContext(value);

const MarketPlaceProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  const wallet = useMemo(() => {
    return new Wallet({
      createAccessKeyFor: "phlay.testnet",
      network: "testnet",
    });
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await wallet.startUp();
      console.log(wallet.balance);
      setIsAuth(auth);
    };
    checkAuth();
  }, [wallet]);

  const handleAuth = () => {
    if (isAuth) {
      // logout
      wallet.signOut();
    } else {
      // login
      wallet.signIn();
    }
  };

  return (
    <MarketContext.Provider value={{ wallet, handleAuth, isAuth, categories }}>
      {children}
    </MarketContext.Provider>
  );
};

export default MarketPlaceProvider;
