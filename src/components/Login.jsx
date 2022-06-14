import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseinit";
import HeroImage from "../assets/undraw_mailbox.svg";
import Brand from "./Brand";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const signIn = (e) => {
    e.preventDefault();
    if (!email.length) {
      setLoginError("Username is required.");
      resetForm();
      return;
    }
    if (!password.length) {
      setLoginError("Password is required.");
      resetForm();
      return;
    }
    const formattedEmail = `${email}@hushapp.com`;
    signInWithEmailAndPassword(formattedEmail, password);
  };

  useEffect(() => {
    if (error) {
      resetForm();
      setLoginError("Please check your credentials.");
    }
  }, [error]);
  return (
    <div className="container mx-auto grid grid-rows-2 h-full max-w-screen-sm">
      <div className="top-container text-right overflow-hidden px-4 grid grid-cols-2">
        <div className="self-end">
          <img
            src={HeroImage}
            className="w-full"
            style={{ maxWidth: "350px" }}
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-4xl font-bold">Never</p>
          <p className="text-4xl font-bold">too</p>
          <p className="text-4xl font-bold">far.</p>
        </div>
      </div>
      <div className="bottom-container bg-h-alt py-4 px-6 flex flex-col gap-2 items-center rounded-tl-3xl rounded-tr-3xl">
        {/* <p className="text-gray-300 text-xs">Welcome to</p> */}
        <div className="py-4">
          <Brand large />
        </div>
        <form onSubmit={signIn} className="flex flex-col gap-4 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-h-black p-4 text-sm text-gray-200 focus:outline-none border-2 border-h-light focus:border-h-primary rounded"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            className="bg-h-black p-4 text-sm text-gray-200 focus:outline-none border-2 border-h-light focus:border-h-primary rounded"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="p-4 bg-h-primary rounded"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p className="error text-red-300 text-xs py-2">{loginError}</p>
      </div>
    </div>
  );
};
