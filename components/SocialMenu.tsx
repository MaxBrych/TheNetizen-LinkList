import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  IconButton,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiFigma, FiGithub, FiTwitter } from "react-icons/fi";
import { IoApps } from "react-icons/io5";

export default function SocialMenu() {
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBg = useColorModeValue("#edf2f7", "gray.600");
  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<IoApps />}
        variant="filled"
        bg={bg}
        borderWidth={1}
        borderColor={borderColor}
        borderRadius="full"
      />
      <MenuList boxShadow="lg">
        <Box
          display="grid"
          padding={1}
          gridTemplateColumns="repeat(3, 1fr)"
          gap={4}
        >
          <MenuItem _hover={{ bg: hoverBg }} minH="48px">
            <Link
              className="flex flex-col items-center justify-center gap-1 rounded-lg hover:bg-[#edf2f7] "
              href="https://www.figma.com/file/OVyBucfTojq3N3cc1XIdVJ/The-Netizen?type=design&node-id=402%3A243&t=MPJIv2vl5mDTzQi4-1"
            >
              <IconButton
                _hover={{ bg: "none" }}
                aria-label="Search database"
                icon={<FiFigma size={20} />}
              />
              <span className="text-xs">Figma</span>
            </Link>
          </MenuItem>
          <MenuItem
            _hover={{ bg: hoverBg }}
            minH="40px"
            className="flex flex-col items-center justify-center gap-1 rounded-lg hover:bg-[#edf2f7] "
          >
            <Link
              className="flex flex-col items-center justify-center gap-1 rounded-lg hover:bg-[#edf2f7] "
              href="https://github.com/The-Netizen-Labs"
            >
              <IconButton
                _hover={{ bg: "none" }}
                aria-label="Search database"
                icon={<FiGithub size={20} />}
              />
              <span className="text-xs">GitHub</span>
            </Link>
          </MenuItem>
          <MenuItem
            _hover={{ bg: hoverBg }}
            minH="40px"
            className="flex flex-col items-center justify-center gap-1 rounded-lg hover:bg-[#edf2f7] "
          >
            <Link
              className="flex flex-col items-center justify-center gap-1 rounded-lg hover:bg-[#edf2f7] "
              href="https://twitter.com/thenetizenxyz"
            >
              <IconButton
                _hover={{ bg: "none" }}
                aria-label="Search database"
                icon={<FiTwitter size={20} />}
              />
              <span className="text-xs">Twitter</span>
            </Link>
          </MenuItem>
        </Box>
      </MenuList>
    </Menu>
  );
}
