import { useEffect } from "react";

const User = ({ name }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("namaste react");
    }, 1000);
    console.log("useeffet");

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="border-2">
      <h1>Name:{name}</h1>
      <h2>Location:Kerala</h2>
    </div>
  );
};
export default User;
