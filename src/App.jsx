import "./App.css";
import ChatWindow from "./components/ChatWindow";
import ComposeMessage from "./components/ComposeMessage";
import Header from "./components/Header";
import { Login } from "./components/Login";
import { useContext } from "react";
import { UserContext } from "./context/UserContextComponent";
import Brand from "./components/Brand";

const splashStyle = {
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
}

function App() {
  const { user, loading, error } = useContext(UserContext);

  if (loading) {
    return (
      <div className="fixed" style={splashStyle}>
        <Brand  large/>
      </div>
    );
  }
  if (!user) {
    return <Login />;
  }

  return (
    <div className="container bg-h-alt mx-auto flex flex-col h-full">
      <Header />
      <ChatWindow />
      <ComposeMessage />
    </div>
  );
}

export default App;
