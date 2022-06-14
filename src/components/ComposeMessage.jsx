import { useState, useContext } from "react";
import { UserContext } from "../context/UserContextComponent";
import { SendBtn } from "./SendBtn";

import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseinit";

const ComposeMessage = () => {
  const { user } = useContext(UserContext);
  const [messageInput, setMessageInput] = useState("");

  const postMessage = async () => {
    if (!messageInput.length) return;

    const newMessageRef = doc(collection(db, "messages"));

    const docData = {
      uid: user.uid,
      text: messageInput,
      user: user.email,
      createdAt: serverTimestamp(),
    };
    await setDoc(newMessageRef, docData);
    setMessageInput("");
  };

  const handleEnter = (e) => {
    console.log(e);
    if (e.shiftKey) return;
    if (e.code === "Enter") {
      postMessage();
    } else {
      return;
    }
  };
  return (
    <div className="h-16 max-h-52 flex items-center px-4 py-2 bg-h-black">
      <textarea
        className="w-full h-full max-h-52 resize-none rounded bg-h-light focus:outline-none py-2 px-4 text-gray-200 text-sm mr-2"
        placeholder="Message..."
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
        onKeyUp={handleEnter}
      />
      <SendBtn action={postMessage} />
    </div>
  );
};

export default ComposeMessage;
