import styled from 'styled-components/native';
import {
  Container,
  FlatListContainer,
} from '../../components/container/container.component';
import {colors} from '../../infrastructure/theme/colors';
import {Button} from '../../components/button/button.component';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontWeights} from '../../infrastructure/theme/fonts';
import { Text } from '../../components/typography/text.component';


import LinearGradient from 'react-native-linear-gradient';

export const PageContainer = styled(Container)`
  flex: 1;
  background: ${colors.bg.dark};
`;
export const Wrapper = styled(Container)``;
export const LinearGradientBackground = styled(LinearGradient)`
  overflow: hidden;
 width:100%;
`;
export const SectionWrapper = styled(Container)`
height:auto;
`;
export const Image = styled.Image`
  height: 100%;
`;

export const StyledButton = styled(Button)``;

export const CloseIcon = styled(Icon)`
  color: ${colors.white};
`;


export const ProfileImageWrapper = styled(Container)`
  border-radius:50px;
  overflow: hidden;
  border:0;
  box-sizing:border-box;
`;
export const ProfileImage = styled.Image`
  height: 50;
  width: 50;
`;

export const BannerTitle = styled(Text)`
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
`;
export const BannerSubTitle = styled(Text)`
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
`;

export const SectonTitle = styled(Text)`
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
`;
export const SubText = styled(Text)`
  font-weight: ${fontWeights.bold};
  color: ${colors.white};
`;