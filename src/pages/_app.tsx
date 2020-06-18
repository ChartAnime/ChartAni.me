import React, { PropsWithChildren } from 'react';
import { AppProps } from 'next/app';

export default ({ Component, pageProps }: PropsWithChildren<AppProps>) => {
    return (
        <>
            <style jsx global>{`
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                    sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}
