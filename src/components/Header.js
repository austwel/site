import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://linkedin.com/in/austwel" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I'm Max</strong>, a computer science<br />
                    student at the Queensland<br />
                    University of Technology<br />
                    <br />
                    Find me on <a href="https://github.com/austwel">GitHub</a>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
