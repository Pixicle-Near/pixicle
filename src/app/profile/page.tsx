"use client";
import Footer from "@/components/_footer";
import Header from "@/components/_header";
import ImageHeader from "@/components/_imageHeader";
import InfoText from "@/components/_infoText";
import NftCard from "@/components/_nftCard";
import { MarketContext } from "@/context/MarketStore";
import { Clipboard, DirArrow, GreyVerified, SearchIcon } from "@/utils/icons";
import {
  Button,
  HStack,
  Heading,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useClipboard,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactElement, useContext, useEffect, useState } from "react";
import profHeader from "../../../public/images/profHeader.png";
import profAvatar from "../../../public/images/profAvatar.png";
import { useRouter } from "next/navigation";
import CreateCollection from "@/components/_createCollection";
import CreateNFT from "@/components/_createNFT";

function Profile() {
  const { wallet, isAuth, handleUserData, userTokens, userCollections } =
    useContext(MarketContext);
  const { onCopy } = useClipboard(wallet?.accountId);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mHeading, setMHeading] = useState("Create");
  const [volume, setVolume] = useState("0.00");

  useEffect(() => {
    if (isAuth) {
      handleUserData && handleUserData();
      setVolume(
        userCollections?.reduce((acc: any, curr: any) => {
          acc?.volume + curr?.volume;
        }, 0)
      );
    }
  }, [isAuth]);

  // Overlay For Modal
  const Overlay = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  // Options For Create Modal
  const CreateOptions = () => {
    return (
      <Stack
        w={"100%"}
        h={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"1rem"}
        color={"#000000"}
        position={"relative"}
      >
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"1rem"}
          fontFamily={"NexaBold"}
          boxShadow={"dark-lg"}
          p={["1rem", "1rem", "1.2rem"]}
          borderRadius={"lg"}
          cursor={"pointer"}
          backgroundColor={"#FFFFFF"}
          onClick={() =>
            handleSelection("Drop a collection", <CreateCollection />)
          }
        >
          <Text fontSize={["1rem", "1rem", "1.5rem"]} fontWeight={400}>
            Drop a Collection
          </Text>
          <DirArrow size="1.5rem" color="#000000" />
        </HStack>
        <HStack
          w={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={"1rem"}
          fontFamily={"NexaBold"}
          boxShadow={"dark-lg"}
          p={["1rem", "1rem", "1.2rem"]}
          borderRadius={"lg"}
          cursor={"pointer"}
          backgroundColor={"#FFFFFF"}
          onClick={() => handleSelection("Create NFT", <CreateNFT />)}
        >
          <Text fontSize={["1rem", "1rem", "1.5rem"]} fontWeight={400}>
            Mint NFT
          </Text>
          <DirArrow size="1.5rem" color="#000000" />
        </HStack>
      </Stack>
    );
  };

  const [mBody, setMBody] = useState(<CreateOptions />);

  function handleSelection(option: string, Alement: ReactElement<any, any>) {
    setMHeading(option);
    setMBody(Alement);
  }

  if (!isAuth) {
    return (
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
          404 NOT FOUND
        </Heading>
      </Stack>
    );
  } else {
    return (
      <main>
        {/* {Header} */}
        <Header />
        {/* {Main Content} */}
        <Stack
          padding={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
        >
          {/* {Modal} */}
          <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <Overlay />
            <ModalContent>
              <ModalHeader
                color={"#000000"}
                fontSize={["1.5rem", "1.5rem", "2.25rem"]}
                fontFamily={"NexaBold"}
              >
                {mHeading}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>{mBody}</ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    onClose();
                    setMBody(<CreateOptions />);
                    setMHeading("Create");
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
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
              <Text
                fontSize={["1.25rem", "1.25rem", "2.25rem"]}
                fontWeight={400}
              >
                {wallet?.accountId?.slice(
                  0,
                  wallet?.accountId?.split(".")[0].length
                )}
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
              wtext="Oct 2023"
            />
          </HStack>
          {/* {User Info} */}
          {/* <Text
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
        </Text> */}
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
              wtext={`${volume || "-"} NEAR`}
              wdec={true}
            />
            <InfoText
              fontSize={["0.7rem", "0.7rem", "1.5rem"]}
              fontWeight={400}
              gtext="NO OF COLLECTION"
              wtext={`${userCollections?.length || 0}`}
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
            <Button variant={"solid"} colorScheme="green" onClick={onOpen}>
              <Text
                padding={["0.3rem", "0.3rem", "0.625rem"]}
                fontSize={["0.8rem", "0.8rem", "1rem"]}
              >
                &#43; Create
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
            {userTokens?.map((nft: any) => (
              <NftCard key={nft.token_id} nft={nft} />
            ))}
          </HStack>
        </Stack>
        {/* {Footer} */}
        <Footer />
      </main>
    );
  }
}
export default Profile;
