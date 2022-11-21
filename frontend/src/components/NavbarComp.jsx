import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";

const NavbarComp = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ONLINE SHOP</Navbar.Brand>
          <Nav>
            <Nav.Link href="/cart">
              <i className="bi bi-basket3-fill fs-3 nav-cart"></i>
              <span className="cart-quantity fs-6 ">
                <span>{cartTotalQuantity}</span>
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
