import { AppBar, Toolbar, makeStyles, IconButton, Drawer, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect } from 'react';
import logoImange from '../media/logo.png';

const headersData = [
    {
        label: 'Home',
        href: 'https://carbonforest.org',
    },
    {
        label: 'Products',
        href: 'https://carbonforest.org/pages/products',
    },
    {
        label: 'FAQ',
        href: 'https://carbonforest.org/pages/faq',
    },
    {
        label: 'About Us',
        href: 'https://carbonforest.org/pages/about-us-1',
    },
    {
        label: 'Blog',
        href: 'https://carbonforest.org/blogs/news',
    },
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: 'white',
        paddingRight: '79px',
        paddingLeft: '100px',
        '@media (max-width: 900px)': {
            paddingLeft: 0,
        },
    },
    logo: {
        top: 0,
        left: 0,
        width: '10%',
        height: '10%',
    },
    menuButton: {
        fontWeight: 700,
        size: '18px',
        marginLeft: '38px',
        color: 'black',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 20,
    },
    drawerContainer: {
        padding: '20px 30px',
    },
}));

export default function Header() {
    const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener('resize', () => setResponsiveness());
    }, []);

    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {carbonForestLogo}
                <div>{getMenuButtons()}</div>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <div>{carbonForestLogo}</div>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'default',
                        'aria-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: 'left',
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <div className={drawerContainer}>{getDrawerChoices()}</div>
                </Drawer>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return headersData.map(({ label, href }) => {
            return (
                <a
                    {...{
                        href: href,
                        color: 'inherit',
                        style: { textDecoration: 'none' },
                        key: label,
                        target: '_blank',
                    }}
                >
                    <MenuItem>{label}</MenuItem>
                </a>
            );
        });
    };

    const carbonForestLogo = (
        // <Typography variant="h6" component="h1" className={logo}>
        //     CarbonForest
        // </Typography>
        <img src={logoImange} className={logo} alt="Logo" />
    );

    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
            return (
                <a
                    {...{
                        key: label,
                        color: 'inherit',
                        href: href,
                        className: menuButton,
                        target: '_blank',
                    }}
                >
                    {label}
                </a>
            );
        });
    };

    return (
        <header>
            <AppBar className={header} position="absolute">
                {mobileView ? displayMobile() : displayDesktop()}
            </AppBar>
        </header>
    );
}
