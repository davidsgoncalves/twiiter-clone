import styled from 'styled-components';

export const Input = styled.div`
  flex: 1;
  display: flex;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 1;
    /* color: #F4EDE8;  */

/*     &::placeholder{
      color: #666360;
    } */
  }
`;
