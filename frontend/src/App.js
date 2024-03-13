import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import ChatPage from "./Pages/ChatPage.js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
