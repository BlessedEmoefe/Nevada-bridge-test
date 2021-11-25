import React, {useState} from 'react';
import {colors} from '../../infrastructure/theme/colors';
import {
  CounterComponent,
  Wrapper,
  MinusWrapper,
  Minus,
  CounterWrapper,
  CounterText,
  PlusWrapper,
  Plus,
} from './counter.styles';
import {GroupedSpacer} from '../spacer/spacer.component';
import {Button} from '../button/button.component';

export const Counter = ({counterMinValue = 1}) => {
  const [count, setCount] = useState(counterMinValue);
  const [buttonClicked, setButtonClicked] = useState(1);
  const DecreaseCount = counterMinValue => {
    count > counterMinValue ? setCount(count - 1) : null;
  };
  const IncreaseButtonCount = button => {
    return count <= 3 ? setCount(button) : null;
  };
  const IncreaseCount = () => {
    return count < 3 ? setCount(count + 1) : null;
  };
  return (
    <CounterComponent>
      <Wrapper flexDirection="row">
        <MinusWrapper
          width="25%"
          onTouchStart={() => DecreaseCount(counterMinValue)}>
          <Minus name="minus" size={25} />
        </MinusWrapper>
        <CounterWrapper width="50%">
          <CounterText variant="h2">
            {count == 1 ? 100 : count == 2 ? 333 : count == 3 ? 1000 : count}
          </CounterText>
          <CounterText variant="smallBody">VOTES</CounterText>
        </CounterWrapper>
        <PlusWrapper width="25%" onTouchStart={() => IncreaseCount()}>
          <Plus name="plus" size={25} />
        </PlusWrapper>
      </Wrapper>
      <GroupedSpacer />
      <Wrapper flexDirection="row" justifyContent="space-between">
        <Button
          text="₦750"
          width="30%"
          backgroundColor={count == 1 ? '#fff' : 'transparent'}
          color={count == 1 ? colors.bg.dark : '#fff'}
          border={count == 1 ? false : true}
          onPress={() => IncreaseButtonCount(1)}
        />

        <Button
          text="₦2,500"
          width="30%"
          backgroundColor={count == 2 ? '#fff' : 'transparent'}
          color={count == 2 ? colors.bg.dark : '#fff'}
          border={count == 2 ? false : true}
          onPress={() => IncreaseButtonCount(2)}
        />

        <Button
          text="₦ 7,500"
          width="30%"
          backgroundColor={count == 3 ? '#fff' : 'transparent'}
          color={count == 3 ? colors.bg.dark : '#fff'}
          border={count == 3 ? false : true}
          onPress={() => IncreaseButtonCount(3)}
        />
      </Wrapper>
    </CounterComponent>
  );
};
