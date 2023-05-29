import {
  Stack,
  Button,
  IconButton,
  Flex,
  ButtonGroup,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import SubscribeModel from "./SubscribeModel";
import { IoApps, IoBulb, IoMoon } from "react-icons/io5";
import SocialMenu from "./SocialMenu";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2">
      <ButtonGroup gap="1">
        <SocialMenu />
        <IconButton
          bg={bg}
          borderRadius="full"
          aria-label="Toggle color mode"
          variant="filled"
          borderWidth={1}
          borderColor={borderColor}
          icon={colorMode === "dark" ? <IoMoon /> : <IoBulb />}
          onClick={toggleColorMode}
        />
      </ButtonGroup>
      <Spacer width={100} />

      <SubscribeModel />
    </Flex>
  );
}
