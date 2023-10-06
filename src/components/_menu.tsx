import { MenuCompProps } from "@/utils/types";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

function MenuComp({ Icon, menulist }: MenuCompProps) {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<Icon />}
        variant="unstyled"
      />
      <MenuList
        backgroundColor={"rgba(30,30,20,0.58)"}
        backdropFilter={"auto"}
        backdropBlur={"20px"}
      >
        {menulist.map((menuItem) => (
          <MenuItem
            backgroundColor={"transparent"}
            _hover={{ backgroundColor: "#1DB96F", backdropBlur(theme) {} }}
            key={menuItem.info}
            onClick={menuItem.action}
          >
            {menuItem.info}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default MenuComp;
