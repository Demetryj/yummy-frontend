export const getPoster = (image, plug) => {
  if (!image) {
    return `${plug}`;
  } else {
    return `${image}`;
  }
};
