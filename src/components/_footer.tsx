import { DirArrow } from "@/utils/icons";
import { Button, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <>
      <HStack
        fontFamily={"NexaBold"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        padding={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
        mt={["3.5rem"]}
        borderTop={"1px solid #B3B3B3"}
        display={["none", "none", "flex"]}
      >
        {/* {Logo} */}
        <Text fontSize={["1.5rem", "1.5rem", "3.67rem"]} fontWeight={400}>
          Pixicle
        </Text>

        {/* {Desktop Menu's} */}
        <HStack
          display={["none", "none", "flex"]}
          gap={"4rem"}
          fontSize={"1.5rem"}
          fontWeight={400}
        >
          <Text>Home</Text>
          <Text>Market Place</Text>
          <Text>Trends</Text>
          <Text>FAQ</Text>
        </HStack>

        {/* {copry right} */}
        <Text fontSize={["1.5rem", "1.5rem", "1.5rem"]} fontWeight={400}>
          © 2023 Pixicle, <br />
          Inc.All rights reserved.
        </Text>
      </HStack>

      {/* {Mobile Footer} */}
      <VStack
        fontFamily={"NexaBold"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        padding={["0.98rem 0.88rem"]}
        mt={["2rem"]}
        borderTop={"0.441px solid #B3B3B3"}
        pt={"2.1rem"}
        display={["flex", "flex", "none"]}
      >
        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text fontSize={"0.875rem"} fontWeight={400}>
            Market Trends
          </Text>
          <Text fontSize={"0.875rem"} fontWeight={400}>
            Our Services
          </Text>
        </HStack>
        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text fontSize={"0.875rem"} fontWeight={400}>
            Policies
          </Text>
          <Text fontSize={"0.875rem"} fontWeight={400}>
            Contact us
          </Text>
        </HStack>
        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
          w={"100%"}
        >
          <Text fontSize={"0.875rem"} fontWeight={400}>
            FAQ
          </Text>
          <Text fontSize={"0.875rem"} fontWeight={400}>
            About us
          </Text>
        </HStack>
        <HStack my={"2rem"} w={"100%"} justifyContent={"space-between"}>
          <Stack>
            <Text fontSize={["2rem"]} fontWeight={400}>
              Pixicle
            </Text>
            {/* {copry right} */}
            <Text fontSize={["0.875rem"]} fontWeight={400}>
              © 2023 Pixicle, <br />
              Inc.All rights reserved.
            </Text>
          </Stack>
          <Button
            variant={"solid"}
            colorScheme="green"
            borderRadius={"1rem"}
            padding={"1rem"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={["0.2rem", "0.2rem", "0.5rem"]}
            height={["2.6rem", "2.6rem", "4.4rem"]}
          >
            <Text fontSize={["1rem", "1rem", "1.5rem"]} fontWeight={400}>
              Create wallet
            </Text>
            <DirArrow color={"#FFFFFF"} size={"2.5vw"} />
          </Button>
        </HStack>
      </VStack>
    </>
  );
}

export default Footer;
