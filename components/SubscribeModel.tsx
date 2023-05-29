import React from "react";
import {
  Button,
  Text,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/react";

import { AxiosError } from "axios";
import { BiBell } from "react-icons/bi";

import { useState } from "react";
import axios from "axios";

export default function SubscribeModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef<HTMLInputElement>(null);

  const finalRef = React.useRef(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/subscribe/", {
        email,
      });
      setMessage(response.data.message); // <-- update here
      setEmail("");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data.message); // <-- and here
      } else {
        setMessage("An error occurred. Please try again.");
      }
    }

    setLoading(false);
  };
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <>
      <Button
        borderRadius="full"
        bg={bg}
        borderWidth={1}
        borderColor={borderColor}
        gap={1}
        onClick={onOpen}
        fontSize={14}
      >
        <BiBell size={18} /> Subscribe
      </Button>

      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get all the updates</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Subscribe to our mailing list.</Text>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                ref={initialRef}
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            {message && <Text>{message}</Text>}
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={subscribe}
              isLoading={loading}
            >
              Subscribe
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
