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
        alignItems: 'center'
    },
    sectionContent: {
        textAlign: 'justify',
        fontWeight: 300,
        fontFamily: 'Roboto, san-serif',
        color: Colors.black,
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center'
    }
};
