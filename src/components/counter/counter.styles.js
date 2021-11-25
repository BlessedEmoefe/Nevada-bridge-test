import styled from 'styled-components/native';
import {colors} from '../../infrastructure/theme/colors';
import {fontWeights} from '../../infrastructure/theme/fonts';
import {Container} from '../container/container.component';
import {Text} from '../typography/text.component';
import IconForPlus from 'react-native-vector-icons/FontAwesome';
import IconForMinus from 'react-native-vector-icons/FontAwesome';

export const CounterComponent = styled(Container)``;
export const Wrapper = styled(Container)``;

export const MinusWrapper = styled(Container)``;
export const Minus = styled(IconForMinus)`
  color: ${colors.white};
`;

export const CounterWrapper = styled(Container)``;

export const CounterText = styled(Text)`
  color: ${colors.white};
  font-weight: ${fontWeights.bold};
`;
export const PlusWrapper = styled(Container)``;

export const Plus = styled(IconForPlus)`
  color: ${colors.white};
`;
