import React from "react";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Header from "./Components/Header/Header";
import routes from "./routes";
import "./App.css";

export default function App() {
  const router = useRoutes(routes);
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Header />
        {router}
      </div>
    </div>
  );
}
