import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { signInRequest } from '~/store/modules/auth/actions';

import {
  Container,
  ContainerLogo,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const loading = useSelector((state) => state.auth.loading);
  const passwordRef = useRef();
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <ContainerLogo>
        <Image source={logo} />
      </ContainerLogo>
      <Container>
        <Form>
          <FormInput
            icon="mail-outline"
            keyBoardType="email-address"
            autoCorrect={false}
            autCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Digite sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Acessar
          </SubmitButton>
        </Form>
        <SignLink onPress={() => navigation.replace('SignUp')}>
          <SignLinkText> Criar conta gratuita</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({ replace: PropTypes.func }).isRequired,
};
