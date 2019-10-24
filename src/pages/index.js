import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import resume from '../assets/Resume.pdf'

const DEFAULT_IMAGES = [
    { id: '1', href: 'https://github.com/austwel/KzarkaBot', thumbnail: thumb01, caption: 'KzarkaBot', description: 'Discord Bot made in Java'},
    { id: '2', href: 'https://github.com/austwel/site', thumbnail: thumb02, caption: 'Personal Website', description: 'React website made with Gatsby'},
    { id: '3', href: '/404', thumbnail: thumb03, caption: 'Coming Soon...', description: 'Exciting projects are on their way.'},
    { id: '4', href: '/404', thumbnail: thumb04, caption: 'Coming Soon...', description: 'Exciting projects are on their way.'}
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Max Schulze"
        const siteDescription = "Max Schulze Software Developer"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Max Schulze, Software Developer</h2>
                        </header>
                        <ul className="actions">
                            <li><a href={resume} type="application/pdf" className="button">View Resume</a></li>
                        </ul>
                    </section>
                    <section id="two">
                        <a name="projects"></a>
                        <h2>Projects</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, href, source, thumbnail, caption, description }) => ({
                            href,
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        <ul className="actions">
                            <li><a href="#projects" className="button">All Projects</a></li>
                        </ul>
                    </section> 

                    <section id="three">
                        <h2>Contact Me</h2>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Middle Park, QLD 4074<br />
                                        Australia
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        (+61) 450 732 987
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">max@austwel.xyz</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex