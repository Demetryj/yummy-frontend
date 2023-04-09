export const getColor = (
  errors,
  values,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
  if (
    errors === 'password must be at least 6 characters' ||
    errors === 'email must be a valid email'
  ) {
    return '#F6C23E';
  }
  return values ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};
