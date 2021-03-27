import PropTypes from 'prop-types'
import React from 'react'

type Prop = {
    timeout: boolean
    onOpenArticle: (param: string) => void
}

const Header = (props: Prop) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Alexander Härenstam</h1>
                <h4>Software Developer, Creative Thinker, Innovation Driver</h4>
                <h5>
                    <i>Graduate of Chalmers University of Technology</i>
                </h5>
            </div>
        </div>
        <nav>
            <ul>
                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('intro')
                        }}
                    >
                        Intro
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('work')
                        }}
                    >
                        Work
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('about')
                        }}
                    >
                        About
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            props.onOpenArticle('contact')
                        }}
                    >
                        Contact
                    </button>
                </li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool,
}

export default Header
