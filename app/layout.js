import './globals.css'
import {Inter} from 'next/font/google'
import Head from "next/head";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'GLOSSY',
    description: 'Learn languages with pleasure',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <meta keywords={metadata}/>
            <meta name="viewport" content="width-device-width, , initial-scale=1"/>
            <title>Glossy</title>
        </Head>
        <body className={inter.className}>{children}</body>
        </html>
    )
}