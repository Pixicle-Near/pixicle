"use client";
import { MarketContext } from "@/context/MarketStore";
import { Hamburger, WalletIconDesk, WalletIconMob } from "@/utils/icons";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useContext } from "react";
import MenuComp from "./_menu";
import { MenuListProps } from "@/utils/types";
import Link from "next/link";

function Header() {
  const { isAuth, handleAuth, wallet, handleRouting } =
    useContext(MarketContext);

  const walletMenulist: MenuListProps[] = [
    {
      info: `Profile | ${wallet?.balance} N | ${wallet?.accountId}`,
      action: () => {
        handleRouting && handleRouting(`profile`);
      },
    },
    { info: "logout", action: () => wallet?.signOut() },
  ];
  const menulist: MenuListProps[] = [
    { info: "Home", action: () => handleRouting && handleRouting(``) },
    {
      info: "Market Place",
      action: () => handleRouting && handleRouting(`market`),
    },
    { info: "Trends", action: () => handleRouting && handleRouting(`trends`) },
    { info: "FAQ", action: () => handleRouting && handleRouting(`faq`) },
  ];

  return (
    <HStack
      fontFamily={"NexaBold"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      padding={["0.98rem 0.88rem", "0.98rem 0.88rem", "1.88rem 4.63rem"]}
    >
      {/* {Logo} */}
      <Text fontSize={["1.5rem", "1.5rem", "2.5rem"]} fontWeight={400}>
        Pixicle
      </Text>

      {/* {Desktop Menu's} */}
      <HStack
        display={["none", "none", "flex"]}
        gap={"4rem"}
        fontSize={"1.5rem"}
        fontWeight={400}
      >
        <Text as={Link} href={"/"} color={"#1DB96F"}>
          Home
        </Text>
        <Text>Market Place</Text>
        <Text>Trends</Text>
        <Text>FAQ</Text>
      </HStack>

      {/* {Wallet Button} */}
      <Button
        borderRadius={"1rem"}
        background={"#1DB96F"}
        fontSize={"1.5rem"}
        fontWeight={"400"}
        color={"#FFFFFF"}
        display={["none", "none", "flex"]}
        alignItems={"center"}
        gap={"1rem"}
        justifyContent={"center"}
        padding={"1rem"}
        width={"13.75rem"}
        onClick={handleAuth}
      >
        <WalletIconDesk />
        <Text fontSize={isAuth ? "0.7rem" : "1.5rem"} fontWeight={400}>
          {isAuth ? `${wallet?.balance} N | ${wallet?.accountId}` : "Wallet"}
        </Text>
      </Button>

      {/* {Mobile Menu's} */}
      <HStack
        display={["flex", "flex", "none"]}
        alignItems={"center"}
        gap={"1rem"}
      >
        {isAuth ? (
          <MenuComp Icon={WalletIconMob} menulist={walletMenulist} />
        ) : (
          <span onClick={handleAuth}>
            <WalletIconMob />
          </span>
        )}

        <MenuComp Icon={Hamburger} menulist={menulist} />
      </HStack>
    </HStack>
  );
}

export default Header;
