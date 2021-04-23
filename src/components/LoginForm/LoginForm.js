import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { LoginUser } from "../../actions/loginAction";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  let history = useHistory();

  const dispatch = useDispatch();

  const { isUserLogged } = useSelector((state) => state.login);

  console.log(isUserLogged);

  const handleInputLogin = (e) => {
    setLogin(e.target.value);
    console.log(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "admin") {
      dispatch(LoginUser());
      history.push("/admin/blog");
    } else if (login === "user" && password === "user") {
      dispatch(LoginUser());
      history.push("/blog");
    } else {
      setError(true);
    }
  };

  return (
    <StyledFormContainer>
      {error && (
        <StyledParagraph>Podaj poprawny login lub hasło</StyledParagraph>
      )}
      <StyledHeaderForm>Login </StyledHeaderForm>
      <StyledForm onSubmit={handleSubmitForm}>
        <label>
          Login:{" "}
          <StyledInput type="text" onChange={handleInputLogin} value={login} />
        </label>
        <label>
          Password:{" "}
          <StyledInput
            type="password"
            onChange={handleInputPassword}
            value={password}
          />
        </label>
        <StyledButton>Sign In</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
};
const StyledParagraph = styled.p`
  color: red;
  margin-bottom: 20px;
`;
const StyledFormContainer = styled.div`
  width: 350px;
  height: 350px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border: 2px solid #0360eb;
`;

const StyledHeaderForm = styled.h2`
  color: white;
  margin-bottom: 20px;
  color: #0360eb;
`;

const StyledForm = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 20px;
  color: #0360eb;
`;

const StyledInput = styled.input`
  font-size: 20px;
  color: #0360eb;
  margin-bottom: 20px;
`;

const StyledButton = styled.button`
  font-size: 14px;
  color: #0360eb;
  border: 2px solid #0360eb;
  padding: 4px 8px;
  cursor: pointer;
  margin-top: 20px;
  background-color: white;
  :hover {
    transition: 0.2s;
    color: white;
    background-color: #0360eb;
  }
`;
export default LoginForm;
