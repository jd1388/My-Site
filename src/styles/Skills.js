import Colors from './Colors';

export default {
    skillsContainer: {
        backgroundColor: Colors.white,
        width: '100%',
        minHeight: '95vh',
        fontFamily: 'Roboto, san-serif',
        color: Colors.black,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    skillsContent: {
        padding: '50px 25%',
        width: '50%',
    },
    header: {
        fontWeight: 'normal',
        color: Colors.blue,
        textAlign: 'center',
        fontSize: '48pt',
        margin: 0
    },
    subheader: {
        fontWeight: '300',
        color: Colors.blue,
        fontSize: '22pt'
    },
    skillEntryContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '33.3%',
        paddingBottom: '5px'
    },
    skillEntries: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    skillIcon: {
        fill: Colors.blue
    },
    skillEntryHeader: {
        fontWeight: '300'
    },
    mobileSkillsContent: {
        padding: '50px 10%'
    },
    mobileHeader: {
        fontWeight: 'normal',
        color: Colors.blue,
        textAlign: 'center',
        fontSize: '36pt',
        margin: 0
    },
    mobileSubheader: {
        fontWeight: '300',
        color: Colors.blue,
        fontSize: '18pt'
    },
    mobileSkillEntryContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '5px'
    }
};
