import { ReactNode } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { AuthModalProvider } from "../hooks/useAuthModal";
import "../App.css";
import { CompanyProvider } from "../hooks/useCompanyContext";

function Layout({ children }: { children: ReactNode }) {
  return (
    <AuthModalProvider>
      <CompanyProvider>
        <div className="layout-container">
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </CompanyProvider>
    </AuthModalProvider>
  );
}

export default Layout;
