import AppHeader from "../../components/app-header/app-header";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

const LayoutPage = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default LayoutPage;
