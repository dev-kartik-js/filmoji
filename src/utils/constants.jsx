export const Netflix_logo = "https://i.ibb.co/7YT9S1r/Screenshot-2025-01-06-165505-removebg-preview.png";

export const User_Icon = "https://occ-0-3241-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

export const Main_bg = "https://pic.surf/nsh";

export const Sign_bg = "https://i.ibb.co/W3y80hp/download.jpg";
export const My_pic = "https://imgur.com/a/ZgLAEUC";

export const API_options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  }
};

export const Now_Playing_Api = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`;
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const OPEN_AI_KEY =process.env.REACT_APP_GEMINI_API_KEY;
