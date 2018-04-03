import Colors from './Colors';

export default {
    experienceContainer: {
        backgroundColor: Colors.blue,
        width: '100%',
        minHeight: '95vh',
        fontFamily: 'Roboto, san-serif',
        color: Colors.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    experienceContent: {
        padding: '50px 25%',
        width: '50%',
    },
    header: {
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        fontSize: '48pt',
        margin: 0
    },
    subheader: {
        fontWeight: '300',
        color: 'white',
        fontSize: '22pt'
    },
    experienceEntryContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    experienceEntryHeader: {
        fontWeight: '400'
    },
    experienceEntryDates: {
        fontWeight: '300'
    },
    experienceEntryDescription: {
        fontWeight: '300',
        textAlign: 'justify'
    },
    experienceEntryLeftColumn: {
        width: '30%'
    },
    experienceEntryRightColumn: {
        width: '65%',
        paddingLeft: '5%'
    }
};
