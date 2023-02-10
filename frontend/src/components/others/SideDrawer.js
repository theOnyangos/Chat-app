import {
  Box,
  Tooltip,
  Button,
  Text,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { ChatState } from "../../context/ChatProvider";
import { ProfileModel } from "../others";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChats, setLoadingChats] = useState();

  const { user } = ChatState();

  return (
    <Box
      bg="white"
      w="100%"
      p="5px 10px"
      borderWidth="5px"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Tooltip
        label="Search users to chat with"
        hasArrow
        placement="bottom-end"
      >
        <Button variant={"ghost"}>
          <i className="fas fa-search" aria-hidden="true"></i>
          <Text d={{ base: "none", md: "flex" }} px="4">
            Search User
          </Text>
        </Button>
      </Tooltip>
      <Text fontSize="2xl" fontFamily="Work sans">
        Live-Chat-Application
      </Text>
      <div>
        <Menu>
          <MenuButton p={1}>
            <BellIcon fontSize="2xl" m={1} />
          </MenuButton>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            <Avatar
              size="sm"
              cursor="pointer"
              name={user.name}
              src={user.pic}
            />
          </MenuButton>
          <MenuList>
            <ProfileModel user={user}>
              <MenuItem>My Profile</MenuItem>
            </ProfileModel>
            <MenuDivider />
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </Box>
  );
};

export default SideDrawer;
