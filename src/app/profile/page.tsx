"use client";
import Footer from "@/components/_footer";
import Header from "@/components/_header";
import ImageHeader from "@/components/_imageHeader";
import InfoText from "@/components/_infoText";
import NftCard from "@/components/_nftCard";
import { MarketContext } from "@/context/MarketStore";
import { Clipboard, GreyVerified, SearchIcon } from "@/utils/icons";
import {
  Button,
  HStack,
  Input,
  InputGroup,
  Select,
  Stack,
  Text,
  useClipboard,
} from "@chakra-ui/react";
import { useContext } from "react";
import profHeader from "../../../public/images/profHeader.png";
import profAvatar from "../../../public/images/profAvatar.png";

function Profile() {
  const { wallet } = useContext(MarketContext);
  const { onCopy } = useClipboard(wallet?.accountId);

  return (
    <main>
      {/* {Header} */}
      <Header />
      {/* {Main Content} */}
      <Stack
        padding={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
      >
        {/* {Image Header} */}
        <ImageHeader header={profHeader} avatar={profAvatar} />
        <HStack
          fontFamily={"NexaBold"}
          paddingTop={"4.5rem"}
          alignItems={"center"}
          gap={["1.5rem", "1.5rem", "3.5rem"]}
        >
          <HStack
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"0.69rem"}
          >
            <Text fontSize={["1.25rem", "1.25rem", "2.25rem"]} fontWeight={400}>
              .phlavorphlay
            </Text>
            <GreyVerified />
          </HStack>
          <HStack>
            <InfoText
              fontSize={["1rem", "1rem", "1.5rem"]}
              fontWeight={400}
              gtext="WALLET ADDRESS"
              wtext={wallet?.accountId}
            />
            <Clipboard handleCopy={onCopy} />
          </HStack>
          <InfoText
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight={400}
            gtext="JOINED"
            wtext="Oct 2021"
          />
        </HStack>
        {/* {User Info} */}
        <Text
          fontFamily={"NexaBold"}
          color={"#B3B3B3"}
          fontSize={["1rem", "1rem", "1.5rem"]}
          fontWeight={400}
          borderLeft={"2px solid #1DB96F"}
          padding={"0.625rem 1rem"}
          marginTop={"1rem"}
        >
          A community-driven collectibles project featuring art by Burnt Toast.
          Doodles come in a joyful range of colors, traits and sizes with a
          collection size of 10,000. Each Doodle allows its owner to vote for
          experiences and activations paid for by the Doodles Community
          Treasury.
        </Text>
        {/* {User Stats} */}
        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
          marginY={"3rem"}
        >
          <InfoText
            fontSize={["0.7rem", "0.7rem", "1.5rem"]}
            fontWeight={400}
            gtext="COLLECTION VALUE"
            wtext="289,099 NEAR"
            wdec={true}
          />
          <InfoText
            fontSize={["0.7rem", "0.7rem", "1.5rem"]}
            fontWeight={400}
            gtext="NO OF COLLECTION"
            wtext="6"
            wdec={true}
          />
        </HStack>
        {/* {User Collections} */}
        <HStack
          fontFamily={"NexaBold"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Select
            borderRadius={"1rem"}
            borderColor={"#B3B3B3"}
            color={"#B3B3B3"}
            fontSize={["0.8rem", "0.8rem", "1rem"]}
            w={["100vw", "100vw", "19.75rem"]}
            placeholder="Recently Added"
          ></Select>
          <InputGroup
            borderRadius={"1rem"}
            w={["100vw", "100vw", "34.25rem"]}
            borderColor={"#B3B3B3"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            border={"1px solid"}
            padding={["0.3rem", "0.3rem", "0.625rem"]}
            fontSize={["0.8rem", "0.8rem", "1rem"]}
          >
            <SearchIcon />
            <Input
              border={"none"}
              color={"#B3B3B3"}
              type="text"
              placeholder="Search"
            />
          </InputGroup>
          <Button variant={"solid"} colorScheme="green">
            <Text
              padding={["0.3rem", "0.3rem", "0.625rem"]}
              fontSize={["0.8rem", "0.8rem", "1rem"]}
            >
              &#43; Add Collection
            </Text>
          </Button>
        </HStack>
        {/* {User NFT Cards} */}
        <HStack
          marginY={"3rem"}
          alignItems={"center"}
          gap={"0.94rem"}
          flexWrap={"wrap"}
        >
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
          <NftCard />
        </HStack>
      </Stack>
      {/* {Footer} */}
      <Footer />
    </main>
  );
}

export default Profile;
