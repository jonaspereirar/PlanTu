import React, { useRef, useState } from 'react';
import { Image, View, ScrollView, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import { signUpRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  BackToSignIn,
  BackToSignInText,
} from './styles';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
    Alert.alert('Cadastro Efetuado', 'Seu Cadastro foi efetuado com sucesso!', [
      {
        text: 'OK',
        onPress: () => navigation.replace('SignIn'),
        style: 'destructive',
      },
    ]);
  }
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flex: 1 }}
    >
      <Background>
        <Container>
          <Image source={logo} />

          <View>
            <Title>Faça seu Registo</Title>
          </View>

          <Form onSubmit={handleSubmit}>
            <FormInput
              icon="person"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              returnKeyType="next"
              onSubmitEditing={() => numberRef.current.focus()}
              value={name}
              onChangeText={setName}
            />

            <FormInput
              icon="mail"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
              ref={emailRef}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              icon="lock"
              secureTextEntry
              autoCapitalize="none"
              placeholder="Digite sua senha"
              ref={passwordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={password}
              onChangeText={setPassword}
            />
            <SubmitButton loading={loading} onPress={handleSubmit}>
              Criar conta
            </SubmitButton>
          </Form>

          <BackToSignIn onPress={() => navigation.replace('SignIn')}>
            <Icon name="arrow-back" size={20} color="#f4ede8" />
            <BackToSignInText>Voltar para login</BackToSignInText>
          </BackToSignIn>
        </Container>
      </Background>
    </ScrollView>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.shape({ replace: PropTypes.func }).isRequired,
};

export default SignUp;
