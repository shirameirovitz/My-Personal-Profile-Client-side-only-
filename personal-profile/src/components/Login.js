import { useRef, useState } from "react";

function Login() {
  let userRef = useRef();
  let passwordRef = useRef();
  const [showOrHide, setShowOrHide] = useState("show");

  const visibility = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
      setShowOrHide("hide");
    } else {
      passwordRef.current.type = "password";
      setShowOrHide("show");
    }
  };
  const submitLogin = (e) => {
    if (
      userRef.current.value !== "shirameirovitz" ||
      passwordRef.current.value !== "shira1999"
    ) {
      alert("Username or Password are incorrect!");
      e.preventDefault();
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="/profile" onSubmit={(e) => submitLogin(e)}>
        <input placeholder="UserName" ref={userRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="button" onClick={visibility}>
          {showOrHide}
        </button>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
