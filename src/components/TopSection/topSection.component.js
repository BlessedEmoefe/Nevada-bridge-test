import React from 'react';
import {
  SectionWrapper,
  Wrapper,
  CloseIcon,
  ProfileImageWrapper,
  ProfileImage,
  BannerTitle,
  BannerSubTitle,
} from './topSection.styles';
import {GroupedSpacer} from '../../components/spacer/spacer.component';
import Profile from '../../assets/profileImage.jpg';

export const TopSection = ({handleCloseAuthScreen}) => {
  return (
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
  );
};
