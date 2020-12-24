import React from 'react'
import NextHead from 'next/head'
import PropTypes from 'prop-types'

const defaultDescription =
    'Find the closest mental health resources in your Area. The Sylar Project provides you with a database of mental health programms accross the US and more'
const defaultOGURL = ''
const defaultOGImage =
    'https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80'

const Head = ({ title, description, url, ogImage }) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{title || 'The Sylar Project'}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
        <link rel="apple-touch-icon" href="/static/touch-icon.png" />
        <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
        <link rel="icon" href="/static/favicon.ico" />
        <meta property="og:url" content={url || defaultOGURL} />
        <meta property="og:title" content={title || 'The Sylar Project'} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta name="twitter:site" content={url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImage || defaultOGImage} />
        <meta property="og:image" content={ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
    </NextHead>
)

Head.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
    ogImage: PropTypes.string,
}

Head.defaultProps = {
    title: '',
    description: '',
    url: '',
    ogImage: '',
}

export default Head
