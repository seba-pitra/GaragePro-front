import {useAuthStore} from "../store/auth";

const Login = () => {
  const login = useAuthStore(state => state.login);

  const handleClick = () => {
    login("test@gmail.com", "Password12@");
  };

  return (
    <>
      <div>Login</div>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
