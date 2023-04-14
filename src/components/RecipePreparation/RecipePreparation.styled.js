import styled from 'styled-components';

export const ImageBlock = styled.div`
  & img {
    border-radius: ${p => p.theme.radii.normal};
    width: 100%;
    height: ${p => p.theme.spacing(125)};
    object-fit: cover;

    @media screen and (min-width: 768px) {
      height: ${p => p.theme.spacing(166)};
      width: ${p => p.theme.spacing(217)};
    }

    @media screen and (min-width: 1440px) {
      width: ${p => p.theme.spacing(217)};
    }
  }
`;

export const Container = styled.div`
  /* padding-top: ${p => p.theme.spacing(16)}; */
  padding-bottom: ${p => p.theme.spacing(50)};
  /* padding-left: ${p => p.theme.spacing(8)};
  padding-right: ${p => p.theme.spacing(8)}; */
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-bottom: ${p => p.theme.spacing(100)};
    /* padding-left: ${p => p.theme.spacing(16)};
    padding-right: ${p => p.theme.spacing(16)}; */
    padding-top: ${p => p.theme.spacing(25)};
  }
  @media screen and (min-width: 1440px) {
    /* padding-left: ${p => p.theme.spacing(50)};
    padding-right: ${p => p.theme.spacing(50)}; */

    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  } ;
`;
export const InstructionWrapper = styled.div`
  margin-bottom: ${p => p.theme.spacing(20)};

  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(22)};
  }

  @media screen and (min-width: 1440px) {
    width: ${p => p.theme.spacing(284)};
    margin-bottom: 0;
  }
`;

export const InstructionTitle = styled.title`
  display: block;
  margin-bottom: ${p => p.theme.spacing(15)};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.subtitleTextColor};
  @media screen and (min-width: 768px) {
    margin-bottom: ${p => p.theme.spacing(16)};
    letter-spacing: -0.24px;
  }
`;

export const InstructionList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 1.17;
  letter-spacing: -0.02em;
  gap: 14px;

  @media screen and (min-width: 768px) {
    gap: ${p => p.theme.spacing(9)};
    font-size: ${p => p.theme.fontSizes.s};
    line-height: 1.29;
  }
`;

export const InstructionText = styled.li`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  align-items: flex-start;
  gap: ${p => p.theme.spacing(7)};

  & span {
    display: flex;
    justify-content: center;
    gap: ${p => p.theme.spacing(5)};
    width: ${p => p.theme.spacing(10)};
    height: ${p => p.theme.spacing(10)};
    padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(4)}
      ${p => p.theme.spacing(1)};
    font-weight: ${p => p.theme.fontWeights.semiBold};
    font-size: ${p => p.theme.fontSizes.xs};
    line-height: 1.5;
    color: #ffffff;
    background: #8baa36;
    border-radius: ${p => p.theme.radii.round};
    flex: none;

    @media screen and (min-width: 768px) {
      padding: 0 ${p => p.theme.spacing(4)} ${p => p.theme.spacing(1)};
      font-size: ${p => p.theme.fontSizes.s};
      line-height: 1.5;
    }
  }

  & p {
    padding-top: ${p => p.theme.spacing(1)};
    color: ${p => p.theme.colors.blackTextColor};
    width: ${p => p.theme.spacing(155)};
    @media screen and (min-width: 768px) {
      width: ${p => p.theme.spacing(330)};
    }

    @media screen and (min-width: 1440px) {
      width: ${p => p.theme.spacing(217)};
    }
  }
`;
