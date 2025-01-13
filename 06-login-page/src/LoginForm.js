import React, { useState } from "react";

export default function () {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  const checkDetails = () => {
    if (userName == "rotiprataguy" && password == "rotiprata123") {
      return alert("Login success");
    } else {
      return alert("Invalid login");
    }
  };

  return (
    <>
      <label>User Name</label>
      <input type="text" onChange={updateUserName} />
      <label>Password</label>
      <input type="text" onChange={updatePassword} />
      <button onClick={checkDetails}>Submit</button>
    </>
  );
}
