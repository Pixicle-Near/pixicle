"use client";
import Footer from "@/components/_footer";
import Header from "@/components/_header";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Bayc from "../../../public/images/bay.png";
import NftCard from "@/components/_nftCard";
import { MarketContext } from "@/context/MarketStore";
import { useContext } from "react";

function NFTPage() {
  const { tokens } = useContext(MarketContext);
  return (
    <main>
      <Header />
      <Stack
        fontFamily={"NexaBold"}
        p={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
      >
        <HStack alignItems={"flex-start"} justifyContent={"flex-start"}>
          <Image
            src={Bayc}
            alt="bay"
            width={600}
            height={1200}
            style={{
              maxWidth: "30.44rem",
              maxHeight: "34.44rem",
              objectFit: "contain",
              objectPosition: "center",
            }}
          />
          <Stack>
            <Text color={"#FFFFFF"} fontSize={["1.5rem", "1.5rem", "2.5rem"]}>
              Bored Apes Yatch Club
            </Text>
            <Text fontSize={["1rem", "1.2rem", "1.5rem"]}>
              Owned by:{" "}
              <Text color={"#1DB96F"} display={"inline-block"}>
                0x0a7a7...
              </Text>
            </Text>
            {/* {Buy Card} */}
            <Stack mt={"3rem"}>
              <Text color={"#F0F0F0"} fontSize={[".8rem", "1rem", "1rem"]}>
                Current Price
              </Text>
              <Text fontSize={["1.5rem", "1.5rem", "2.5rem"]}>77 NEAR</Text>
              <Button
                variant={"solid"}
                colorScheme="green"
                transition={"all 0.5s ease-in-out"}
                // onClick={handleBuying}
              >
                <Text
                  fontSize={["0.59869rem", "0.59869rem", "1.17169rem"]}
                  fontWeight={400}
                >
                  Buy
                </Text>
              </Button>
            </Stack>
          </Stack>
        </HStack>
        <Text fontSize={["1.5rem", "1.8rem", "2.5rem"]} my={"3rem"}>
          More from this collection
        </Text>
        <HStack flexWrap={"wrap"}>
          {tokens?.map((nft: any) => (
            <NftCard key={nft.id} nft={nft} />
          ))}
        </HStack>
      </Stack>
      <Footer />
    </main>
  );
}

export default NFTPage;
