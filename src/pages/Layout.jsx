import MainNavigation from "../components/MainNavigation/MainNavigation";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function LayoutPage() {
  // const { isLogged, user, signOut } = useContext(AuthContext);

  return (
    <div className="container-fluid vh-100 main-container">
      <header className="header">
        <MainNavigation />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
