import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [forgotHover, setForgotHover] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Hardcoded "face ID" credentials (aap yahan apna real username/password de sakte hain)
  const validUser = {
    email: "faceid@example.com",
    password: "facepassword123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); // reset error

    // Simple check against hardcoded credentials
    if (email === validUser.email && password === validUser.password) {
      // Login success - redirect
      navigate("/dashboard");
    } else {
      // Login failed - show error
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
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "700",
            fontSize: "28px",
            marginBottom: "10px",
            color: "#222",
          }}
        >
          Welcome Back
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#555",
            marginBottom: "25px",
            fontWeight: "400",
          }}
        >
          Please login to your account
        </p>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 18px",
              border: "2px solid #ccc",
              borderRadius: "14px",
              background: "#fff",
              color: "#000",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              fontWeight: "500",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#28a745")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "14px 18px",
              border: "2px solid #ccc",
              borderRadius: "14px",
              background: "#fff",
              color: "#000",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              fontWeight: "500",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "#28a745")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "#ccc")}
          />

          {error && (
            <p
              style={{
                color: "red",
                fontSize: "14px",
                margin: "0",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            style={{
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
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 12px 28px rgba(40, 167, 69, 0.85)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(40, 167, 69, 0.6)";
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            textAlign: "center",
            color: "#28a745",
            cursor: "pointer",
            textDecoration: forgotHover ? "underline" : "none",
            transition: "text-decoration 0.3s ease",
            userSelect: "none",
          }}
          onMouseEnter={() => setForgotHover(true)}
          onMouseLeave={() => setForgotHover(false)}
          onClick={() => alert("Forgot Password Clicked")}
        >
          Forgot Password?
        </p>

        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#555",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          OR
        </div>

        <button
          type="button"
          onClick={() => alert("Google login coming soon...")}
          style={{
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
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#f5f5f5";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            style={{ width: "22px", height: "22px" }}
          />
          Continue with Google
        </button>

        <style>{`
          @keyframes slideFadeUp {
            from {
              opacity: 0;
              transform: translateY(40px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};
