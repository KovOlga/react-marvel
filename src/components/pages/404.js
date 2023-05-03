import ErrorMessage from "../error-message/error-message";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <ErrorMessage />
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          display: "block",
          margin: "0 auto",
        }}
        to="/"
      >
        Back to main page
      </Link>
    </div>
  );
};

export default Page404;
