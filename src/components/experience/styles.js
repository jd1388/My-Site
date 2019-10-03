import Colors from '../../styles/Colors';

export default {
  experienceContainer: {
    backgroundColor: Colors.blue,
    width: '100%',
    minHeight: '95vh',
    fontFamily: 'Roboto, san-serif',
    color: Colors.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 4px 20px 0px rgba(0,0,0,0.75)',
    transform: 'skewY(2deg)',
    padding: '5vh 0',
    filter: 'url(\'data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><filter id="gaussian_blur"><feGaussianBlur in="SourceGraphic" stdDeviation="0" /></filter></defs></svg>#gaussian_blur\')',
  },
  experienceContent: {
    padding: '50px 25%',
    width: '50%',
    transform: 'skewY(-2deg)',
  },
  header: {
    fontWeight: 'normal',
    color: Colors.white,
    textAlign: 'center',
    fontSize: '48pt',
    margin: 0,
  },
  subheader: {
    fontWeight: '300',
    color: Colors.white,
    fontSize: '22pt',
  },
  experienceEntryContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  experienceEntryHeader: {
    fontWeight: '400',
  },
  experienceEntryDates: {
    fontWeight: '300',
  },
  experienceEntryDescription: {
    fontWeight: '300',
    textAlign: 'justify',
  },
  experienceEntryLeftColumn: {
    width: '30%',
  },
  experienceEntryRightColumn: {
    width: '65%',
    paddingLeft: '5%',
  },
  mobileExperienceContent: {
    padding: '50px 10%',
    transform: 'skewY(-2deg)',
  },
  mobileHeader: {
    fontWeight: 'normal',
    color: Colors.white,
    textAlign: 'center',
    fontSize: '36pt',
    margin: 0,
  },
  mobileSubheader: {
    fontWeight: '300',
    color: Colors.white,
    fontSize: '18pt',
  },
  mobileExperienceEntryContainer: {
    paddingBottom: '5px',
  },
};
