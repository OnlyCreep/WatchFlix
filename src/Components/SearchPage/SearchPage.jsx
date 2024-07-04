import React from 'react'
import "./styles.css"
import Footer from '../MainPage/Footer/Footer'
import Search from './Search/Search'
import Navbar from '../Navbar/Navbar'

export default function SearchPage() {
    document.title = "WatchFlix - поиск"

  return (
    <main className='search_page'>
        <Navbar />
        <Search />
        <Footer />
    </main>
  )
}
