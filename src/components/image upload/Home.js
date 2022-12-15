import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   //   alignItems: "center",
      // }}
      >
        <Link to="/single_image">Single Image</Link>
        <br />
        <Link to="multi_image">Multi Images</Link>
      </nav>
    </div>
  );
}
export default Home;
