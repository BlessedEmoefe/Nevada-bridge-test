import React, {useState} from 'react';
import {SafeArea} from '../utility/safe-area.component';
import {
  LinearGradientBackground,
  SectionWrapper,
  Wrapper,
  StyledButton,
  SectonTitle,
  SubText,
} from './bottomCard.styles';
import {GroupedSpacer, Spacer} from '../spacer/spacer.component';
import {colors} from '../../infrastructure/theme/colors';
import {Counter} from '../counter/counter.component';

export const BottomCard = ({handleCloseAuthScreen}) => {
  return (
    <LinearGradientBackground
      colors={[colors.bg.dark, colors.secondary, colors.bg.dark]}
      start={{x: 2, y: 0}}
      end={{x: -0.5, y: 1.2}}>
      <SectionWrapper
        paddingVertical={50}
        paddingHorizontal
        alignItems="flex-start">
        <Wrapper alignItems="flex-start" width="80%">
          <SectonTitle variant="h5">Choose Amount</SectonTitle>
          <SubText variant="smallBody">
            Select amount to choose the number of votes you would like to cast
            for Nnenna
          </SubText>
        </Wrapper>
        <GroupedSpacer size="large" position="top" />
        <Counter />
        <GroupedSpacer size="large" position="top" />
        <StyledButton
          text="Submit"
          onPress={() => {
            handleCloseAuthScreen();
          }}
        />
      </SectionWrapper>
    </LinearGradientBackground>
  );
};
