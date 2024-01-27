import MainPage from "./pages/MainPage/MainPage";
import Playbar from "./components/Playbar/Playbar";
import Playlist from "./components/Playlist/Playlist";
import style from "./global.module.scss";

const App = () => (
  <div className={style.wrapper}>
    <MainPage />
    <Playlist/>
    <Playbar />
  </div>
);

export default App;