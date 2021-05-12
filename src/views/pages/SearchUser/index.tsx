/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useRef, useState, useCallback } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';

import { Container, Content, InputContent, ContainerSearch } from './styles';
import Input from '../../../components/Input';

import Button from '../../../components/Button';
import api from '../../../services/api';

const SearchUser: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [user, setUser] = useState<any>();

  const search = useCallback(
    async data => {
      try {
        const resp = await api.get(`/api/v1/usuario/${data.search}`);
        setUser(resp.data);
        toast.success('Usuário encontrado com sucesso!');
      } catch (err) {
        toast.error(err.response.data.message);
      }
    },
    [user],
  );

  return (
    <Container>
      <h2>DADOS DE CADASTRO</h2>
      <Content>
        <Form ref={formRef} onSubmit={search} initialData={user}>
          <ContainerSearch>
            <Input tamanho="35px" name="search" placeholder="Pesquisar" />
            <Button style={{ marginLeft: 20 }}>Pesquisar</Button>
          </ContainerSearch>
          <InputContent>
            <p>Nome:</p>
            <Input tamanho="35px" name="nome" placeholder="Nome" />
          </InputContent>

          <InputContent>
            <p>Documento:</p>
            <Input
              disabled
              name="documento"
              tamanho="35px"
              placeholder="Documento"
            />
          </InputContent>

          <InputContent>
            <p>Idade:</p>
            <Input disabled name="idade" tamanho="35px" placeholder="Idade" />
          </InputContent>

          <InputContent>
            <p>Cidade:</p>
            <Input disabled name="cidade" tamanho="35px" placeholder="Cidade" />
          </InputContent>
          <InputContent>
            <p>Bairro:</p>
            <Input disabled name="bairro" tamanho="35px" placeholder="Bairro" />
          </InputContent>
          <InputContent>
            <p>Estado:</p>
            <Input disabled name="estado" tamanho="35px" placeholder="Estado" />
          </InputContent>
        </Form>
      </Content>
    </Container>
  );
};

export default SearchUser;
