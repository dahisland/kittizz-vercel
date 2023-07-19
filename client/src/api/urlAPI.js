const baseApiURL = "https://kittizz.vercel.app";

const kittyEnpoint = "/post/";
const kittyLikeEnpoint = kittyEnpoint + "like/";
const kittyUnlikeEnpoint = kittyEnpoint + "unlike/";
const kittyDonateEnpoint = kittyEnpoint + "gift/";

export const urlAPI = baseApiURL + kittyEnpoint;
export const likeUrlAPI = baseApiURL + kittyLikeEnpoint;
export const unlikeUrlAPI = baseApiURL + kittyUnlikeEnpoint;
export const donateUrlAPI = baseApiURL + kittyDonateEnpoint;
