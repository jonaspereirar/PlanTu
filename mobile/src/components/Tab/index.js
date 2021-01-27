import React, { useRef } from 'react';
import { Transition } from 'react-native-reanimated';

import { Container, Icon, Label, Background } from './styles';

import Images from '~/assets/tabIcons';

function Tab({ label, accessibilityState, onPress }) {
  const focused = accessibilityState.selected;
  const icon = !focused ? Images.icons[label] : Images.icons[`${label}Focused`];

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={1000} />
      <Transition.Change interpolation="easeInOut" durationMs={1000} />
      <Transition.In type="fade" durationMs={1000} />
    </Transition.Sequence>
  );

  const ref = useRef();

  return (
    <Container
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}
    >
      <Background
        focused={focused}
        label={label}
        ref={ref}
        transition={transition}
      >
        <Icon source={icon} />
        {focused && (
          <Label label={label}>
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Label>
        )}
      </Background>
    </Container>
  );
}

export default Tab;
