import React from 'react'
import PropTypes from 'prop-types'

const state = {
    currentYear: new Date().getFullYear().toString(),
}

const Footer = (props: any) => (
    <footer id="footer">
        <p className="copyright">
            &copy; Alexander Härenstam, {state.currentYear}
        </p>
        <p style={{ fontSize: '1px', opacity: 0 }}>
            Original design by:{' '}
            <a href="https://html5up.net" target="_blank">
                HTML5 UP
            </a>
            . Hosted by:{' '}
            <a href="http://000webhost.com" target="_blank">
                {' '}
                /* Remove webhost enforced logo (in case we host it there) */
                000webhost
            </a>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool,
}

export default Footer
