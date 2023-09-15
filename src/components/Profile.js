import React from 'react';
import { Image, View, Text } from 'react-native';
import styled from 'styled-components/native';
import Margin from './Margin';

const Container = styled.View`
  flex-direction: row;
`;

const ProfileImage = styled.Image`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size * 0.4}px;
`;

const TextComponents = styled.View`
  justify-content: 'center';
  margin-left: 10;
`;

const NameText = styled.Text`
  font-weight: ${(props) => (props.isMe ? 'bold' : 'normal')};
  font-size: ${(props) => (props.isMe ? 15 : 15)}px;
`;

const IntroductionText = styled.Text`
  font-size: ${(props) => (props.isMe ? 12 : 11)}px;
  color: gray;
`;

const Profile = ({ name, introduction, uri, isMe }) => {
  const size = isMe ? 50 : 40;
  return (
    <Container>
      <ProfileImage source={{ uri }} size={size} />
      <TextComponents>
        <NameText isMe={isMe}>{name}</NameText>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <IntroductionText isMe={isMe}>{introduction}</IntroductionText>
          </View>
        )}
      </TextComponents>
    </Container>
  );
};

export default Profile;
