import Colors from './Colors';

export default {
    content: {
        fontSize: '16pt'
    },
    hero: {
        fontSize: '160pt',
        color: Colors.blue,
        fontWeight: '400',
        paddingTop: '25vh',
        marginBottom: '0',
        alignSelf: 'center'
    },
    aboutContainer: {
        padding: '0 25%',
        height: '95vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '1000px'
    },
    sectionContent: {
        textAlign: 'justify',
        fontWeight: 300,
        fontFamily: 'Roboto, san-serif',
        color: Colors.black,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center'
    },
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
    }
};
