"use client";

import { Wallet } from "@/utils/Wallet";
import { type } from "os";
import React, { createContext, useEffect, useMemo, useState } from "react";

type MarketContextType = {
  wallet?: Wallet;
  handleAuth?: () => void;
  isAuth?: boolean;
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
    <MarketContext.Provider value={{ wallet, handleAuth, isAuth }}>
      {children}
    </MarketContext.Provider>
  );
};

export default MarketPlaceProvider;
