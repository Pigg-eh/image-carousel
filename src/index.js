import "./style.css";
import pullImages from "./insertImages";
import addBtnListeners from "./buttonListeners";

function importImg(r) {
  return r.keys().map(r);
}

const images = importImg(
  require.context("./media", false, /\.(png|jpe?g|svg)$/),
);

pullImages(images);
addBtnListeners();
