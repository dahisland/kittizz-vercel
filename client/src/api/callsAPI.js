import axios from "axios";
import { headers } from "./headersParams";
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
    let response = await axios.get(urlAPI + kittyId, headers);
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

// Post new kitty
export const postKitty = async (obj) => {
  try {
    let response = await axios.post(urlAPI, obj, headers);
    const data = response.data;
    const objData = {
      data: data.id,
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

// Update one kitty
export const updateKitty = async (obj, id) => {
  try {
    let response = await axios.put(urlAPI + id, obj, headers);
    const data = response.data;
    const objData = {
      data: data.id,
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

// Delete one kitty
export const deleteOneKitty = async (id) => {
  try {
    let response = await axios.delete(urlAPI + id, headers);
    const data = response.data;
    console.log(data.status);
    return data.status;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// Like one kitty
export const likeOneKitty = async (kittyId, ip) => {
  const bodyParams = { ip: ip };
  try {
    let response = await axios.patch(likeUrlAPI + kittyId, bodyParams, headers);
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};

// Unlike one kitty
export const unlikeOneKitty = async (kittyId, ip) => {
  const bodyParams = { ip: ip };
  try {
    let response = await axios.patch(
      unlikeUrlAPI + kittyId,
      bodyParams,
      headers
    );
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
