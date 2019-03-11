/* eslint-disable consistent-return */

import Head from 'next/head';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import theme from '../styles/theme';

const Main = styled.main`
    @media (max-width: ${theme.breakpointMobileMenu}) {
        padding-top: 7rem;
    }
`;

const description = descriptionInput => {
    if (descriptionInput) {
        return <meta name="description" content={descriptionInput} />;
    }
};

const keywords = keywordsInput => {
    if (keywordsInput) {
        return <meta name="keywords" content={keywordsInput} />;
    }
};

const Layout = ({ children, pageSettings }) => (
    <div>
        <Head>
            <title>{pageSettings.title}</title>
            {description(pageSettings.description)}
            {keywords(pageSettings.keywords)}
        </Head>
        <Navbar />
        <Main className="main">{children}</Main>
        <Footer />
    </div>
);
export default Layout;
