import trae from "trae";
import configSettings from "./config";

const platziMusic = trae.create({
  baseUrl: configSettings.apiUrl
});

export default platziMusic;
