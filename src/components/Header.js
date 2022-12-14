import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("user") ? setIsLogin(true) : setIsLogin(false);
  }, []);

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <div
        className="hd1"
        style={{ textAlign: "center", fontSize: "42px", padding: "10px" }}
      >
        <button
          style={{
            width: "90px",
            height: "25px",
            position: "absolute",
            top: "19px",
            left: "50px",
            borderRadius: "3px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(-1);
          }}
        >
          뒤로가기
        </button>

        <div
          className="title"
          style={{ cursor: "pointer", fontFamily: "KOFIHDrLEEJWTTF-B" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Time To Travel
        </div>

        {isLogin ? (
          <button
            style={{
              width: "90px",
              height: "25px",
              position: "absolute",
              top: "19px",
              right: "50px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.removeItem("user");
              alert("로그아웃 되었습니다.");
              navigate("/login");
            }}
          >
            로그아웃
          </button>
        ) : (
          <button
            style={{
              width: "90px",
              height: "25px",
              position: "absolute",
              top: "19px",
              right: "50px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate("/login");
            }}
          >
            로그인
          </button>
        )}
      </div>

      <div className="hd2">
        <video
          src="/images/21.mp4"
          loop
          autoPlay
          muted
          style={{ width: "100%", margin: "0px auto", opacity: "0.9" }}
        />
      </div>
      <div className="sc1"></div>
    </div>
  );
};
export default Header;
