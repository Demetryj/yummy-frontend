import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';

export const EditButton = styled.button`
  background: transparent;
  margin-right: auto;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #23262a;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 125px;
  height: 43px;

  @media screen and ${p => p.theme.media.medium} {
    width: 139px;
    height: 43px;
  }

  @media screen and ${p => p.theme.media.large} {
    width: 138px;
    height: 43px;
  }
`;

export const LogoutButton = styled.button`
  /* position: relative; */
  /* display: inline-flex;
  align-items: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #8baa36;

  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  gap: 4px;

  color: #fafafa;
  border-radius: 6px;
  /* clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); */
  /* padding: 50px 42px; */
  /* border: none; */

  /* clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 50px 42px;
  border: none; */

  /* top: 30;
  left: 0; */
`;

export const Arrow = styled(AiOutlineArrowRight)`
  /* position: absolute; */
  /* top: 52px;
  right: 20px; */
  color: white;
`;
