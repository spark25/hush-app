import { useEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebaseinit";

const MESSAGE_LIMIT = 50

const ChatWindow = () => {
  const dummy = useRef(null);

  const messagesRef = collection(db, "messages");
  const messageQuery = query(messagesRef, orderBy("createdAt", "desc"), limit(MESSAGE_LIMIT));

  const [chats, loading, error] = useCollectionData(messageQuery, {
    idField: "id",
  });



  useEffect(() => {
    dummy.current.scrollIntoView({ behavior : "smooth" });
  }, [chats]);

  return (
    <div className="chat-window flex-1 p-4 flex flex-col gap-2 bg-h-black rounded-tl-3xl rounded-tr-3xl overflow-y-auto overflow-x-hidden">
      {loading && <p className="text-center">Fetching chats...</p>}
      {!loading && error && <p className="text-center text-red-400">{JSON.stringify(error)}</p>}

      {!loading && !chats.length && (
        <p className="text-center text-sm text-gray-300 pt-10">
          No new messages. Say Hi!...🙂
        </p>
      )}

      {!loading &&
        chats.length > 0 &&
        chats.reverse().map((chat) => <ChatBubble chat={chat} key={chat.createdAt} />)}
      <div ref={dummy}></div>
    </div>
  );
};

export default ChatWindow;
