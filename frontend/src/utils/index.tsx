import jwtDecode from "jwt-decode";

export const removeSpacesAndAccents = (name: string) => {
  let spacelessName = name.replaceAll(" ", "");
  return spacelessName;
};

export const isTokenValid = (token: string) => {
  // Retrieving the number of seconds since january 1, 1970
  let dateNow = new Date();
  let secondsNow = dateNow.getTime() / 1000;

  // Expiration token in seconds
  const decodedToken = jwtDecode(token) as { exp: number };
  let secondsExpiration = decodedToken.exp;

  // Comparison
  if (secondsExpiration >= secondsNow) {
    console.log("token is valid");
    return true;
  }
  console.log("token is invalid");
  return false;
};
