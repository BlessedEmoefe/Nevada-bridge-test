import styled from 'styled-components/native';
import {
  Container
} from '../../components/container/container.component';
import {colors} from '../../infrastructure/theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontWeights} from '../../infrastructure/theme/fonts';
import {Text} from '../../components/typography/text.component';

export const Wrapper = styled(Container)``;
export const SectionWrapper = styled(Container)`
  height: auto;
`;

export const CloseIcon = styled(Icon)`
  color: ${colors.white};
`;

export const ProfileImageWrapper = styled(Container)`
  border-radius: 50px;
  overflow: hidden;
  border: 0;
  box-sizing: border-box;
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
