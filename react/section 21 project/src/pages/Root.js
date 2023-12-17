import { Outlet } from "react-router-dom";
import classes from "./Root.module.css";
import MainNavigation from "../components/MainNavigation";
// Outlet은 자녀 라우트 요소들이 렌더링 되어야 할 장소를 표시하는 역할을 한다.
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
