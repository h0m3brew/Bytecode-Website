import React from 'react';
import PropTypes from 'prop-types';
import {
    Figure,
    H1,
    H2,
    H3,
    H4,
    StyledButton,
    Subtitle,
} from './TextBlock.components';

const getImage = (src, alt) => {
    if (src) {
        return (
            <Figure>
                <img src={src} alt={alt} />
            </Figure>
        );
    }
    return '';
};

const getButton = (href, button, useGatsbyLink) => {
    if (href && button) {
        return (
            <StyledButton href={href} useGatsbyLink={useGatsbyLink}>
                {button}
            </StyledButton>
        );
    }
    return '';
};

const getTitle = (type, title) => {
    if (!title) {
        return '';
    }
    if (type === 'h1') {
        return <H1>{title}</H1>;
    }
    if (type === 'h2') {
        return <H2>{title}</H2>;
    }
    if (type === 'h3') {
        return <H3>{title}</H3>;
    }
    if (type === 'h4') {
        return <H4>{title}</H4>;
    }
    return <H1>{title}</H1>;
};

const TextBlock = props => {
    const {
        image,
        alt,
        subtitle,
        title,
        headingType,
        href = null,
        button = null,
        useGatsbyLink,
        children,
    } = props;

    return (
        <div>
            {getImage(image, alt)}
            <Subtitle hasTitle={title}>{subtitle}</Subtitle>
            {getTitle(headingType, title)}
            <p>{children}</p>
            {getButton(href, button, useGatsbyLink)}
        </div>
    );
};

export default TextBlock;

TextBlock.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    headingType: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
    href: PropTypes.string,
    button: PropTypes.string,
    useGatsbyLink: PropTypes.bool,
    children: PropTypes.node,
};

TextBlock.defaultProps = {
    image: undefined,
    alt: undefined,
    subtitle: undefined,
    headingType: 'h1',
    href: null,
    button: null,
    useGatsbyLink: false,
    children: undefined,
};
