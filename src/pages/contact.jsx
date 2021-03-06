import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout';
import ContactForm from '../containers/ContactForm/ContactForm';
import { Container, Row, Col } from '../lib/Grid';
import Button from '../components/Button';
import Header from '../containers/Header';

const pageSettings = {
    title: `Contact - Bytecode Digital Agency B.V.
    | Eerste stap tot digitaal succes!`,
    description: `Contact, neem contact met ons op door een belletje of door
    een mailtje te sturen. Langskomen mag altijd,
    Bytecode staat voor je klaar!`,
    keywords: 'contact',
};

const ContactHeading = styled.h4`
    margin: 3em 0 2em;
    line-height: 1.4em;
`;

const Contact = () => (
    <Layout pageSettings={pageSettings}>
        <Header
            img={require('../images/img/header/telefoon.jpg')}
            subtitle="Contact"
            title="Langskomen? Gezellig!"
            text="Geef ons een belletje of stuur een mailtje
            en het is zo geregeld.
            De koffie, thee en koekjes staan al klaar.
            Bij wijze van spreken, natuurlijk. Koffie en thee moeten warm zijn.
            Dat weten wij ook wel."
            bgSize="cover"
            shadow
        />
        <Container>
            <Row>
                <Col lg={7}>
                    <ContactForm />
                </Col>

                <Col lg={4} offset={{ lg: 1 }}>
                    <ContactHeading>
                        Zin om samen te werken? Stuur een berichtje naar&nbsp;
                        <a href="mailto:info@bytecode.nl">info@bytecode.nl</a>
                        &nbsp;of bel ons op&nbsp;
                        <a href="tel:0152024222">015-2024222</a>
                    </ContactHeading>
                    <ContactHeading>
                        Of kom eens bij ons langs op de&nbsp;
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://goo.gl/maps/9P6in4Qf6i62"
                        >
                            Verlengde Spiegelmakerstraat 13 in Delfgauw
                        </a>
                    </ContactHeading>
                    <Button
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://calendly.com/bytecode"
                    >
                        Plan een afspraak
                    </Button>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Contact;
