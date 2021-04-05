import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/scss/main.scss'

function Layout({ children, location }) {
    let content: JSX.Element;

    if (location && location.pathname === '/') {
        content = (<div>{children}</div>)
    } else {
        content = (
            <div id="wrapper" className="page">
                <div>{children}</div>
            </div>
        )
    }

    return (
        <StaticQuery
            query={graphql`
                query SiteTitleQuery {
                    site {
                        siteMetadata {
                            title
                        }
                    }
                }
            `}
            render={data => (
                <>
                    <Helmet
                        title={data.site.siteMetadata.title}
                        meta={[
                            { name: 'description', content: 'Personal Website for Alexander Härenstam' },
                            { name: 'keywords', content: 'alexander, härensta, portfolio, personal, website' },
                        ]}
                    >
                        <html lang="en" />
                    </Helmet>
                    {content}
                </>
            )}
        />
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
