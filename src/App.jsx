import MainPage from "./pages/MainPage/MainPage";
import Playlist from "./components/Playlist/Playlist";
import style from "./global.module.scss";
import Header from "./components/header/headet";
import PurpleTheme from "./components/PurpleTheme/PurpleTheme";
import Header1 from "./components/PurpleTheme/header1/headet1";
import { Link } from "react-router-dom";

const App = () => (
  <div>
    <Header/>
    <div className={style.wrapper}>
      <MainPage/>
      
    </div>
    <div className={style.navigateR}>
      <Link to="/purple">Purple Theme</Link>
    </div>
  </div>
);

export default App;