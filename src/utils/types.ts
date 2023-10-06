import { StaticImageData } from "next/image";
import { Wallet } from "./Wallet";
import { NetworkId } from "@near-wallet-selector/core";


export type nftCardprops = {
    nft: any;
}

export type collectionCardprops = {
    collection: any;
}

export type InfoTextProps = {
    fontSize: string[];
    fontWeight: number;
    gtext: string;
    wtext: string;
    wdec?: boolean;
};
  
export type ImageHeaderProps = {
    header: StaticImageData;
    avatar: StaticImageData;
};
  
export type MarketContextType = {
    wallet?: Wallet;
    handleAuth?: () => void;
    isAuth?: boolean;
    categories?: any;
    nfts?: any;
};
  
export type Constructors = {
    createAccessKeyFor?: string;
    network?: NetworkId;
}

export type contractCall = {
contractId: string;
method: string;
args?: any;
gas?: string;
deposit?: string;
}

export type MenuCompProps = {
    Icon: () => React.ReactNode;
    menulist: string[];
}