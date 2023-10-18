import { MarketContext } from "@/context/MarketStore";
import { collectionCardprops } from "@/utils/types";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useContext } from "react";

function CollectionCard({ collection }: collectionCardprops) {
  const { handleRouting } = useContext(MarketContext);

  return (
    <HStack
      w={["100%"]}
      maxW={["24.633rem", "24.633rem", "39.87rem"]}
      bgColor={"#010604"}
      backgroundBlendMode={"overlay"}
      boxShadow={[
        "0px 0px 9.88414px -3.70655px #1DB96F",
        "0px 0px 9.88414px -3.70655px #1DB96F",
        "0px 0px 16px -6px #1DB96F",
      ]}
      backdropBlur={["2.47px", "2.47px", "4px"]}
      borderRadius={["0.62rem", "0.62rem", "1rem"]}
      padding={[
        "1.22rem 1rem 0.65rem",
        "1.22rem 0.85rem 0.65rem",
        "1.37rem 1.37rem 1.22rem",
      ]}
      cursor={"pointer"}
      onClick={() =>
        handleRouting &&
        handleRouting(
          `collection/${collection.metadata.name}-${collection.series_id}`
        )
      }
    >
      <Box display={["none", "none", "block"]}>
        <Image
          src={collection.metadata.logo_media}
          alt="bayc"
          width={500}
          height={500}
          style={{
            width: "8.67188rem",
            height: "6.9375rem",
            objectFit: "contain",
          }}
        />
      </Box>
      <Box display={["block", "block", "none"]}>
        <Image
          src={collection.metadata.logo_media}
          alt="bayc"
          width={500}
          height={500}
          style={{
            width: "5.35713rem",
            height: "4.28569rem",
            objectFit: "contain",
          }}
        />
      </Box>
      <VStack
        fontFamily={"NexaBold"}
        flex={1}
        alignItems={"flex-start"}
        gap={["0.22rem", "0.22rem", "0.44rem"]}
        color={"#FFFFFF"}
      >
        <Text fontSize={["1rem", "1rem", "2rem"]} fontWeight={400}>
          {collection.metadata.name || "Bored Ape Yacht Club"}
        </Text>
        <HStack color={"#B3B3B3"} w={"100%"} justifyContent={"space-between"}>
          <Text
            fontSize={["0.695rem", "0.695rem", "1.125rem"]}
            fontWeight={400}
          >
            FLOOR PRIZE
          </Text>
          <Text
            fontSize={["0.695rem", "0.695rem", "1.125rem"]}
            fontWeight={400}
          >
            VOLUME
          </Text>
        </HStack>
        <HStack w={"100%"} justifyContent={"space-between"}>
          <Text
            fontSize={["0.92663rem", "0.92663rem", "1.5rem"]}
            fontWeight={400}
          >
            {collection.price || "-"} NEAR
          </Text>
          <Text
            fontSize={["0.92663rem", "0.92663rem", "1.5rem"]}
            fontWeight={400}
          >
            {collection.volume || "-"} NEAR
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
}

export default CollectionCard;
