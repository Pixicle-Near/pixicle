import { Button, Input, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { useRef } from "react";

const CreateNFT = () => {
  const uploadRef = useRef<HTMLInputElement>(null);

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
        p={"0.6rem"}
        onClick={() => uploadRef.current?.click}
      >
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
        />
      </Stack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
        >
          Choose Collection *
        </Text>
        <Select placeholder="Choose Collection"></Select>
      </Stack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
        >
          Name *
        </Text>
        <Input type="text" placeholder="Name your NFT" />
      </Stack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
        >
          Description *
        </Text>
        <Textarea placeholder="Enter a description" />
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
        isDisabled={true}
      >
        Continue
      </Button>
    </Stack>
  );
};

export default CreateNFT;
