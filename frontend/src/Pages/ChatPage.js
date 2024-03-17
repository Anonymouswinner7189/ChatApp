import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider.js";
import SideDrawer from "../components/miscellaneous/SideDrawer.js";
import { Box } from "@chakra-ui/react";
import MyChats from "../components/MyChats.js";
import ChatBox from "../components/ChatBox.js";

const ChatPage = () => {
  const { user } = ChatState();

  useEffect(() => {}, []);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}

      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats />}
        {user && <ChatBox />}
      </Box>
    </div>
  );
};

export default ChatPage;
