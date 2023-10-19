"use client";
import Footer from "@/components/_footer";
import Header from "@/components/_header";
import { Button, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Bayc from "../../../../public/images/bay.png";
import NftCard from "@/components/_nftCard";
import { MarketContext } from "@/context/MarketStore";
import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";

function NFTPage() {
  const { tokens, wallet } = useContext(MarketContext);
  const { slug } = useParams();
  const [token, setToken] = useState<any>(null);
  const [moreTokens, setMoreTokens] = useState([]);

  useEffect(() => {
    const id = slug.toString().replaceAll("%20", " ");
    const getToken = async () => {
      const token = await wallet?.viewMethod({
        contractId: "pixil.phlay.testnet",
        method: "nft_token",
        args: { token_id: id },
      });
      console.log(token);
      if (token) {
        setToken(token);
        const otherTokens = tokens?.filter(
          (toks: any) =>
            toks.series_id === token.series_id &&
            toks.token_id !== token.token_id
        );
        setMoreTokens(otherTokens);
      } else {
        setToken(null);
      }
    };
    if (slug) {
      getToken();
    }
  }, [slug, tokens, wallet]);

  if (token === null) {
    return (
      <main>
        <Header />
        <Stack
          w={"100%"}
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading
            fontSize={["1.5rem", "1.5rem", "2.25rem"]}
            fontFamily={"NexaBold"}
          >
            404 | NOT FOUND
          </Heading>
        </Stack>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <Stack
        fontFamily={"NexaBold"}
        p={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
      >
        <HStack
          alignItems={"flex-start"}
          justifyContent={"flex-start"}
          gap={"2.5rem"}
        >
          <Image
            src={token?.metadata.media || Bayc}
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
              {token?.metadata?.title || "Bored Apes Yatch Club"}
            </Text>
            <Text fontSize={["1rem", "1.2rem", "1.5rem"]}>
              Owned by:{" "}
              <Text color={"#1DB96F"} display={"inline-block"}>
                {token?.owner_id === wallet?.accountId
                  ? "You"
                  : token?.owner_id || "0x1234567890"}
              </Text>
            </Text>
            {/* {Buy Card} */}
            {token?.owner_id === wallet?.accountId ? (
              <Button
                variant={"solid"}
                colorScheme="green"
                // onClick={handleListing}
              >
                <Text
                  fontSize={["0.59869rem", "0.59869rem", "1.17169rem"]}
                  fontWeight={400}
                >
                  List For Sale
                </Text>
              </Button>
            ) : (
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
            )}
          </Stack>
        </HStack>
        <Text fontSize={["1.5rem", "1.8rem", "2.5rem"]} my={"3rem"}>
          More from this collection
        </Text>
        <HStack flexWrap={"wrap"}>
          {moreTokens?.map((nft: any) => (
            <NftCard key={nft.id} nft={nft} />
          ))}
        </HStack>
      </Stack>
      <Footer />
    </main>
  );
}

export default NFTPage;
