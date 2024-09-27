import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/create"}>Create</Link>
        </li>
      </ul>

      <h1>Home 페이지</h1>
    </>
  );
};
export default Header;
