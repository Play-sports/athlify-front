import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import CtaButton from "../CtaButton/CtaButton";
import { useAuthModal } from "../../hooks/useAuthModal";
import AuthModal from "../AuthModal/AuthModal";

function Header() {
  const { showSignUp, openSignUp, closeSignUp } = useAuthModal();

  return (
    <div className="header-wrapper">
      <AuthModal shown={showSignUp} onExit={() => closeSignUp()} />

      <div className="header-menu">
        <Link to="/">Athlify Logo</Link>
      </div>
      <div className="header-ctas">
        <Link to="/profile">Profile</Link>
        <CtaButton onClick={openSignUp} />
      </div>
    </div>
  );
}

export default Header;
