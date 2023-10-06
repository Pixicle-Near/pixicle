import { ImageHeaderProps } from "@/utils/types";
import { Avatar, Stack } from "@chakra-ui/react";

function ImageHeader({ header, avatar }: ImageHeaderProps) {
  return (
    <Stack
      backgroundImage={`url(${header.src})`}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      backgroundSize={"cover"}
      borderTopRadius={"1rem"}
      height={"14.0625rem"}
      position={"relative"}
    >
      <Avatar
        size="2xl"
        name="Doodles"
        src={avatar.src}
        position={"absolute"}
        left={0}
        bottom={"-4rem"}
        zIndex={20}
      />
    </Stack>
  );
}

export default ImageHeader;
