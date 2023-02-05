import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/react";
import { SideDrawer } from "../components/others/index";

const ChatPage = () => {
  // const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {/* {user && <SideDrawer />} */}
      <Box>
        {/* {user && <MyChats />} */}
        {/* {user && <ChatBox />} */}
      </Box>
    </div>
  );
};

export default ChatPage;
