import * as React from 'react';
import { useDispatch } from 'react-redux';
import { toggleUserLogo } from '../../redux/modal';
import Avatar from 'react-avatar';
import { Container } from './ImageAvatar.styled';

export const ImageAvatar = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Avatar
        size="100%"
        round={true}
        name={user.name}
        src={user.avatrUrl || user.avatarURL}
        onClick={() => {
          dispatch(toggleUserLogo());
        }}
      />
    </Container>
  );
};
