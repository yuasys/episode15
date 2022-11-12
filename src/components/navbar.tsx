import { Link } from "react-router-dom";
import { auth } from "../config/firebase"; // 1行追加

export const Navbar = () => {
  return (
    <div>
      <Link to="/"> Home </Link>
      <Link to="/login"> Login </Link>

      {/* ------ 3行追加 ------- */}
      <div>
        <p>{auth.currentUser?.displayName}</p>
        <img src={auth.currentUser?.photoURL || ""} width="100" height="100" alt="ユーザー画像"/>
        {/* ↑　srcにnullは代入不可のため、||""を追加してあります */}
      </div>
    </div>
  );
};
