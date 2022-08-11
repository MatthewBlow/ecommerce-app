import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { login } from "../redux/apicalls";
import {mobile} from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 110vh;
  background: linear-gradient(
      rgba(77, 115, 250, 0.3), 
      rgba(255, 255, 255, 0.3)
    ),
    url("https://biddown.com/wp-content/uploads/2020/02/Light-blue-tech-background-vector-05-1.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  height: 35%;
  padding: 20px;
  margin-bottom: 110px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled{
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user)

  const handleLogin = (e) => {
    e.preventDefault()
    login(dispatch, { email, password } );
    console.log(email, password);
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
            placeholder="Username" 
            onChange={(e) => setEmail(e.target.value)}/>
          <Input 
            placeholder="Password" 
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>
          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;