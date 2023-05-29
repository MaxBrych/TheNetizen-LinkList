import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { FiFigma, FiGithub } from "react-icons/fi";
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
        <MenuItem
          minH="48px"
          className="flex flex-col items-center justify-center gap-1 rounded-lg hover:bg-gray-100 "
        >
          <IconButton aria-label="Search database" icon={<FiFigma />} />
          <span>Figma</span>
        </MenuItem>
        <MenuItem
          minH="40px"
          className="flex flex-col items-center justify-center gap-1 rounded-lg hover:bg-gray-100 "
        >
          <IconButton aria-label="Search database" icon={<FiGithub />} />
          <span>GitHub</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
