import { Outlet, Link } from "react-router-dom";
import Wrapper from "../../asserts/wrappers/SharedLayout";
const SharedLayout = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="all-jobs">all jobs</Link>
        <Link to="add-job">add jobs</Link>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
export default SharedLayout;
