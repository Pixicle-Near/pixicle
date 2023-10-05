import { HStack, Text } from "@chakra-ui/react";

type InfoTextProps = {
  fontSize: string;
  fontWeight: number;
  gtext: string;
  wtext: string;
};
function InfoText({ fontSize, fontWeight, gtext, wtext }: InfoTextProps) {
  return (
    <HStack
      fontFamily={"NexaBold"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"0.69rem"}
    >
      <Text color={"#1DB96F"} fontSize={fontSize} fontWeight={fontWeight}>
        {gtext}
      </Text>
      <Text color={"#FFFFFF"} fontSize={fontSize} fontWeight={fontWeight}>
        {wtext}
      </Text>
    </HStack>
  );
}

export default InfoText;
