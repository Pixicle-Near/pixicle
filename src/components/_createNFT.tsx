import { storeNFT } from "@/utils/upload";
import { Button, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { utils } from "near-api-js";
import { useContext, useRef, useState } from "react";
import { MarketContext } from "@/context/MarketStore";

const CreateNFT = () => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [uloading, setULoading] = useState(false);
  const [nloading, setnLoading] = useState(false);
  const [nftName, setNFTName] = useState("");
  const [desc, setDersc] = useState("");
  const [file, setFile]: any = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const { wallet, userCollections } = useContext(MarketContext);
  const [collection, setCollection] = useState("");

  const handleImageUpload = async () => {
    setULoading(true);
    // Upload Image
    if (uploadRef.current?.files) {
      console.log(uploadRef.current.files);
      const nft = await storeNFT(uploadRef.current?.files[0], nftName, desc);
      console.log(nft.data.image.pathname.slice(2).split("/"));
      setImgUrl(
        `https://${
          nft.data.image.pathname.slice(2).split("/")[0]
        }.ipfs.nftstorage.link/${
          nft.data.image.pathname.slice(2).split("/")[1]
        }`
      );
      setULoading(false);
      handleCreateNFT(
        `https://${
          nft.data.image.pathname.slice(2).split("/")[0]
        }.ipfs.nftstorage.link/${
          nft.data.image.pathname.slice(2).split("/")[1]
        }`,
        nft.data.image.pathname.slice(2).split("/")[0]
      );
    }
  };

  function setImage() {
    if (uploadRef.current?.files) {
      const image = URL.createObjectURL(uploadRef.current.files[0]);
      console.log(image);
      setFile(image);
    }
  }

  const handleCreateNFT = async (img: string, hash: string) => {
    console.log(collection);
    setnLoading(true);
    //Create a new NFT
    const nft = await wallet?.callMethod({
      contractId: "pixil.phlay.testnet",
      method: "nft_mint",
      args: {
        id: collection,
        token_id: nftName.replace(" ", "_").toLowerCase(),
        metadata: {
          title: nftName,
          description: desc,
          media: img,
          media_hash: hash,
          copies: 1,
        },
        receiver_id: wallet.accountId,
      },
      deposit: utils.format.parseNearAmount("0.1"),
    });
    console.log(nft);
    setnLoading(false);
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
      <Stack
        cursor={"pointer"}
        gap={"0.6rem"}
        border={"1px solid #000000"}
        borderRadius={"lg"}
        onClick={() => {
          uploadRef.current?.click();
        }}
        width={"100%"}
        backgroundImage={`url(${file})`}
        height={"400px"}
        backgroundSize={"auto"}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
      >
        <Stack
          bgColor={"#1E1E1E94"}
          backdropFilter={"auto"}
          backdropBlur={["2px"]}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"lg"}
          height={"100%"}
          p={"2rem"}
          color={"#FFFFFF"}
        >
          <Text>Click To Upload</Text>
          <Text>
            Recomended Size: 700 x 1400. File types: JPG, PNG, SVG, or GIF
          </Text>
        </Stack>
        <Input
          ref={uploadRef}
          type="file"
          visibility={"hidden"}
          position={"absolute"}
          onChange={setImage}
        />
      </Stack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
          as={"label"}
          htmlFor="collection"
          id="collection_label"
        >
          Choose Collection *
        </Text>
        <Select
          title="collection_label"
          id="collection"
          placeholder="Select Collection"
          onChange={(e) => setCollection(e.target.value)}
          value={collection}
          aria-labelledby="collection_label"
        >
          {userCollections.map((collection: any) => (
            <option
              key={collection.series_id}
              value={collection.series_id}
              id={collection.series_id}
            >
              {collection.metadata.name}
            </option>
          ))}
        </Select>
      </Stack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
        >
          Name *
        </Text>
        <Input
          type="text"
          placeholder="Name your NFT"
          value={nftName}
          onChange={(e) => setNFTName(e.target.value)}
        />
      </Stack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
        >
          Description *
        </Text>
        <Textarea
          placeholder="Enter a description"
          value={desc}
          onChange={(e) => setDersc(e.target.value)}
        />
      </Stack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
        >
          External Link
        </Text>
        <Input type="text" placeholder="https://collection.io/item/123" />
      </Stack>
      <Button
        colorScheme="green"
        type="submit"
        variant={"solid"}
        onClick={handleImageUpload}
        isDisabled={!nftName || !desc}
        isLoading={uloading || nloading}
        loadingText={
          (uloading && "Uploading...") || (nloading && "Creating NFT...")
        }
      >
        Continue
      </Button>
    </Stack>
  );
};

export default CreateNFT;
