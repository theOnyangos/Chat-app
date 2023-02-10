import { ViewIcon } from "@chakra-ui/icons";
import {
  IconButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Modal,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProfileModel = ({ user, children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon />} onClick={onOpen} />
      )}

      <Modal size="lg" onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "Work sans",
              forntSize: "40px",
            }}
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              borderRadius="full"
              boxSize={"150"}
              src={user.pic}
              alt={user.name}
            />
            <Text
              fontSize={{ base: "28px", mid: "30px" }}
              fontFamily="Work sans"
            >
              {" "}
              Email: {user.email}{" "}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfileModel;
