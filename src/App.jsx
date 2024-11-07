import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header"
import ArticleList from './components/ArticleList'

import SingleArticle from './components/SingleArticle';

function App() {

  return (
    <div id="header">
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />

      </Routes>
    </div>
  );
};

export default App
