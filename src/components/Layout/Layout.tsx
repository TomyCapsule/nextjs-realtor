import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = ({children} : {children : React.ReactElement}) => {
    return (
        <>
            <Head>
                <title>Nextjs Realtor</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box maxWidth="1280px" m="auto">
                <header>
                    <Navbar/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer/>
                </footer>
            </Box>
        </>
    )
}

export default Layout;