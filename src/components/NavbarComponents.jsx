import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { transparentize } from 'polished';
import theme from '../styles/theme';
import { Container } from '../lib/Grid';

const NavbarContainer = styled.nav`
    position: relative;
    z-index: 10000;
    padding: 1rem 0;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        height: 7rem;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: ${transparentize(0.3, theme.colors.black)};
    }
    @media (min-width: ${theme.breakpoints[2]}px) {
        padding: 1rem 2rem;
    }
    @media (min-width: ${theme.breakpoints[3]}px) {
        margin: 1rem 8.5rem;
    }
`;

const InnerNavbarContainer = styled(Container)`
    margin: 0rem 0 !important;
    max-width: none !important;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        margin: 0 !important;
    }
`;

const NavbarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: block;
        width: 30rem;
        height: 100vh;
        position: fixed;
        right: ${props => (props.menuIsOpen ? 0 : '-30rem')};
        top: 0;
        bottom: 0;
        padding-top: 6rem;
        transition: all 0.4s ease;
        background: ${theme.colors.secondary};
        opacity: 1;
    }
`;

const NavbarItems = styled.ul`
    display: flex;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        flex-direction: column;
    }
`;

const StyledLink = styled(Link)`
    text-transform: none;
    position: relative;
    transition: all 0.2s ease;
    text-decoration: none;
    &::after {
        content: '';
        position: absolute;
        border-bottom: solid 0.2rem ${theme.colors.primary};
        bottom: -0.5rem;
        left: 50%;
        right: 50%;
        transition: all 0.2s ease;
    }
    &:hover {
        cursor: pointer;
        color: ${theme.colors.primary};
        &::after {
            left: 0;
            right: 0;
        }
    }
`;

const NavbarItemBase = ({ className, ...props }) => {
    const { href, text } = props;
    return (
        <li className={className}>
            <StyledLink to={href} className="menuitem">
                {text}
            </StyledLink>
        </li>
    );
};

const NavbarItem = styled(NavbarItemBase)`
    display: inline-block;
    padding: 0 2rem;
    &:last-child {
        padding-right: 0;
    }
    @media (max-width: ${theme.breakpointMobileMenu}) {
        padding: 1rem 2rem;
        &:first-child {
            margin-top: 4rem;
        }
    }
`;

const Logo = styled.span`
    display: block;
    @media (min-width: ${theme.breakpointMobileMenu}) {
        width: 25rem;
    }
    img {
        width: 70%;
        @media (max-width: ${theme.breakpointMobileMenu}) {
            display: none;
        }
    }
`;

const MobileNavLogo = styled.img`
    height: 3.5rem;
    position: absolute;
    top: 0.8rem;
    left: 2rem;
    color: white;
    display: none;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: block;
        width: auto;
    }
`;

const MenuButton = styled.a`
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: 1.1rem;
    right: 4rem;
    color: white;
    align-items: center;
    display: none;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: flex;
    }
`;

// TODO: Clean this, as it is a hack at the moment to make it work
// TODO: Create new button SVG
const CloseMenuButton = styled(MenuButton)`
    top: 1.5rem;
    right: 1.5rem;
    height: 4.5rem;
    width: 4.5rem;
`;

const BlackOverlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #000;
    transition: all 0.5s ease;
    opacity: 0;
    display: none;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: ${props => (props.menuIsOpen ? 'block' : 'none')};
        opacity: ${props => (props.menuIsOpen ? 0.5 : 0)};
    }
`;

export default {
    NavbarContainer,
    InnerNavbarContainer,
    NavbarContent,
    NavbarItems,
    NavbarItem,
    Logo,
    MobileNavLogo,
    MenuButton,
    CloseMenuButton,
    BlackOverlay,
};
