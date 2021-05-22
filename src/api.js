require("dotenv").config();

//base url

const base_url = "https://api.rawg.io/api/";
const api_key = process.env.REACT_APP_API_KEY;
//Get the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else return month;
};

//Get Current day
const getCurrentDate = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else return day;
};

//current year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDate();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games

const popular_games = `games?dates=${lastYear},${currentYear}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () =>
  `${base_url}${popular_games}&key=${api_key}`;
export const upcomingGames = () =>
  `${base_url}${upcoming_games}&key=${api_key}`;
export const newGames = () => {
  return `${base_url}${new_games}&key=${api_key}`;
};

//Game details
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${api_key}`;

//Games Screenshots

export const gameScreenshot = (game_id) =>
  `${base_url}games/${game_id}/screnshots?key=${api_key}`;
console.log(gameDetailsUrl());
console.log(popularGamesUrl());
