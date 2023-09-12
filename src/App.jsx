import { useEffect, useState } from "react";
import Global from "./components/styles/global.js";
import Characters from "./components/Characters";
import Buttons from "./components/Buttons/index.jsx";
import api from "../src/services/api";
import "./App.css";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [limitPages, setLimitPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  useEffect(() => {
    api
      .get("character", {
        params: {
          page: currentPage,
        },
      })
      .then((response) => {
        setCharacterList(response.data.results);
        setLimitPages(response.data.info.pages);
      });
  }, [currentPage]);
  return (
    <div className="App">
      <Global></Global>
      <Characters characterList={characterList} />
      <Buttons limitPages={limitPages} currentPage={currentPage} setCurrentPage={setCurrentPage}></Buttons>
    </div>
  );
}

export default App;
