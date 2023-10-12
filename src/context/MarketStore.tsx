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
  const [tokens, setTokens] = useState([]);

  const wallet = useMemo(() => {
    return new Wallet({
      createAccessKeyFor: "pix.phlay.testnet",
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

  useMemo(() => {
    const getTokens = async () => {
      await wallet.startUp();
      const tokens = await wallet.viewMethod({
        contractId: "pix.phlay.testnet",
        method: "nft_tokens",
      });
      console.log(tokens);
      setTokens(tokens);
    };
    getTokens();
  }, [wallet]);

  console.log(tokens);

  const handleAuth = () => {
    if (isAuth) {
      // logout
      handleRouting("profile");
    } else {
      // login
      wallet.signIn();
    }
  };

  const handleUserData = async () => {
    // get user data

    const userTokens = await wallet.viewMethod({
      contractId: "pix.phlay.testnet",
      method: "nft_tokens_for_owner",
      args: { account_id: wallet.accountId, limit: 5 },
    });

    console.log(userTokens);
    return userTokens;
  };

  const handleRouting = (route: string) => {
    router.push(`/${route}`);
  };

  return (
    <MarketContext.Provider
      value={{
        wallet,
        handleAuth,
        isAuth,
        categories,
        nfts,
        handleRouting,
        handleUserData,
        tokens,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export default MarketPlaceProvider;
