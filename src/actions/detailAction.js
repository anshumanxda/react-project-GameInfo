import axios from "axios";
import { gameDetailsUrl, gameScreenshot } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsUrl(id));
  const screenshotData = await axios.get(gameScreenshot(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
