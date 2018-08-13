import Colors from './Colors';

export default {
    projectsContainer: {
        minHeight: '95vh',
        backgroundColor: Colors.silver,
        fontFamily: 'Roboto, san-serif',        
        color: Colors.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'skewY(2deg)',
        boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.75)',
        border: '1 solid transparent',
        padding: '5vh 0',
        filter: `url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter id="gaussian_blur"><feGaussianBlur in="SourceGraphic" stdDeviation="0" /></filter></defs></svg>#gaussian_blur')`
    },
    projectContent: {
        padding: '50px 25%',
        transform: 'skewY(-2deg)'
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
    },
    mobileProjectContent: {
        padding: '50px 10%',
        transform: 'skewY(-2deg)'
    },
    mobileHeader: {
        fontWeight: 'normal',
        fontSize: '36pt',
        margin: 0,
        textAlign: 'center',
        color: Colors.blue
    },
    mobileProjectName: {
        fontWeight: '300',
        fontSize: '18pt',
        color: Colors.blue
    }
};
