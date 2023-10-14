import { Avatar, Button, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

const CreateCollection = () => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const [logo, setLogo]: any = useState();
  const [collectionName, setCollectionName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      >
        Continue
      </Button>
    </Stack>
  );
};

export default CreateCollection;
