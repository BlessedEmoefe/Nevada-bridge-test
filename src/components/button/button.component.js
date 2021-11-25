import React from 'react';
import {Spacer} from '../spacer/spacer.component';
import {
  ButtonContainerWrapper,
  ButtonWrapper,
  ButtonText,
} from './button.styles';

export const Button = ({
  backgroundColor,
  color,
  text,
  border,
  rightIcon,
  leftIcon,
  onPress,
  width,
  borderRadius,
}) => {
  return (
    <ButtonContainerWrapper
      onPress={onPress ? () => onPress() : null}
      width={width}
      border={border}
      borderRadius={borderRadius}>
      <ButtonWrapper
        flexDirection="row"
        backgroundColor={backgroundColor}
        onPress={() => console.log('onPress')}>
        {leftIcon ? leftIcon : null}
        {leftIcon ? <Spacer position="left" size="medium" /> : null}
        <ButtonText color={color} variant="smallTitle">
          {text}
        </ButtonText>
        {rightIcon ? <Spacer position="right" size="medium" /> : null}
        {rightIcon ? rightIcon : null}
      </ButtonWrapper>
    </ButtonContainerWrapper>
  );
};
