import React, { useState } from 'react';
import Modal from 'react-modal';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Col, Row } from 'react-grid-system';
import Button from '../../components/Button/Button';
import logoTwitter from '../../assets/twitter.png';
import Input from '../../components/Input/input';

import { months, years, days } from '../../mock/birthday.mock';

import * as Styled from './login.styles';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('E-mail obrigatório'),
      password: Yup.string().required('Preencha a senha'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const formikModal = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('E-mail obrigatório'),
      password: Yup.string().required('Preencha a senha'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Styled.Content>
        <img src={logoTwitter} alt="Twitter" />
        <h1>Entrar no Twitter</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : <p />}
          <input
            name="password"
            type="password"
            placeholder="Senha"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : <p />}
          <Button sizeVertical="S" sizeHorizontal="container" colorTheme="normal" type="submit">Entrar</Button>
        </form>

        <div>
          <a href="forgot">Esqueceu sua senha?</a>
          <button type="button" onClick={openModal}>Inscrever-se no Twitter</button>
        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="modal" appElement={document.getElementById('root') as HTMLElement}>
          <form onSubmit={formikModal.handleSubmit}>
            <Row>
              <Col>
                <img src={logoTwitter} alt="Twitter" style={{ width: '37px', height: '37px' }} />
              </Col>
              <Col>
                <Button sizeVertical="S" sizeHorizontal="" colorTheme="normal" type="submit">Avançar</Button>
              </Col>
            </Row>
            <h2>Criar sua conta</h2>

            <input
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={formikModal.handleChange}
              value={formikModal.values.email}
            />
            {formikModal.touched.email && formikModal.errors.email ? (
              <div>{formikModal.errors.email}</div>
            ) : <p />}
            <input
              name="password"
              type="password"
              placeholder="Senha"
              onChange={formikModal.handleChange}
              value={formikModal.values.password}
            />
            {formikModal.touched.password && formikModal.errors.password ? (
              <div>{formikModal.errors.password}</div>
            ) : <p />}
            <h4>Data de Nascimento</h4>
            <p>
              Isso não será exibido publicamente.
              Confirme sua própria idade, mesmo se esta conta for de empresa,
              de um animal de estimação ou outros.
            </p>
            <select>
              {months.map((month) => <option key={month.value}>{month.name}</option>)}
            </select>
            <select>
              {years.map((year) => <option key={year}>{year}</option>)}
            </select>
            <select>
              {days.map((day) => <option key={day.value}>{day.value}</option>)}
            </select>
          </form>
        </Modal>

      </Styled.Content>
    </>
  );
};

export default Login;
