import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export const uploapImgToFirebase: any = (file: File) => {
  let imageStorage = `coffeeshops/${file.name + v4()}`;
  const imageRef = ref(storage, imageStorage);
  uploadBytes(imageRef, file)
    .then((res) => {
      getDownloadURL(res.ref).then((url) => {
        return url;
      });
    })
    .catch((err) => {
      return null;
    });
};

export const removeSpacesAndAccents = (name: string) => {
  let spacelessname = name.replace(/\s+/g, "");
  let noAccentName = spacelessname.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  localStorage.setItem("url", noAccentName);

  return noAccentName;
};

