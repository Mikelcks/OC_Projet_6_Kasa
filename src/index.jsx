import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import Home from './pages/Home'
import About from './pages/About'
import Housing from './pages/Housing'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import GlobalStyle from './utils/style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/item/:id" element={<Housing />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)