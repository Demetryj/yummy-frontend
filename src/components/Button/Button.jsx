import { StyledButton } from './Button.styled';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {Icon && <Icon size="16" />}
      {children}
    </StyledButton>
  );
};
