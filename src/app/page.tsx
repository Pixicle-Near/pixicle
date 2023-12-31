"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/_header";
import {
  VStack,
  Text,
  HStack,
  Button,
  Box,
  Stack,
  Link,
} from "@chakra-ui/react";
import { DirArrow } from "@/utils/icons";
import nft from "../../public/images/group-2.png";
import bgc from "../../public/images/bitcoin-gocard 1.png";
import eth from "../../public/images/ethereum 1.png";
import dash from "../../public/images/dash-2 1.png";
import meta from "../../public/images/Frame 18.png";
import CollectionCard from "@/components/_collectionCard";
import NftCard from "@/components/_nftCard";
import Footer from "@/components/_footer";
import { MarketContext } from "@/context/MarketStore";
import { useContext } from "react";

export default function Home() {
  const { categories, tokens, collections } = useContext(MarketContext);
  return (
    <main className={styles.main}>
      <Header />

      {/* <Hero Section /> */}
      <div className={styles.center}>
        <VStack
          fontFamily={"NexaBold"}
          gap={["1.56rem", "1.56rem", "5.4rem"]}
          pl={["1rem", "1rem", "4.62rem"]}
        >
          <Text fontSize={["2.629rem", "2.629rem", "5rem"]} fontWeight={400}>
            Get the best and popular{" "}
            <Link color={"#1DB96F"}>NFT collections</Link>
          </Text>
          <HStack
            alignItems={"flex-start"}
            w={"100%"}
            gap={["1.5rem", "2.31rem", "2.31rem"]}
          >
            <Button
              variant={"outline"}
              colorScheme="green"
              borderRadius={"1rem"}
              padding={"1rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={["0.2rem", "0.2rem", "0.5rem"]}
              height={["2.6rem", "2.6rem", "4.4rem"]}
            >
              <Text fontSize={["1rem", "1rem", "1.5rem"]} fontWeight={400}>
                Explore More
              </Text>
              <DirArrow color={"#1DB96F"} size={"2.5vw"} />
            </Button>
            <Button
              variant={"solid"}
              colorScheme="green"
              borderRadius={"1rem"}
              padding={"1rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={["0.2rem", "0.2rem", "0.5rem"]}
              height={["2.6rem", "2.6rem", "4.4rem"]}
            >
              <Text fontSize={["1rem", "1rem", "1.5rem"]} fontWeight={400}>
                Create Token
              </Text>
              <DirArrow color={"#FFFFFF"} size={"2.5vw"} />
            </Button>
          </HStack>
        </VStack>
        <Box display={["none", "block"]}>
          <Image
            className={styles.nfts}
            src={nft}
            alt="nfts"
            style={{ width: "120rem" }}
          />
        </Box>
        <Box display={["block", "none"]}>
          <Image
            src={nft}
            alt="nfts"
            style={{
              width: "120rem",
              left: "-2rem",
              position: "relative",
              objectFit: "cover",
            }}
          />
        </Box>
      </div>

      {/* <Our Partners Section /> */}
      <VStack
        fontFamily={"NexaBold"}
        padding={["1.29rem 0", "1.29rem 0", "2rem 3.38rem 4rem"]}
        gap={["1.44rem", "1.44rem", "3.38rem"]}
        bgColor={"#1E1E1E"}
        w={"100%"}
        color={"#FFFFFF"}
      >
        <Text fontSize={["1.5rem", "1.5rem", "3rem"]}>Our Partners</Text>
        <HStack
          alignItems={"flex-end"}
          justifyContent={"center"}
          gap={"7.19rem"}
          display={["none", "none", "flex"]}
        >
          <Image src={meta} alt="meta" />
          <Image src={eth} alt="eth" />
          <Image src={bgc} alt="bgc" />
          <Image src={dash} alt="dash" />
        </HStack>
        <HStack
          alignItems={"flex-end"}
          justifyContent={"center"}
          gap={"1.5rem"}
          display={["flex", "flex", "none"]}
          w={"100%"}
          overflowX={"auto"}
          pl={"15rem"}
        >
          <Image src={meta} alt="meta" style={{ width: "8.33rem" }} />
          <Image src={eth} alt="eth" style={{ width: "8.33rem" }} />
          <Image src={bgc} alt="bgc" style={{ width: "8.33rem" }} />
          <Image src={dash} alt="dash" style={{ width: "8.33rem" }} />
        </HStack>
      </VStack>

      {/* <CollectionCards Section /> */}
      <VStack
        fontFamily={"NexaBold"}
        pt={["2rem", "2rem", "3.5rem"]}
        backdropFilter={"auto"}
        backdropBlur={["10.22px", "10.22px", "20px"]}
      >
        <Text fontSize={["1.5rem", "1.5rem", "3rem"]} fontWeight={400}>
          Top Collections
        </Text>
        <Stack
          py={["1.5rem", "1.5rem", "4rem"]}
          direction={["column", "column", "row"]}
          flexWrap={["nowrap", "nowrap", "wrap"]}
          px={["1rem", "1rem", "4.62rem"]}
          gap={["0.75rem", "0.75rem", "4.8rem"]}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {collections?.map((category: any) => (
            <CollectionCard key={category.id} collection={category} />
          ))}
        </Stack>
      </VStack>

      {/* <NFT Cards Section /> */}
      <VStack
        fontFamily={"NexaBold"}
        pt={["2rem", "2rem", "3.5rem"]}
        gap={["1.14rem", "1.14rem", "2.25rem"]}
        px={["1rem", "1rem", "4.62rem"]}
        backdropFilter={"auto"}
        backdropBlur={["10.22px", "10.22px", "20px"]}
      >
        <Text fontSize={["1.5rem", "1.5rem", "3rem"]} fontWeight={400}>
          Explore Trending NFTs
        </Text>

        <Stack
          direction={"row"}
          flexWrap={["nowrap", "nowrap", "wrap"]}
          w={"100%"}
          gap={["0.7rem", "0.7rem", "1.38rem"]}
          justifyContent={"center"}
          alignItems={"center"}
          overflowX={["auto", "auto", "hidden"]}
        >
          {tokens.slice(0, 8).map((nft: any) => (
            <NftCard key={nft.id} nft={nft} />
          ))}
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"nowrap"}
          display={["flex", "flex", "none"]}
          w={"100%"}
          gap={["0.7rem", "0.7rem", "1.38rem"]}
          justifyContent={"center"}
          alignItems={"center"}
          overflowX={"auto"}
        >
          {tokens.slice(0, 5).map((nft: any) => (
            <NftCard key={nft.id} nft={nft} />
          ))}
        </Stack>

        <Button
          variant={"outline"}
          colorScheme="green"
          borderRadius={"1rem"}
          padding={"1rem"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={["0.2rem", "0.2rem", "0.5rem"]}
          height={["2.6rem", "2.6rem", "4.4rem"]}
          alignSelf={"flex-end"}
        >
          <Text fontSize={["1rem", "1rem", "1.5rem"]} fontWeight={400}>
            See More
          </Text>
          <DirArrow color={"#1DB96F"} size={"2vw"} />
        </Button>
      </VStack>
      <Footer />
    </main>
  );
}
