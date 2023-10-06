import Footer from "@/components/_footer";
import Header from "@/components/_header";
import ImageHeader from "@/components/_imageHeader";
import InfoText from "@/components/_infoText";
import NftCard from "@/components/_nftCard";
import { SearchIcon, Verified } from "@/utils/icons";
import {
  HStack,
  Input,
  InputGroup,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import collImage from "../../../public/images/collHeader.png";
import collAvatar from "../../../public/images/collAvatar.png";

function Collection() {
  return (
    <main>
      <Header />
      <Stack
        padding={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
      >
        <ImageHeader header={collImage} avatar={collAvatar} />
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
              Doodles
            </Text>
            <Verified />
          </HStack>
          <InfoText
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight={400}
            gtext="ITEM"
            wtext="9,998"
          />
          <InfoText
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight={400}
            gtext="CREATED"
            wtext="Oct 2021"
          />
          <InfoText
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight={400}
            gtext="CREATOR EARNING"
            wtext="5%"
          />
          <InfoText
            fontSize={["1rem", "1rem", "1.5rem"]}
            fontWeight={400}
            gtext="CHAIN"
            wtext="NEAR"
          />
        </HStack>
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

        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
          marginY={"3rem"}
        >
          <InfoText
            fontSize={["0.7rem", "0.7rem", "1.5rem"]}
            fontWeight={400}
            gtext="TOTAL VOLUME"
            wtext="289,000 NEAR"
            wdec={true}
          />
          <InfoText
            fontSize={["0.7rem", "0.7rem", "1.5rem"]}
            fontWeight={400}
            gtext="FLOOR PRICE"
            wtext="89,325 NEAR"
            wdec={true}
          />
        </HStack>
        <HStack
          fontFamily={"NexaBold"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
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
          <Select
            borderRadius={"1rem"}
            borderColor={"#B3B3B3"}
            color={"#B3B3B3"}
            fontSize={["0.8rem", "0.8rem", "1rem"]}
            w={["100vw", "100vw", "19.75rem"]}
            placeholder="Price category"
          ></Select>
        </HStack>
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
      <Footer />
    </main>
  );
}

export default Collection;
