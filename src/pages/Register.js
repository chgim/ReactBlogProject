import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    password2: "",
    address: "",
  });
  const { username, password, password2, address } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const onClick = () => {
    if (
      username.length < 1 ||
      password.length < 1 ||
      password2.length < 1 ||
      address.length < 1
    ) {
      form.username.current.focus();
      return;
    }
    if (password !== password2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("회원가입 완료");
    navigate("/login");
    setForm({
      username: "",
      password: "",
      password2: "",
      address: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <div
        className="alds"
        style={{
          width: "30%",
          height: "390px",
          marginLeft: "35%",
          marginTop: "9%",
        }}
      >
        <div
          className="logo2"
          style={{
            textAlign: "center",
            width: "100%",
            marginLeft: "0%",
            fontSize: "35px",
            marginBottom: "15px",
            color: "#313031",
            fontWeight: "bold",
          }}
        >
          Time To Travel
        </div>
        <div
          className="inners"
          style={{
            textAlign: "left",
            paddingTop: "40px",
            paddingBottom: "20px",
            width: "100%",
            marginLeft: "0%",
            borderRadius: "10spx",
            border: "3px solid",
            borderColor: "#313031",
          }}
        >
          <form
            style={{
              width: "80%",
              marginLeft: "10%",
              color: "#313031",
              fontWeight: "bold",
            }}
          >
            아이디
            <br />
            <input
              style={{
                width: "350px",
                height: "25px",
                marginTop: "5px",
                marginBottom: "5px",
                borderColor: "#313031",
              }}
              type="text"
              name="username"
              required=""
              autoFocus
              placeholder="아이디"
              value={username}
              onChange={onChange}
            />
            <br />
            비밀번호
            <br />
            <input
              style={{
                width: "350px",
                height: "25px",
                marginTop: "5px",
                marginBottom: "5px",
                borderColor: "#313031",
              }}
              type="password"
              name="password"
              required=""
              placeholder="비밀번호"
              value={password}
              onChange={onChange}
            />
            <br />
            비밀번호 확인
            <br />
            <input
              style={{
                width: "350px",
                height: "25px",
                marginTop: "5px",
                marginBottom: "5px",
                borderColor: "#313031",
              }}
              type="password"
              name="password2"
              required=""
              placeholder="비밀번호 확인"
              value={password2}
              onChange={onChange}
            />
            <br />
            이메일
            <br />
            <input
              style={{
                width: "350px",
                height: "25px",
                marginTop: "5px",
                marginBottom: "5px",
                borderColor: "#313031",
              }}
              type="text"
              name="address"
              required=""
              placeholder="이메일 주소를 입력하세요"
              value={address}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <br />
            <button
              type="submit"
              style={{
                textAlign: "center",
                width: "358px",
                height: "33px",
                margin: "18px auto",
                borderRadius: "3px",
                cursor: "pointer",
              }}
              onClick={onClick}
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
