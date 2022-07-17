import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router";
import Posts from "./components/Posts/Posts";
import { Provider } from "react-redux";
import { store } from "./rtk/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/tren1" element={<MainPage />}></Route>
          <Route path="posts" element={<Posts />}></Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
