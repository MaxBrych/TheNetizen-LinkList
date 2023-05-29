import {
  Stack,
  Button,
  IconButton,
  Flex,
  ButtonGroup,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import SubscribeModel from "./SubscribeModel";
import { IoApps, IoMoon } from "react-icons/io5";
import SocialMenu from "./SocialMenu";

export default function Header() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <ButtonGroup gap="1">
        <SocialMenu />
        <IconButton
          colorScheme="gray"
          aria-label="Search database"
          variant="filled"
          icon={<IoMoon />}
        />
      </ButtonGroup>
      <Spacer width={100} />

      <SubscribeModel />
    </Flex>
  );
}
