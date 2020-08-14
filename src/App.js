import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

const COLORS = {
  formBackground: '#9381FF',
  platinum: '#E6E8E6',
  labelColor: '#747474',
  label: '#97a0bf',
  buttonColor: '#FFC299',
  buttonColorSubmit: '#FFEEDD',
  ghostWhite: '#F8F7FF',
  formTitle: '#09003D',
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormOffsetContainer = styled.div`
  width: 500px;
  height: 700px;
  background: ${COLORS.formBackground};
  position: relative;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.1);
  /* z-index: -1; */
`;

const Form = styled.form`
  position: absolute;
  width: 500px;
  height: 600px;
  padding: 50px;
  right: 100px;
  top: 50px;
  background: #fff;
  border-radius: 5px;
  /* z-index: -1; */

  -webkit-box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.15);

  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  padding: 30px 0;
  /* border: 1px solid black; */
`;

const Label = styled.label`
  color: ${COLORS.label};
  font-size: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  border: none;
  border-bottom: 1px solid ${COLORS.platinum};
`;

const Message = styled.textarea`
  height: 100px;
  padding: 10px 0;
  border: none;
  resize: none;
  border-bottom: 1px solid ${COLORS.platinum};
  padding: 5px 0;

  font-size: 11px;
`;

const SubmitButton = styled.button`
  margin: 0 auto;
  width: 60%;
  height: 50px;
  background-color: ${COLORS.buttonColor};
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in-out;
  color: ${COLORS.ghostWhite};
  font-size: 18px;

  -webkit-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);

  &:hover {
    background: ${COLORS.buttonColorSubmit};
    color: ${COLORS.label};
  }

  &:active {
    -webkit-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.05);
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.02);
  }
`;

const TitleContainer = styled.div`
  display: flex;

  justify-content: flex-start;
`;

const FormTitle = styled.h1`
  color: ${COLORS.formTitle};
  font-weight: 500;
`;

// const Icon = styled.i`
//   font-size: 30px;
//   margin-right: 10px;
// `;

const Accent = styled.div`
  position: absolute;
  /* border: 1px solid black; */
  width: 200px;
  height: 200px;
  z-index: 1;
  top: 300px;
  left: 300px;

  font-size: 26px;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 80%;

  background: -webkit-linear-gradient(
    ${COLORS.formBackground},
    ${COLORS.buttonColorSubmit}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`submitted Name: ${name}, Email: ${email}, Msg: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <FormOffsetContainer>
          <Accent>
            . . . . . . . . . . <br />
            . . . . . . . . . .<br />
            . . . . . . . . . . <br />. . . . . . . . . .
          </Accent>
          <Form onSubmit={handleSubmit}>
            <TitleContainer>
              {/* <Icon>
                <MdCreate />
              </Icon> */}
              <FormTitle>Contact Us</FormTitle>
            </TitleContainer>

            <FormGroup>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                type='text'
                placeholder='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='name'
                type='text'
                placeholder='name'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor='message'>Message</Label>
              <Message
                placeholder='Enter message here...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </FormGroup>

            <SubmitButton>Send</SubmitButton>
          </Form>
        </FormOffsetContainer>
      </Container>
    </Fragment>
  );
};

export default App;
