import styled from 'styled-components/native';
import {Container} from '../container/container.component';
import {colors} from '../../infrastructure/theme/colors';
import {Button} from '../button/button.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontWeights} from '../../infrastructure/theme/fonts';
import {Text} from '../typography/text.component';
import LinearGradient from 'react-native-linear-gradient';

export const LinearGradientBackground = styled(LinearGradient)`
  overflow: hidden;
  width: 100%;
`;
export const SectionWrapper = styled(Container)`
  height: auto;
`;
export const Wrapper = styled(Container)``;

export const StyledButton = styled(Button)``;

export const SectonTitle = styled(Text)`
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
`;
export const SubText = styled(Text)`
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
`;
