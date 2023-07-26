import styled from "styled-components";

const HeaderStyle = styled.header`
  text-align: center;

  & h2 {
    color: tomato;
  }
  & form {
    margin: 0 auto;
    
    background-color: #dede;
    padding: 1rem;
    max-width: 500px;
    & input,
    select,
    button {
      margin: 0.5rem;
    }
  }
`;

export default HeaderStyle;
