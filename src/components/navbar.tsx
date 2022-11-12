import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
      </div>
      <div className="user">
        {/* 以下の２行を修正　auth.currentUser → user */}
        <p>{user?.displayName}</p>
        <img src={user?.photoURL || ""} width="40" height="40" alt="" />
      </div>
    </div>
  );
};
