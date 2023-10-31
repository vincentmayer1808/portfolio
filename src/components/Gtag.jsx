'use client'
import Head from 'next/head'
import Script from 'next/script'

const Gtag = () => {
    return (
        <>

            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GTAG}`} />

            <Script id="google-analytics">
                {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());

            gtag('config', ${process.env.GTAG});
            `}
            </Script>
       </>
    )
}

export default Gtag