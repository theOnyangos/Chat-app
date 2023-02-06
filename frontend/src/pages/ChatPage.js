import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";
import { SideDrawer, ChatBox, MyChats } from "../components/others/index";

const ChatPage = () => {
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          height: "91.5vh",
        }}
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
