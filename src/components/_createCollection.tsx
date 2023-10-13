import { Avatar, Button, HStack, Input, Stack, Text } from "@chakra-ui/react";
import { useRef } from "react";

const CreateCollection = () => {
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
        onClick={() => uploadRef.current?.click}
      >
        <Avatar name="logo" src={""} size={"xl"} />
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
      </HStack>
      <Stack w={"100%"} alignItems={"flex-start"}>
        <Text
          alignSelf={"flex-start"}
          fontSize={["1rem", "1rem", "1.1rem"]}
          fontWeight={600}
        >
          Contract Name *
        </Text>
        <Input type="text" placeholder="My Collection Name" />
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

export default CreateCollection;
