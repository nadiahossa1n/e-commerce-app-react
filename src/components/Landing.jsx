import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom'
import { HashLink, NavHashLink } from 'react-router-hash-link'

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
            <div className="header__description">
                <h1>America's most awarded online library platform</h1>
                <h2>Find your dream book with <span className="purple">Library</span></h2>
                <NavHashLink to="#features">
                    <button className="btn">Browse books</button>
                </NavHashLink>
            </div>
            <figure className="header__img--wrapper">
                <img src={UndrawBooks} alt="" />
            </figure>
        </div>
      </header>
    </section>
  )
}

export default Landing

