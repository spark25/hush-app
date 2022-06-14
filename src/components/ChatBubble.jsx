import { useContext } from "react";
import { UserContext } from "../context/UserContextComponent";

const ChatBubble = ({ chat }) => {
  const { user } = useContext(UserContext);

  const padTimeValue = (value) => {
    return String(value).padStart(2, 0);
  };

  const getTimestamp = (timestamp) => {
    if (!timestamp) return "";
    let date = new Date(timestamp.seconds * 1000);
    return `${date.toDateString()} at ${padTimeValue(
      date.getHours()
    )}:${padTimeValue(date.getMinutes())}`;
  };

  return (
    <div
      className={`p-2 ${
        chat.uid === user.uid
          ? "bg-h-primary ml-10 rounded-tl-2xl rounded-br-2xl rounded-bl-2xl"
          : "bg-h-light mr-10 rounded-tr-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
      }`}
    >
      <p
        className="text-sm whitespace-pre-line"
        style={{ overflowWrap: "anywhere" }}
      >
        {chat.text}
      </p>
      <p className="text-right text-nano ">
        <span className="capitalize mr-1 text-gray-200">
          {chat.user.split("@")[0]}
        </span>
        <span className="text-gray-400">{getTimestamp(chat.createdAt)}</span>
      </p>
    </div>
  );
};

export default ChatBubble;
