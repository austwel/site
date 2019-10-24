import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://twitter.com/austweldev" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
                        <li><a href="https://github.com/austwel" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="https://linkedin.com/in/austwel" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="mailto:max@austwel.xyz" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
