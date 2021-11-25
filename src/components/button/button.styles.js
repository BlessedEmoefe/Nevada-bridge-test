import styled from 'styled-components/native';
import {Text} from '../typography/text.component';
import {fonts, fontWeights, fontSizes} from '../../infrastructure/theme/fonts';
import {Container} from '../container/container.component';
import {colors} from '../../infrastructure/theme/colors';

export const ButtonContainerWrapper = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '12px')};
  overflow: hidden;
  border:${({border})=>border?`1px solid #fff`:0}
`;
export const ButtonWrapper = styled(Container)`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 60px;
  background: ${({backgroundColor}) =>
    backgroundColor ? backgroundColor : colors.primary};
`;

export const ButtonText = styled(Text)`
  font-weight: ${fontWeights.bold};
  color: ${props => (props.color ? props.color : colors.white)};
`;
