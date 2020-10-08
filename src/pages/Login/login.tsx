import React from 'react';

import Button from '../../components/Button/Button';
import logoTwitter from '../../assets/twitter.png';
import Input from '../../components/Input/input';

import * as Styled from './login.styles';

const Login = () => { 
  return(
    <>
      <Styled.Container>
        <img src={logoTwitter} alt="Twitter"/>
        <h1>Entrar no Twitter</h1>
        <div>
          <Input name="email" placeholder="E-mail"/>
          <Input name="email" placeholder="Senha"/>
        </div>
        <Button sizeVertical={'S'} sizeHorizontal={'container'} colorTheme={'normal'}>Entrar</Button>
        
      </Styled.Container>
    </>
  )
};

export default Login;
