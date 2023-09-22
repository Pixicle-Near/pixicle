import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/_header";
import { VStack, Text, HStack, Button, Box } from "@chakra-ui/react";
import { DirArrow } from "@/utils/icons";
import nfts from "../../public/images/group-2.png";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.center}>
        <VStack fontFamily={"NexaBold"} gap={"5.4rem"} pl={"4.62rem"}>
          <Text fontSize={"5rem"} fontWeight={400}>
            Get the best and popular NFT collections
          </Text>
          <HStack alignItems={"flex-start"} w={"100%"} gap={"2.31rem"}>
            <Button
              variant={"outline"}
              colorScheme="green"
              borderRadius={"1rem"}
              padding={"1rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"0.5rem"}
              height={"4.4rem"}
            >
              <Text fontSize={"1.5rem"} fontWeight={400}>
                Explore More
              </Text>
              <DirArrow color={"#1DB96F"} />
            </Button>
            <Button
              variant={"solid"}
              colorScheme="green"
              borderRadius={"1rem"}
              padding={"1rem"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={"0.5rem"}
              height={"4.4rem"}
            >
              <Text fontSize={"1.5rem"} fontWeight={400}>
                Create wallet
              </Text>
              <DirArrow color={"#FFFFFF"} />
            </Button>
          </HStack>
        </VStack>
        <Box>
          <Image
            className={styles.nfts}
            src={nfts}
            alt="nfts"
            style={{ width: "120rem" }}
          />
        </Box>
      </div>
    </main>
  );
}
