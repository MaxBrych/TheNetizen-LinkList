import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { IoApps } from "react-icons/io5";

export default function SocialMenu() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<IoApps />}
        variant="filled"
        colorScheme="grey"
      />
      <MenuList>
        <MenuItem minH="48px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/100/100"
            alt="Fluffybuns the destroyer"
            mr="12px"
          />
          <span>Fluffybuns the Destroyer</span>
        </MenuItem>
        <MenuItem minH="40px">
          <Image
            boxSize="2rem"
            borderRadius="full"
            src="https://placekitten.com/120/120"
            alt="Simon the pensive"
            mr="12px"
          />
          <span>Simon the pensive</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
