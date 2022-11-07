import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <Nav>
      <NavLogoContainer>
        <Link href="/">David Stevens</Link>
      </NavLogoContainer>
      <NavLinkContainer>
        <NavLink href="/">About</NavLink>
        <NavLink href="/">Blog</NavLink>
        <NavLink href="https://twitter.com/ewdavidstevens" target="_blank">
          Twitter
        </NavLink>
      </NavLinkContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  position: sticky;
  top: 0;
  align-content: center;
  background: white;
  width: 100%;
  height: 60px;
`;

const NavLink = styled.a`
  color: black;
  padding: 16px;
`;

const NavLogoContainer = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10%;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 90%;
  text-transform: uppercase;
  font-size: 0.7rem;
`;
