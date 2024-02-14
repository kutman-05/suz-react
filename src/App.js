import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header";
import MainRoutes from "./MainRoutes";
// import Hero from "./components/Hero/hero";

function App() {
  const [fuson, SetFuson] = useState(false);

  return (
    <div
      style={{
        background: fuson
          ? "url(https://st2.depositphotos.com/2627021/8523/i/450/depositphotos_85236464-stock-photo-romantic-moon-in-starry-night.jpg) no-repeat center/cover"
          : "url(https://woodstoneseniorliving.com/wp-content/uploads/2021/07/sun-blog.png) no-repeat center/cover",
      }}
      className="App"
    >
      <Header fuson={fuson} SetFuson={SetFuson} />

      <MainRoutes />
    </div>
  );
}

export default App;
