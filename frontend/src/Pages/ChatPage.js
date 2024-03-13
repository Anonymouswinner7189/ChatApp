import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const { data } = await axios.get("http://localhost:5000/api/chat");
      console.log(data);
      setChats(data);
    };

    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => {
        return <div key={chat._id}>{chat.chatName}</div>;
      })}
    </div>
  );
};

export default ChatPage;
