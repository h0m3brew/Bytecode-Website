import React from 'react';
import Layout from '../layouts/MainLayout';

import { Container, Row } from '../lib/Grid';

import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Work',
    description: 'Bekijk hier ons werk!',
    keywords: 'website,applicatie,portfolio',
};

const mooiwerkImg = require('../images/img/cases/mooiwerkbreda/website-1.png');
const styrImg = require('../images/img/cases/styr/website-2.png');
const bredaImg = require('../images/img/cases/breda-actief/website-1.jpg');

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <PostThumbnail
                    title="Hoe we Breda dichter bij elkaar brachten"
                    category="Website"
                    big
                    slug="/case/mooiwerkbreda"
                    postImageUrl={mooiwerkImg}
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <PostThumbnail
                    title="STYR: Functiewaardering in 2019"
                    category="Website"
                    slug="/case/styr"
                    postImageUrl={styrImg}
                />
                <PostThumbnail
                    title="Breda in beweging!"
                    category="Website"
                    slug="/case/breda-actief"
                    postImageUrl={bredaImg}
                />
            </Row>
        </Container>
    </Layout>
);

export default Cases;
