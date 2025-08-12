import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Header_old from "./Elements/Header_old";
// import TrianglePage from "./Elements/TrianglePage";
// import MainContainer from "./Pages/MainContainer";
import MainPage from "./Pages/MainPage";
import './i18n/i18n'; // Инициализируем i18next
import PortfolioPage from "./Pages/PortfolioPage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <MainPage/>
      {/*<Header_old/>*/}
      {/*<TrianglePage/>*/}
      {/*<MainContainer/>*/}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
