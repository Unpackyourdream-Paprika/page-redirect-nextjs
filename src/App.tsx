import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.location.href = "https://www.nanobananas.store/";
  }, []);

  return null; // 화면은 비워둬도 됨
}

export default App;
