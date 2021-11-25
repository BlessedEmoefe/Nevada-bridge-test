import React, {useState} from 'react';
import {SafeArea} from '../../components/utility/safe-area.component';
import {
  PageContainer,
  ContentContainer,
  SectionWrapper,
  LinearGradientBackground,
  Wrapper,
  Image,
  StyledButton,
  CloseIcon,
  ProfileImageWrapper,
  ProfileImage,
  BannerTitle,
  BannerSubTitle,
  SectonTitle,
  SubText,
} from './home.styles';
import {GroupedSpacer, Spacer} from '../../components/spacer/spacer.component';
import {colors} from '../../infrastructure/theme/colors';
import {BottomSheet} from 'react-native-elements';
import Nenna from '../../assets/Nenna.png';
import Profile from '../../assets/profileImage.jpg';
import {Counter} from '../../components/counter/counter.component';
import {Dimensions} from 'react-native';

const Home = ({navigation}) => {
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
          }}
          // onTouchStart={handleCloseAuthScreen}
        >
          <Wrapper
            height={Dimensions.get('window').height}
            justifyContent="space-between">
            <SectionWrapper paddingVertical={15} paddingHorizontal>
              <Wrapper justifyContent="center" alignItems="flex-start">
                <CloseIcon
                  name="window-close"
                  size={30}
                  color="white"
                  onPress={() => {
                    handleCloseAuthScreen();
                  }}
                />
              </Wrapper>
              <GroupedSpacer size="large" position="top" />
              <Wrapper
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-start">
                <ProfileImageWrapper
                  width="auto"
                  alignItems="center"
                  justifyContent="center">
                  <ProfileImage source={Profile} resizeMode="contain" />
                </ProfileImageWrapper>
                <Wrapper width={'80%'} alignItems="flex-start">
                  <BannerTitle variant="smallTitle">
                    You can keep Nnenna in the house?
                  </BannerTitle>
                  <BannerSubTitle variant="smallBody">
                    Vote the much you can to keep in the house
                  </BannerSubTitle>
                </Wrapper>
              </Wrapper>
            </SectionWrapper>

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
                    Select amount to choose the number of votes you would like
                    to cast for Nnenna
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
          </Wrapper>
        </BottomSheet>
      </PageContainer>
    </SafeArea>
  );
};
export default Home;
