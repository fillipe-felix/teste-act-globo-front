import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 600px;
  flex-direction: column;
  h2 {
    color: #ff8d1f;
    align-self: center;
    margin-top: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 500px;
  margin-left: 50px;
  form {
    margin-top: 40px;
    width: 100%;
  }
  button {
    width: 100px;
    height: 35px;
    border-radius: 5px;
    align-self: flex-end;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: row;
  p {
    font-size: 16px;
    align-self: flex-end;
    width: 220px;
    color: #0c359c;
  }
  & + div {
    margin-top: 10px;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 50px;
`;
