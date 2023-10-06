"use client";

import { Wallet } from "@/utils/Wallet";
import React, { createContext, useEffect, useMemo, useState } from "react";
import categories, { nfts } from "../utils/Data";
import { MarketContextType } from "@/utils/types";
import { useRouter } from "next/navigation";

let value: MarketContextType = {};
export const MarketContext = createContext(value);

const MarketPlaceProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();

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

  const handleRouting = (route: string) => {
    router.push(`/${route}`);
  };

  return (
    <MarketContext.Provider
      value={{ wallet, handleAuth, isAuth, categories, nfts, handleRouting }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export default MarketPlaceProvider;
