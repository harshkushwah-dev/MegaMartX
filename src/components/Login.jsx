import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [forgotHover, setForgotHover] = useState(false);
  const [email, setEmail] = useState("faceid@example.com");
  const [password, setPassword] = useState("facepassword123");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validUser = {
    email: "faceid@example.com",
    password: "facepassword123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (email === validUser.email && password === validUser.password) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#28a745",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          borderRadius: "25px",
          padding: "50px 40px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
          color: "#000",
          animation: "slideFadeUp 0.8s ease forwards",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: "700", fontSize: "28px", color: "#222" }}>
          Demo Login
        </h2>
        <p style={{ textAlign: "center", color: "#555", fontWeight: "400" }}>
          Try with pre-filled demo credentials
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          {error && (
            <p style={{ color: "red", fontSize: "14px", textAlign: "center", fontWeight: "600" }}>
              {error}
            </p>
          )}
          <button type="submit" style={loginBtnStyle}>Login</button>
        </form>

        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            textAlign: "center",
            color: "#28a745",
            cursor: "pointer",
            textDecoration: forgotHover ? "underline" : "none",
          }}
          onMouseEnter={() => setForgotHover(true)}
          onMouseLeave={() => setForgotHover(false)}
          onClick={() => alert("Forgot Password Clicked")}
        >
          Forgot Password?
        </p>

        <div style={{ textAlign: "center", fontWeight: "600", color: "#555" }}>OR</div>

        <button
          type="button"
          onClick={() => alert("Google login coming soon...")}
          style={googleBtnStyle}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            style={{ width: "22px", height: "22px" }}
          />
          Continue with Google
        </button>

        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            marginTop: "8px",
            background: "#fff",
            color: "#000",
            border: "1px solid #ccc",
            padding: "10px 16px",
            borderRadius: "12px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.background = "#f5f5f5")}
          onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}
        >
          ← Back
        </button>

        <style>{`
          @keyframes slideFadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </div>
  );
};

// ✅ Styling Constants
const inputStyle = {
  width: "100%",
  padding: "14px 18px",
  border: "2px solid #ccc",
  borderRadius: "14px",
  background: "#fff",
  color: "#000",
  fontSize: "16px",
  outline: "none",
  transition: "border-color 0.3s ease",
  fontWeight: "500",
};

const loginBtnStyle = {
  width: "100%",
  padding: "15px",
  background: "#28a745",
  border: "none",
  borderRadius: "16px",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(40, 167, 69, 0.6)",
};

const googleBtnStyle = {
  width: "100%",
  padding: "14px",
  background: "#fff",
  color: "#000",
  borderRadius: "16px",
  border: "none",
  fontSize: "16px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
};
