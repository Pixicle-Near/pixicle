import { Avatar, Stack } from "@chakra-ui/react";
import collImage from "../../public/images/collHeader.png";
import collAvatar from "../../public/images/collAvatar.png";

function ImageHeader() {
  return (
    <Stack
      backgroundImage={`url(${collImage.src})`}
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
        src={collAvatar.src}
        position={"absolute"}
        left={0}
        bottom={"-4rem"}
        zIndex={20}
      />
    </Stack>
  );
}

export default ImageHeader;
