import { useState } from "react";
import { Modal, Select } from "antd";
import "antd/dist/reset.css";
import "./AuthModal.css";
import sportsOptions from "../../sportsOptions";

function AuthModal({ shown, onExit }: { shown: boolean; onExit: () => void }) {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  return (
    <Modal
      open={shown}
      className="signup-modal"
      onCancel={() => onExit()}
      footer={null}
      width={"768px"}
    >
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <img
                  src="../../../src/assets/facebook.png"
                  width={"32px"}
                ></img>
              </a>{" "}
              <a href="#" className="social">
                <img src="../../../src/assets/google.png" width={"32px"}></img>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <Select
              className="favourite-sport"
              placeholder="Favorite sport"
              mode="multiple"
              allowClear
              options={sportsOptions.map((c) => c.options).flat()}
            />
            <button className="sign-up-button" type="button">
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <img
                  src="../../../src/assets/facebook.png"
                  width={"32px"}
                ></img>
              </a>{" "}
              <a href="#" className="social">
                <img src="../../../src/assets/google.png" width={"32px"}></img>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button className="sign-up-button" type="button">
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                Ready to play again? Sign in and connect with players near you!
              </p>
              <button
                className="sign-up-button sign-up-button-ghost"
                onClick={() => setIsSignUpActive(false)}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Join a friendly community and find teammates for your next game.
                Sign up and start playing today!
              </p>
              <button
                className="sign-up-button sign-up-button-ghost"
                onClick={() => setIsSignUpActive(true)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default AuthModal;
