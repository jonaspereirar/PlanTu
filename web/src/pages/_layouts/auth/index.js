import React from 'react';
import PropTypes from 'prop-types';

import {
  Wrapper,
  AnimationContainer,
  Container,
  Content,
  Background,
} from './styles';

export default function AuthLayout({ children }) {
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <Wrapper>
            <Content>{children}</Content>
            <Background />
          </Wrapper>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
