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
  font-size: 13px;
  margin: 20px 0px;
`;

const Error = styled.p`
  color: red;
  padding-top: 5px;
`

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
  const [emailIsValid, setEmailIsValid] = useState(true)
  const [passwordIsValid, setPasswordIsValid] = useState(true)
  const [allFieldsFull, setAllFieldsFull] = useState(true)
  const [success, setSuccess] = useState(null);
  const [passwordsMatch, setPasswordsMatch] = useState(true)
  const dispatch = useDispatch()

  const validateCredentials = async() => {
    const email_regEx=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    const password_regEx=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    
    console.log(username !== '')
    console.log(username !== '')


    if(username === '' || email === '' || password === '' || confirmPassword === ''){
      setAllFieldsFull(false)
    } else if(username !== '' && email !== '' && !password !== '' && !confirmPassword !== '') {

      setAllFieldsFull(true)
      
      if(email_regEx.test(email)){
        setEmailIsValid(true)
      } else if(!email_regEx.test(email) && email !== ""){
        setEmailIsValid(false)
      } 
  
      if(password_regEx.test(password)){
        setPasswordIsValid(true)
      } else if(!password_regEx.test(email) && email !== ""){
        setPasswordIsValid(false)
      } 
  
      if(password !== confirmPassword){
        setPasswordsMatch(false)
      } else if (password === confirmPassword){
        setPasswordsMatch(true)
      } 

      if(emailIsValid && passwordIsValid && passwordsMatch && allFieldsFull){
        try {
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

    /*
    if(email_regEx.test(email)){
      setEmailIsValid(true)
    } else if(!email_regEx.test(email) && email !== ""){
      setEmailIsValid(false)
    } 

    if(password_regEx.test(password)){
      setPasswordIsValid(true)
    } else if(!password_regEx.test(email) && email !== ""){
      setPasswordIsValid(false)
    } 

    if(password !== confirmPassword){
      setPasswordsMatch(false)
    } else if (password === confirmPassword){
      setPasswordsMatch(true)
    } 
    
    if(emailIsValid && passwordIsValid && passwordsMatch && allFieldsFull){
      setAllInputsValid(true)
      try {
        const res = await publicRequest.post(
          "/auth/register",
          {username, email, password})
        res && setSuccess(true)
        login(dispatch, { email, password } ); 
      } catch (error) {
      console.log(error)
    }
  } */
}

  const handleRegister = async(e) => {
    e.preventDefault()
    validateCredentials()
    /*
    if(username == "" || email == "" || password == "" || confirmPassword == ""){
      setAllFieldsFull(false)
    } else if(!username == "" && !email == "" && !password == "" && !confirmPassword == "") {
      setAllFieldsFull(true)
      validateCredentials()
    } 
    */
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
            autoComplete="new-email" 
            onChange={(e) => setEmail(e.target.value)}/>
          <Input 
            type="password" 
            autoComplete="new-password"
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}/>
          <Input 
            type="password" 
            placeholder="Confirm Password" 
            onChange={(e) => setConfirmPassword(e.target.value)}/>
          <Agreement>Password must contain a minimum of eight characters, one number and one special character</Agreement>
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
        {!allFieldsFull && <Error>Please fill all fields!</Error>}
        {!passwordsMatch && <Error>Passwords do not match!</Error>}
        {!emailIsValid && <Error>Email is not valid!</Error>}
        {!passwordIsValid && <Error>Password is not valid!</Error>}
        {success && <Redirect to='/'/>}
      </Wrapper>
    </Container>
  );
};

export default Register;