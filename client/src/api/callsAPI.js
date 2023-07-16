import axios from "axios";
import { urlAPI } from "./urlAPI";

export const getKitties = async () => {
  try {
    let response = await axios.get(urlAPI, {
      withCredentials: false,
    });
    const data = response.data;
    const objData = {
      data: data.data,
      message: data.message,
    };
    console.log(data.message);
    return objData;
  } catch (err) {
    const objData = {
      data: null,
      message: "An error has occured. Please try later",
    };
    console.log(err);
    return objData;
  }
};
