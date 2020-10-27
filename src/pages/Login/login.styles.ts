import styled from 'styled-components';

interface FormProps {
  onSubmit: HTMLDivElement;
}

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column; 
  align-items: center;
  margin-top: 25px;
  background-color: '#aaa';

  img {
    width: 37px;
    height: 37px;
  }

  h1 {
    margin-top: 35px;
    font-size: 25px;
  }
  a {
    flex: 1;
    display: flex;
    flex-direction: row;
    display: block;
    text-decoration: none;
    color: #1DA1F2;
  }
`;

export const Form = styled.div<FormProps>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    align-items: stretch; 
`;
