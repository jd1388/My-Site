import Colors from './Colors';

export default {
    projectsContainer: {
        height: '95vh',
        backgroundColor: Colors.silver,
        fontFamily: 'Roboto, san-serif',        
        color: Colors.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    projectContent: {
        padding: '50px 25%'
    },
    header: {
        fontWeight: 'normal',
        fontSize: '48pt',
        margin: 0,
        textAlign: 'center',
        color: Colors.blue
    },
    projectName: {
        fontWeight: '300',
        fontSize: '22pt',
        color: Colors.blue
    },
    projectDescription: {
        fontWeight: '300',
        textAlign: 'justify'
    },
    projectContainer: {
        paddingBottom: '5px'
    }
};
