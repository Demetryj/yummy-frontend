import * as React from 'react';
import { useDispatch } from 'react-redux';
import { toggleUserLogo } from '../../redux/modal';
// import { FiUser } from 'react-icons/fi';
import Avatar from 'react-avatar';
import { useAuth } from 'hooks/useAuth';
import { Container } from './ImageAvatar.styled';

export const ImageAvatar = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <Container>
      {/* <FiUser size={{ xs: 34, md: 44 }} cursor="pointer" /> */}
      <Avatar
        size="100%"
        round={true}
        name={user.name}
        src={user.avatarURL}
        onClick={() => {
          dispatch(toggleUserLogo());
        }}
      />
    </Container>
  );
};
