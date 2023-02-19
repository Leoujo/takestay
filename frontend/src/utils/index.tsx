export const removeSpacesAndAccents = (name: string) => {
  let spacelessName = name.replaceAll(" ", "");
  return spacelessName;
};
