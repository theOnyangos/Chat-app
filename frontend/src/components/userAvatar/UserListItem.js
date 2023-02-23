import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleUserFunction }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Box
        onClick={handleUserFunction}
        cursor="pointer"
        bg="#E8E8E8"
        _hover={{ background: "#38B2AC", color: "white" }}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "black",
          padding: "7px 10px",
          marginBottom: "2px",
        }}
        borderRadius="lg"
      >
        <Avatar
          mr={2}
          size="sm"
          cursor={"pointer"}
          name={user.name}
          src={user.pic}
        />
        <Box>
          <Text>{user.name}</Text>
          <Text fontSize="xs">
            <b>Email : </b> {user.email}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default UserListItem;
