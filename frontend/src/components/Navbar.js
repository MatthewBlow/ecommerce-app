import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styled from 'styled-components';
import { mobile } from "../responsive";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from "../redux/apicalls";

const Container = styled.div`
  background-color: rgb(203, 199, 199);
  margin: -10px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px ;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1920px;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: white;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 100px;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  margin-right: 30px;
  ${mobile({ fontSize: "24px" })}
  cursor: pointer;
  caret-color: transparent;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 30px;
  caret-color: transparent;
  ${mobile({ flex: 2, justifyContent: "center" })}`

const SearchContainer = styled.div`
  background-color: white;
  border: 0.5px solid white;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  background: white;
  outline: none;
  border: none;
  width: 400px;
  ${mobile({ width: "50px" })}
`;

const Links = styled.div`
  color: black;
`

const NavbarTest = () => {
  const quantity = useSelector(state => state.cart.quantity)
  const user = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  const logoutHandle = () => {
    logout(dispatch)
  }

  return (
    <Navbar style={{ padding: "9px" }}>
        <Container>
        <Wrapper>
        <Left>
          <Link to="/">
          <Navbar.Brand>HyperTech</Navbar.Brand>
          </Link>
        </Left>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Center>
            <Nav className="me-auto">
              <Nav.Link>
              <Link style={{ color: "black", fontWeight: "normal"}} to="/">
                Home
                </Link>
              </Nav.Link>
              <Nav.Link>
              <Link style={{ color: "black", fontWeight: "normal"}} to="/products">
                All Products
                </Link>
              </Nav.Link>
            <NavDropdown title="PC Parts" id="basic-nav-dropdown" style={{ color: "black", fontWeight: "normal"}}>
              <NavDropdown.Item>
              <Link style={{ color: "black", fontWeight: "normal"}} to='/products/desktop'>
                Desktop
              </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black", fontWeight: "normal"}} to='/products/laptop'>
                  Laptop
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black", fontWeight: "normal"}} to='/products/monitor'>
                  Monitor
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black", fontWeight: "normal"}} to='/products/graphics-card'>
                  Graphics Card
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black", fontWeight: "normal"}} to='/products/processor'>
                  Processor
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black", fontWeight: "normal"}} to='/products/motherboard'>
                  Motherboard
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black", fontWeight: "normal"}} to='/products/desktop-case'>
                  Desktop Cases
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link style={{ color: "black", fontWeight: "normal"}} to='/products/storage-device'>
                  Storage Devices
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Nav>
            </Center>
            <Right>
            <Nav>
            {user ?
             <Nav.Link onClick={logoutHandle} to='/' style={{ color: "black"}}>
             Log Out
           </Nav.Link> :
            <>
            <Nav.Link>
              <Link to="/register" style={{ color: "black"}}>
                Register
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login" style={{ color: "black"}}>
                Sign In
              </Link>
            </Nav.Link> 
            </>
            } 
            <Link to="/cart">
            <Badge className='cart' badgeContent={quantity} color="primary">
              <ShoppingCartIcon style={{ color: "black"}}/>
            </Badge>
            </Link>
            </Nav>
            </Right>
        </Navbar.Collapse>
        </Wrapper>
        </Container>
    </Navbar>
  );
}

export default NavbarTest;