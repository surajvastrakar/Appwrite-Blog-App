import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

export const Protected = ({ children, authentication }) => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (!authentication && authStatus !== authentication) {
      navigate("/");
    }
    setLoader(false);
  }, [authentication, navigate, authStatus]);

  return <>{!loader && children}</>;
};
