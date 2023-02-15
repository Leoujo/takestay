export const removeSpacesAndAccents = (name: string) => {
  let spacelessName = name.replace(/\s+/g, "");
  let noAccentName = spacelessName.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  console.log(noAccentName);
  return noAccentName;
};
