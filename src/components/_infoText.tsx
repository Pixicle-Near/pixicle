import { HStack, Text, border } from "@chakra-ui/react";

type InfoTextProps = {
  fontSize: string[];
  fontWeight: number;
  gtext: string;
  wtext: string;
  wdec?: boolean;
};
function InfoText({ fontSize, fontWeight, gtext, wtext, wdec }: InfoTextProps) {
  return (
    <HStack
      fontFamily={"NexaBold"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={"0.69rem"}
    >
      <Text
        color={"#1DB96F"}
        fontSize={fontSize}
        fontWeight={fontWeight}
        borderBottom={`${wdec && "2px solid #1DB96F"}`}
        padding={"0.5rem 0"}
      >
        {gtext}
      </Text>
      <Text color={"#FFFFFF"} fontSize={fontSize} fontWeight={fontWeight}>
        {wtext}
      </Text>
    </HStack>
  );
}

export default InfoText;
