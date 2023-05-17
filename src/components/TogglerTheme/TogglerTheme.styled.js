import styled from 'styled-components';

export const Switcher = styled.div`
  position: ${p => (p.device === 'mobile' ? 'absolute' : 'relative')};
  left: ${p => (p.device === 'mobile' ? '16px' : '0')};
  bottom: ${p => (p.device === 'mobile' ? '18px' : '0')};

  display: ${p => {
    if (p.device === 'desktop') {
      return 'none';
    } else if (p.device === 'mobile') {
      return 'flex';
    }
  }};

  align-items: center;
  justify-content: center;
  align-self: center;

  @media screen and (${p => p.theme.media.medium}) {
    left: ${p => (p.device === 'mobile' ? '32px' : '0')};
    bottom: ${p => (p.device === 'mobile' ? '32px' : '0')};
  }

  @media screen and (${p => p.theme.media.large}) {
    display: ${p => (p.device === 'desktop' ? 'flex' : 'none')};
    margin-left: ${p => p.theme.spacing(25)};
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  left: 0;
  top: 0;

  opacity: 0;

  &:checked + label > span {
    transform: translateX(${p => p.theme.spacing(15)});
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(0)} ${p => p.theme.spacing(2.5)};
  gap: ${p => p.theme.spacing(5)};
  width: ${p => p.theme.spacing(30.5)};
  height: ${p => p.theme.spacing(14)};

  background-color: ${p =>
    p.mode === 'dark' ? p.theme.colors.greenBgColor : p.theme.colors.bgMain};
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.radii.switch};

  cursor: pointer;
`;

export const Ball = styled.span`
  position: absolute;
  width: ${p => p.theme.spacing(10.5)};
  height: ${p => p.theme.spacing(10.5)};

  background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
  border-radius: ${p => p.theme.radii.switch};
  filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
