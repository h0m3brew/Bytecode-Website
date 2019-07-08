import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import theme from '../styles/theme';
import { GlobalStyles } from '../styles/global-css';

const Main = styled.main`
    @media (max-width: ${theme.breakpointMobileMenu}) {
        padding-top: 7rem;
    }
`;

const Head = () => (
    <Helmet>
        <meta name="robots" content="index, follow" />
        <link type="text/plain" rel="author" href="/humans.txt" />
        <link rel="stylesheet" href="https://use.typekit.net/kcu2skl.css" />
        <link
            href="https://fonts.googleapis.com/css?family=Cousine"
            rel="stylesheet"
        />
        <style data-info="bytecode-global-styling">{GlobalStyles}</style>
    </Helmet>
);

const Layout = ({ children, pageSettings }) => {
    const { title, description, keywords } = pageSettings;
    return (
        <div>
            <Head />
            <SEO title={title} description={description} keywords={keywords} />
            <Navbar />
            <Main className="main">{children}</Main>
            <Footer />
        </div>
    );
};
export default Layout;