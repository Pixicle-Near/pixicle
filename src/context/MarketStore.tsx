"use client";

import { Wallet } from "@/utils/Wallet";
import React, { createContext, useEffect, useMemo, useState } from "react";
import categories from "./collectionData";
import alkebulianTribeNFT from "../../public/images/alkebulianTribeNFT.png";
import angryapeNFT from "../../public/images/angryapeNFT.png";
import boobNFT from "../../public/images/boobNFT.png";
import bravedogNFT from "../../public/images/bravedogNFT.png";
import countrymanNFT from "../../public/images/countrymanNFT.png";
import doodlepro1NFT from "../../public/images/doodlepro1NFT.png";
import doodlepro2NFT from "../../public/images/doodlepro2NFT.png";
import doodlepro3NFT from "../../public/images/doodlepro3NFT.png";
import doodlepro4NFT from "../../public/images/doodlepro4NFT.png";
import suckingNFT from "../../public/images/suckingNFT.png";
import thorNFT from "../../public/images/thorNFT.png";
import bay from "../../public/images/bay.png";

const nfts = [
  {
    id: 1,
    name: "Alkebulan Tribe",
    image: alkebulianTribeNFT,
    price: "0.5",
    category: "Art",
    creator: "Alkebulan Tribe",
    creatorImage: alkebulianTribeNFT,
    creatorAddress: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    description:
      "Alkebulan Tribe is a collection of 10,000 unique NFTs on the Ethereum blockchain. The collection is inspired by the African continent and its rich history. The name Alkebulan is the oldest name for Africa. It means the garden of Eden or the mother of mankind. The collection is a tribute to the African continent and its people.",
    collection: "Alkebulan Tribe",
  },
  {
    id: 2,
    name: "Angry Ape",
    image: angryapeNFT,
    price: "0.5",
    category: "Art",
    creator: "Angry Ape",
    creatorImage: angryapeNFT,
    creatorAddress: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    description:
      "Angry Ape is a collection of 10,000 unique NFTs on the Ethereum blockchain. The collection is inspired by the African continent and its rich history. The name Alkebulan is the oldest name for Africa. It means the garden of Eden or the mother of mankind. The collection is a tribute to the African continent and its people.",
    collection: "Angry Ape",
  },
  {
    id: 3,
    name: "Boob",
    image: boobNFT,
    price: "0.5",
    category: "Art",
    creator: "Boob",
    creatorImage: boobNFT,
    creatorAddress: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    description:
      "Boob is a collection of 10,000 unique NFTs on the Ethereum blockchain. The collection is inspired by the African continent and its rich history. The name Alkebulan is the oldest name for Africa. It means the garden of Eden or the mother of mankind. The collection is a tribute to the African continent and its people.",
    collection: "Boob",
  },
  {
    id: 4,
    name: "Brave Dog",
    image: bravedogNFT,
    price: "0.5",
    category: "Art",
    creator: "Brave Dog",
    creatorImage: bravedogNFT,
    creatorAddress: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
    description:
      "Brave Dog is a collection of 10,000 unique NFTs on the Ethereum blockchain. The collection is inspired by the African continent and its rich history. The name Alkebulan is the oldest name for Africa. It means the garden of Eden or the mother of mankind. The collection is a tribute to the African continent and its people.",
    collection: "Brave Dog",
  },
  {
    id: 5,
    name: "Country Man",
    image: countrymanNFT,
    price: "0.5",
    category: "Art",
    creator: "Country Man",
    creatorImage: countrymanNFT,
    creatorAddress: "Phlay.testnet",
    description: "",
    collection: "Thor Apes",
  },
  {
    id: 6,
    name: "Doodle Pro",
    image: doodlepro1NFT,
    price: "0.5",
    category: "Art",
    creator: "Doodle Pro 1",
    creatorImage: doodlepro1NFT,
    creatorAddress: "Phlay.testnet",
    description: "",
    collection: "doodles",
  },
  {
    id: 7,
    name: "Doodle Pro",
    image: doodlepro2NFT,
    price: "0.5",
    category: "Art",
    creator: "Doodle Pro 2",
    creatorImage: doodlepro2NFT,
    creatorAddress: "Phlay.testnet",
    description: "",
    collection: "doodles",
  },
  {
    id: 8,
    name: "Doodle Pro",
    image: doodlepro3NFT,
    price: "0.5",
    category: "Art",
    creator: "Doodle Pro",
    creatorImage: doodlepro3NFT,
    creatorAddress: "Phlay.testnet",
    description: "",
    collection: "doodles",
  },
  {
    id: 9,
    name: "Doodle Pro",
    image: doodlepro4NFT,
    price: "0.5",
    category: "Art",
    creator: "Doodle Pro 4",
    creatorImage: doodlepro4NFT,
    creatorAddress: "Phlay.testnet",
    description: "",
    collection: "doodles",
  },
  {
    id: 10,
    name: "Sucking",
    image: suckingNFT,
    price: "0.5",
    category: "Art",
    creator: "Sucking",
    creatorImage: suckingNFT,
    creatorAddress: "Phlay.testnet",
    description: "",
    collection: "Sucking",
  },
  {
    id: 11,
    name: "Thor",
    image: thorNFT,
    price: "0.5",
    category: "Art",
    creator: "Thor",
    creatorImage: thorNFT,
    creatorAddress: "Phlay.testnet",
    description: "",
    collection: "Thor Apes",
  },
  {
    id: 12,
    name: "Bored Ape Yacht Club",
    image: bay,
    price: "0.5",
    category: "Art",
    creator: "Bored Ape Yacht Club",
    creatorImage: bay,
    creatorAddress: "Phlay.testnet",
    description: "Bored Ape Yacht Club",
  },
];

type MarketContextType = {
  wallet?: Wallet;
  handleAuth?: () => void;
  isAuth?: boolean;
  categories?: any;
  nfts?: any;
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
    <MarketContext.Provider
      value={{ wallet, handleAuth, isAuth, categories, nfts }}
    >
      {children}
    </MarketContext.Provider>
  );
};

export default MarketPlaceProvider;
