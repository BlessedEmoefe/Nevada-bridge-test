import styled from 'styled-components/native';
import {
  Container,
  FlatListContainer,
} from '../../components/container/container.component';
import {colors} from '../../infrastructure/theme/colors';
import {Button} from '../../components/button/button.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontWeights} from '../../infrastructure/theme/fonts';
import {Text} from '../../components/typography/text.component';

export const PageContainer = styled(Container)`
  flex: 1;
  background: ${colors.bg.dark};
`;
export const Wrapper = styled(Container)``;

export const Image = styled.Image`
  height: 100%;
`;

export const StyledButton = styled(Button)``;
