import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "./User";
import Signout from "./Signout";

const Nav = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null;
      return (
        <NavStyles data-test="nav">
          <Link href="/">
            <a>Posts</a>
          </Link>
          {me && (
            <>
              <Link href="/createPost">
                <a>Add Recipe</a>
              </Link>
              <Signout />
              <span>{`hello, ${me.name}`}</span>
            </>
          )}
          {!me && (
            <Link href="/signup">
              <a>Sign in</a>
            </Link>
          )}
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
