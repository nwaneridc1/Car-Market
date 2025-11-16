import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(
          backendUrl + "/user/create",
          { name, username, email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Sign Up Successful");
        } else {
          toast.error("Something went wrong");
        }
      } else {
        console.log("LOGIN URL:", backendUrl + "/user/login");

        const response = await axios.post(backendUrl + "/user/login", {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          toast.success("Login Successful");
        } else {
          toast.error("Something went wrong");
        }
      }
    } catch (error) {
      // console.error(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message);
      } else {
        console.log(error.message);
        toast.error(error.message || "Something went wrong");
      }
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
    <div className="pt-8 pb-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 overflow-hidden">
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center sm:max-w-96 m-auto gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-gray-600 font-bold text-4xl font-ovo mb-3">
          {currentState}
        </p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {currentState === "Login" ? null : (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full p-3 mt-2 rounded-lg text-black border focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
          placeholder="Name"
          required
        />
      )}

      {currentState === "Login" ? null : (
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          className="w-full p-3 mt-2 rounded-lg text-black border focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
          placeholder="Username"
          required
        />
      )}

      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full p-3 mt-2 rounded-lg text-black border focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
        placeholder="Email"
        required
      />

      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full p-3 rounded-lg text-black border focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
        placeholder="Password"
        required
      />

      <div className="w-full flex justify-between mt-[10px]">
        <p className="cursor-pointer font-semibold text-md font-serif">
          Forgot Your Password?
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer font-semibold text-md font-serif"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer font-semibold text-md font-serif"
          >
            Login Here
          </p>
        )}
      </div>

      <button className="flex font-serif gap-3 mt-6 py-3 px-6 bg-gradient-to-r from-indigo-500 to-teal-400 text-white text-xl font-semibold rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105">
        {currentState === "Login" ? "Login" : "Sign Up"}
      </button>
    </form>
   
    </div>
     <Newsletter/>
    <Footer/>
    </div>
  );
};

export default Login;
