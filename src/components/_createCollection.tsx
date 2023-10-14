import { MarketContext } from "@/context/MarketStore";
import { storeNFT } from "@/utils/upload";
import { Avatar, Button, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { utils } from "near-api-js";
import { useContext, useRef, useState } from "react";

const CreateCollection = () => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [logo, setLogo]: any = useState();
  const [collectionName, setCollectionName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { wallet } = useContext(MarketContext);

  const handleSubmit = async () => {
    setIsLoading(true);
    // Upload Image
    if (uploadRef.current?.files) {
      try {
        const nft = await storeNFT(
          uploadRef.current?.files[0],
          collectionName,
          "An NFT collection"
        );
        console.log(nft.data.image.pathname.slice(2).split("/"));

        handleCreateCollection(
          `https://${
            nft.data.image.pathname.slice(2).split("/")[0]
          }.ipfs.nftstorage.link/${
            nft.data.image.pathname.slice(2).split("/")[1]
          }`,
          nft.data.image.pathname.slice(2).split("/")[0]
        );
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  const handleCreateCollection = async (img: string, hash: string) => {
    try {
      await wallet?.callMethod({
        contractId: "pixic.phlay.testnet",
        method: "create_series",
        args: {
          metadata: {
            name: collectionName,
            logo_media: img,
          },
        },
        deposit: utils.format.parseNearAmount("0.1"),
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Stack
      position={"relative"}
      color={"black"}
      fontFamily={"NexaBold"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={"1rem"}
    >
      <Text
        alignSelf={"flex-start"}
        fontSize={["1rem", "1rem", "1.1rem"]}
        fontWeight={600}
      >
        Logo Image *
      </Text>
      <HStack
        cursor={"pointer"}
        gap={"0.6rem"}
        border={"1px solid #000000"}
        borderRadius={"lg"}
        p={"0.6rem"}
        onClick={() => uploadRef.current?.click()}
      >
        <Avatar name="logo" src={logo} size={"xl"} />
        <Stack>
          <Text>Click To Upload</Text>
          <Text>
            Recomended Size: 500 x 500. File types: JPG, PNG, SVG, or GIF
          </Text>
        </Stack>
        <Input
          ref={uploadRef}
          type="file"
          visibility={"hidden"}
          position={"absolute"}
          onChange={(e) =>
            e.target.files && setLogo(URL.createObjectURL(e.target.files[0]))
          }
        />
      </HStack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
        >
          Contract Name *
        </Text>
        <Input
          type="text"
          placeholder="My Collection Name"
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
        />
      </Stack>
      <Button
        colorScheme="green"
        type="submit"
        variant={"solid"}
        isDisabled={collectionName === "" || logo === "" || isLoading}
        isLoading={isLoading}
        loadingText="Creating Collection..."
        onClick={handleSubmit}
      >
        Continue
      </Button>
    </Stack>
  );
};

export default CreateCollection;
