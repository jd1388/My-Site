import Colors from './Colors';

export default {
    footerContainer: {
        backgroundColor: Colors.gray,
        height: '5vh',
        minHeight: '100px',
        color: Colors.white,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0 25%',
        fontSize: '12pt'
    },
    footerLink: {
        fontWeight: 300,
        color: Colors.white,
        textDecoration: 'none',
        display: 'flex'
    },
    footerIcon: {
        fill: Colors.white,
        width: '20px',
        height: '20px'
    },
    footerLinkText: {
        paddingLeft: '5px'
    },
    mobileFooterContainer: {
        backgroundColor: Colors.gray,
        height: '5vh',
        minHeight: '100px',
        color: Colors.white,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '0 10%',
        fontSize: '12pt'
    }
};
