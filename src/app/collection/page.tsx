import Header from "@/components/_header";
import ImageHeader from "@/components/_imageHeader";
import InfoText from "@/components/_infoText";
import { Verified } from "@/utils/icons";
import { HStack, Stack, Text } from "@chakra-ui/react";

function Collection() {
  return (
    <main>
      <Header />
      <Stack
        padding={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
      >
        <ImageHeader />
        <HStack
          fontFamily={"NexaBold"}
          paddingTop={"4.5rem"}
          alignItems={"center"}
          gap={"3.5rem"}
        >
          <HStack
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap={"0.69rem"}
          >
            <Text fontSize={"2.25rem"} fontWeight={400}>
              Doodles
            </Text>
            <Verified />
          </HStack>
          <InfoText
            fontSize={"1.5rem"}
            fontWeight={400}
            gtext="ITEM"
            wtext="9,998"
          />
          <InfoText
            fontSize={"1.5rem"}
            fontWeight={400}
            gtext="CREATED"
            wtext="Oct 2021"
          />
          <InfoText
            fontSize={"1.5rem"}
            fontWeight={400}
            gtext="CREATOR EARNING"
            wtext="5%"
          />
          <InfoText
            fontSize={"1.5rem"}
            fontWeight={400}
            gtext="CHAIN"
            wtext="NEAR"
          />
        </HStack>
      </Stack>
    </main>
  );
}

export default Collection;
