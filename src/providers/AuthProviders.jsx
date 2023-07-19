/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProviders = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "https://house-hunter-server-fazlerabbyrifat.vercel.app/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { role, ...otherData } = response.data;

        setUserRole(role);
        setUser(otherData);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, []);

  const AuthInfo = {
    isLoggedIn,
    userRole,
    user,
  };

  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
