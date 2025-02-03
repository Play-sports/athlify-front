import { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { AuthModalProvider } from "../hooks/useAuthModal";
import "../App.css";

function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthModalProvider>
      <div className="layout-container">
        <Header />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </AuthModalProvider>
  );
}

export default Layout;
