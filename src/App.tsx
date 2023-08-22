import {Route, Routes} from 'react-router-dom'
import {AboutPage} from './pages/AboutPage'
import {CoursesPage} from "./pages/CoursesPage";
import React from "react";
import {Header} from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <CoursesPage /> } />
        <Route path="/about" element={ <AboutPage /> } />
      </Routes>
    </>
  )
}

export default App;
