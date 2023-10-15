"use client";

import { Wallet } from "@/utils/Wallet";
import React, { createContext, useEffect, useMemo, useState } from "react";
import categories, { nfts } from "../utils/Data";
import { MarketContextType } from "@/utils/types";
import { useRouter } from "next/navigation";

let value: MarketContextType = {
  userTokens: [],
  tokens: [],
  isAuth: false,
  userCollections: [],
  collections: [],
};
export const MarketContext = createContext(value);

const MarketPlaceProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const [tokens, setTokens] = useState([]);
  const [collections, setCollections] = useState([]);
  const [userTokens, setUserTokens] = useState([]);
  const [userCollections, setUserCollections] = useState([]);

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
        contractId: "pixil.phlay.testnet",
        method: "nft_tokens",
      });
      console.log(tokens);
      setTokens(tokens);
    };
    getTokens();
    const getCollections = async () => {
      await wallet.startUp();
      const collections = await wallet.viewMethod({
        contractId: "pixil.phlay.testnet",
        method: "get_series",
      });
      console.log(collections);
      setCollections(collections);
    };
    getCollections();
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
    try {
      const userTokens = await wallet.viewMethod({
        contractId: "pixil.phlay.testnet",
        method: "nft_tokens_for_owner",
        args: { account_id: wallet.accountId, limit: 10 },
      });
      console.log(userTokens);
      setUserTokens(userTokens);
      const coll = await wallet?.viewMethod({
        contractId: "pixil.phlay.testnet",
        method: "get_series_by_owner",
        args: {
          owner_id: wallet?.accountId,
        },
      });
      console.log(coll);
      setUserCollections(coll);
    } catch (error) {
      console.log(error);
    }
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
        userTokens,
        userCollections,
        collections,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export default MarketPlaceProvider;
