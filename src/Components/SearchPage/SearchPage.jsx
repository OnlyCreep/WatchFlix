import React from 'react'
import "./styles.css"
import Footer from '../MainPage/Footer/Footer'
import NavMinor from './NavMinor/NavMinor'
import Search from './Search/Search'

export default function SearchPage() {
  return (
    <main className='search_page'>
        <NavMinor />
        <Search />
        <Footer />
    </main>
  )
}
