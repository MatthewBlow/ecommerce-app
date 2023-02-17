import { useState } from "react";
import { Link } from 'react-router-dom'
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

  padding: 20px;
  margin-bottom: 110px;
  overflow: hidden;
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
  margin: auto;
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

const CreateAccount = styled.a`
  margin: auto;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;

`;

const ForgotPassword = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Validation = styled.p`
  font-size: 12px;
  color: red;
`

const Error = styled.span`
  color: red;
`
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailValMessage, setEmailVal] = useState("")
  const [passwordValMessage, setPasswordVal] = useState("")
  const [emailIsValid, setEmailIsValid] = useState(false)
  const [passwordIsValid, setPasswordIsValid] = useState(false)
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector(state => state.user)

  const validateCredentials = async() => {
    const email_regEx=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    const password_regEx=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if(email_regEx.test(email)){
      setEmailVal("Email is Valid")
      setEmailIsValid(true)
    } else if(!email_regEx.test(email) && email !== ""){
      setEmailVal("Please enter a valid email address!")
      setEmailIsValid(false)
    } else {
      setEmailVal("")
    }

    if(password_regEx.test(password)){
      setPasswordVal("Password is Valid")
      setPasswordIsValid(true)
      login(dispatch, { email, password } );
    } else if(!password_regEx.test(email) && email !== ""){
      setPasswordVal("Please enter a valid password!")
      setPasswordIsValid(false)
    } else {
      setPasswordVal("")
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    validateCredentials()
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input 
            placeholder="Username" 
            onChange={(e) => setEmail(e.target.value)}/>
          <Validation>{!emailIsValid && emailValMessage}</Validation>
          <Input 
            placeholder="Password" 
            type="password"
            onChange={(e) => setPassword(e.target.value)}/>
          <Validation>{!passwordIsValid && passwordValMessage}</Validation>
          <Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
          {error && <Error>Something went wrong...</Error>}
          <CreateAccount>
            <Link to='/register'>CREATE A NEW ACCOUNT</Link>
          </CreateAccount>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;