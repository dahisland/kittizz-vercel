import axios from "axios";
import { likeUrlAPI, unlikeUrlAPI, urlAPI } from "./urlAPI";

// Get all kitties data
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
      message: err,
    };
    console.log(err);
    return objData;
  }
};

//Get one kitty data
export const getOneKitty = async (kittyId) => {
  try {
    let response = await axios.get(urlAPI + kittyId, {
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

// Like a kitty
export const likeOneKitty = async (kittyId, ip) => {
  try {
    let response = await axios.patch(
      likeUrlAPI + kittyId,
      {
        ip: ip,
      },
      {
        withCredentials: false,
      }
    );
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Unlike a kitty
export const unlikeOneKitty = async (kittyId, ip) => {
  try {
    let response = await axios.patch(
      unlikeUrlAPI + kittyId,
      {
        ip: ip,
      },
      {
        withCredentials: false,
      }
    );
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
