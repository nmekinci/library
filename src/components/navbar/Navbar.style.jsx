import styled from "styled-components";

const NavBarStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #bebe;
  & h2 {
    color: tomato;
    font-size: 3rem;
  }
  .links {
    font-size: 2rem;
    .link {
      margin-left: 1rem;
      text-decoration: none;
      color: green;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default NavBarStyle;
