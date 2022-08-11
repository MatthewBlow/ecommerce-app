import { useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { publicRequest } from "../requestMethod";
import { mobile } from "../responsive";
import { login } from "../redux/apicalls";
import { useDispatch } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(77, 115, 250, 0.5), 
      rgba(255, 255, 255, 0.5)
    ),
    url("https://biddown.com/wp-content/uploads/2020/02/Light-blue-tech-background-vector-05-1.png")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [success, setSuccess] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const dispatch = useDispatch()

  const handleRegister = async(e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setPasswordsMatch(false)
      setSuccess(false)
      console.log("Passwords must match!")
    } else{
      try {
        setPasswordsMatch(true)
        const res = await publicRequest.post(
          "/auth/register",
          {username, email, password})
        res && setSuccess(true)
        login(dispatch, { email, password } );
      } catch (error) {
      console.log(error)
    }
    }
    
}

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input 
            placeholder="Username" 
            onChange={(e) => setUsername(e.target.value)}/>
          <Input 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}/>
          <Input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}/>
          <Input 
            type="password" 
            placeholder="Confirm Password" 
            onChange={(e) => setConfirmPassword(e.target.value)}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
        {!passwordsMatch && <p style={{ color: "red"}}>Passwords do not match!</p>}
        {success && <Redirect to='/'/>}
      </Wrapper>
    </Container>
  );
};

export default Register;