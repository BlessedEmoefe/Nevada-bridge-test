import React, {useState} from 'react';
import {SafeArea} from '../../components/utility/safe-area.component';
import {PageContainer, Wrapper, Image, StyledButton} from './home.styles';
import {GroupedSpacer} from '../../components/spacer/spacer.component';
import {colors} from '../../infrastructure/theme/colors';
import {BottomSheet} from 'react-native-elements';
import Nenna from '../../assets/Nenna.png';
import {Dimensions} from 'react-native';
import {BottomCard} from '../../components/BottomCard/bottomCard.component';
import {TopSection} from '../../components/TopSection/topSection.component';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenAuthScreen = () => {
    return setIsVisible(true);
  };
  const handleCloseAuthScreen = () => {
    return setIsVisible(false);
  };

  return (
    <SafeArea>
      <PageContainer justifyContent="center">
        <Wrapper paddingHorizontal height="70%">
          <Image source={Nenna} resizeMode="contain" />
        </Wrapper>
        <GroupedSpacer />
        <Wrapper paddingHorizontal>
          <StyledButton
            text="Vote"
            onPress={() => {
              handleOpenAuthScreen();
            }}
          />
        </Wrapper>
        <BottomSheet
          isVisible={isVisible}
          containerStyle={{
            backgroundColor: 'rgba(0.5, 0.5, 0.5, 0.7)',
          }}>
          <Wrapper
            height={Dimensions.get('window').height}
            justifyContent="space-between">
            <TopSection handleCloseAuthScreen={handleCloseAuthScreen} />

            <BottomCard handleCloseAuthScreen={handleCloseAuthScreen} />
          </Wrapper>
        </BottomSheet>
      </PageContainer>
    </SafeArea>
  );
};
export default Home;
