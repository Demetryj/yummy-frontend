export const getColor = (
  errors,
  values,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
  if (
    errors === 'password must be at least 6 characters' ||
    errors === 'Email is not valid' ||
    errors === 'Your password must have at least 1 digit character' ||
    errors === 'Your password must have at least 1 uppercase character' ||
    errors === 'name must be at least 2 characters'
  ) {
    return '#F6C23E';
  }
  return values ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};
