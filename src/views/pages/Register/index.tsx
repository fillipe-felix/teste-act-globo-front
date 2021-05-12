import React, { useCallback, useRef } from 'react';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';

import { Container, Content, InputContent } from './styles';
import Input from '../../../components/Input';
import api from '../../../services/api';

import Button from '../../../components/Button';
import getValidationErrors from '../../../utils/getValidationErrors';

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const registerUser = useCallback(async data => {
    console.log(data);
    try {
      const resp = await api.post('/api/v1/usuario', data);
      toast.success(resp.data.message);
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }, []);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome obrigatório'),
        cep: Yup.string().required('CEP é obrigatório'),
        dataNascimento: Yup.string()
          .required('Data de nascimento obrigatória')
          .notOneOf(['0', 'Invalid Date'], 'Data de nascimento Inválida'),
        documento: Yup.string().required('Documento obrigatório'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      // formRef.current?.setErrors()
      registerUser(data);
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <h2>DADOS DE CADASTRO</h2>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <InputContent>
            <p>Nome:</p>
            <Input tamanho="35px" name="nome" placeholder="Insira um nome" />
          </InputContent>

          <InputContent>
            <p>Documento:</p>
            <Input
              name="documento"
              tamanho="35px"
              placeholder="Insira o numero do seu documento"
            />
          </InputContent>

          <InputContent>
            <p>CEP:</p>
            <Input
              name="cep"
              tamanho="35px"
              formatar={'99999-999'}
              placeholder="Insira um CEP"
            />
          </InputContent>

          <InputContent>
            <p>Data de Nascimento:</p>
            <Input
              name="dataNascimento"
              tamanho="35px"
              type="date"
              // formatar={'99/99/9999'}
              placeholder="Insira uma data de nascimento"
            />
          </InputContent>
          <Button>Salvar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
