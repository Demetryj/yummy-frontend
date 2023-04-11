import styled from 'styled-components';
import plateMob from 'images/mainPage/vegetable-plate-mob.png';

export const ContainerHero = styled.div`
background-image: url(${plateMob});
background-repeat: no-repeat;`

export const Container = styled.div``

export const ContainerP = styled.div`
@media (min-width: 768px) and (max-width: 1439px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
}`

export const TextMain = styled.h1`
font-weight: 400;
font-size: 60px;
line-height: 60px;
text-align: center;
letter-spacing: -0.005em;

color: #001833;`

export const TextSub = styled.p`
padding-left: 47px;
padding-right: 47px;
text-align: center;

font-weight: 400;
font-size: 14px;
line-height: 18px;
text-align: center;
letter-spacing: -0.02em;

color: #23262A;`