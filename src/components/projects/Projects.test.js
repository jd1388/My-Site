import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Projects from './Projects';

import Project from './project'
import Styles from './styles';
import * as ProjectsData from './data';

describe('Projects', () => {
  let projectsWrapper;
  let chance;

  const renderComponent = (props = {}) => {
    const { mobile } = props;

    return shallow(<Projects mobile={mobile !== undefined ? mobile : chance.bool()} />);
  };

  beforeEach(() => {
    chance = Chance();

    projectsWrapper = renderComponent();
  });

  it('is wrapped in a div', () => {
    expect(projectsWrapper.type()).toEqual('div');
  });

  describe('Projects Content', () => {
    let projectsContent;

    beforeEach(() => {
      projectsContent = projectsWrapper.childAt(0);
    });

    it('is a div', () => {
      expect(projectsContent.type()).toEqual('div');
    });

    it('displays correctly on a mobile device', () => {
      projectsWrapper = renderComponent({ mobile: true });
      projectsContent = projectsWrapper.childAt(0);

      expect(projectsContent.props().style).toEqual(Styles.mobileProjectContent);
    });

    it('displays correctly on a desktop device', () => {
      projectsWrapper = renderComponent({ mobile: false });
      projectsContent = projectsWrapper.childAt(0);

      expect(projectsContent.props().style).toEqual(Styles.projectContent);
    });

    describe('Projects Header', () => {
      let projectsHeader;

      beforeEach(() => {
        projectsHeader = projectsContent.childAt(0);
      });

      it('is an h2', () => {
        expect(projectsHeader.type()).toEqual('h2');
      });

      it('displays correctly on a mobile device', () => {
        projectsWrapper = renderComponent({ mobile: true });
        projectsContent = projectsWrapper.childAt(0);
        projectsHeader = projectsContent.childAt(0);

        expect(projectsHeader.props().style).toEqual(Styles.mobileHeader);
      });

      it('displays correctly on a desktop device', () => {
        projectsWrapper = renderComponent({ mobile: false });
        projectsContent = projectsWrapper.childAt(0);
        projectsHeader = projectsContent.childAt(0);

        expect(projectsHeader.props().style).toEqual(Styles.header);
      });

      it('displays the correct text', () => {
        const projectsHeaderText = projectsHeader.childAt(0).text();

        expect(projectsHeaderText).toEqual('Projects');
      });
    });

    describe('Terra Project', () => {
      let terraProject;

      beforeEach(() => {
        terraProject = projectsContent.childAt(1);
      });

      it('is a project', () => {
        expect(terraProject.type()).toEqual(Project);
      });

      it('passes the correct project data to the projectInfo prop', () => {
        const { projectInfo } = terraProject.props();

        expect(projectInfo).toEqual(ProjectsData.terra);
      });

      it('passes the the kind of device as the mobile prop', () => {
        const expectedMobile = chance.bool();

        projectsWrapper = renderComponent({ mobile: expectedMobile });
        projectsContent = projectsWrapper.childAt(0);
        terraProject = projectsContent.childAt(1);

        expect(terraProject.props().mobile).toEqual(expectedMobile);
      });
    });

    describe('Bubble Popper Project', () => {
      let bubblePopperProject;

      beforeEach(() => {
        bubblePopperProject = projectsContent.childAt(2);
      });

      it('is a project', () => {
        expect(bubblePopperProject.type()).toEqual(Project);
      });

      it('passes the correct project data to the projectInfo prop', () => {
        const { projectInfo } = bubblePopperProject.props();

        expect(projectInfo).toEqual(ProjectsData.bubblePopper);
      });

      it('passes the the kind of device as the mobile prop', () => {
        const expectedMobile = chance.bool();

        projectsWrapper = renderComponent({ mobile: expectedMobile });
        projectsContent = projectsWrapper.childAt(0);
        bubblePopperProject = projectsContent.childAt(2);

        expect(bubblePopperProject.props().mobile).toEqual(expectedMobile);
      });
    });

    describe('Giphy Search Project', () => {
      let giphySearchProject;

      beforeEach(() => {
        giphySearchProject = projectsContent.childAt(3);
      });

      it('is a project', () => {
        expect(giphySearchProject.type()).toEqual(Project);
      });

      it('passes the correct project data to the projectInfo prop', () => {
        const { projectInfo } = giphySearchProject.props();

        expect(projectInfo).toEqual(ProjectsData.giphySearch);
      });

      it('passes the the kind of device as the mobile prop', () => {
        const expectedMobile = chance.bool();

        projectsWrapper = renderComponent({ mobile: expectedMobile });
        projectsContent = projectsWrapper.childAt(0);
        giphySearchProject = projectsContent.childAt(3);

        expect(giphySearchProject.props().mobile).toEqual(expectedMobile);
      });
    });

    describe('Code Couch', () => {
      let codeCouchProject;

      beforeEach(() => {
        codeCouchProject = projectsContent.childAt(4);
      });

      it('is a project', () => {
        expect(codeCouchProject.type()).toEqual(Project);
      });

      it('passes the correct project data to the projectInfo prop', () => {
        const { projectInfo } = codeCouchProject.props();

        expect(projectInfo).toEqual(ProjectsData.codeCouch);
      });

      it('passes the the kind of device as the mobile prop', () => {
        const expectedMobile = chance.bool();

        projectsWrapper = renderComponent({ mobile: expectedMobile });
        projectsContent = projectsWrapper.childAt(0);
        codeCouchProject = projectsContent.childAt(4);

        expect(codeCouchProject.props().mobile).toEqual(expectedMobile);
      });
    });

    describe('WalkMeHome Project', () => {
      let walkMeHomeProject;

      beforeEach(() => {
        walkMeHomeProject = projectsContent.childAt(5);
      });

      it('is a project', () => {
        expect(walkMeHomeProject.type()).toEqual(Project);
      });

      it('passes the correct project data to the projectInfo prop', () => {
        const { projectInfo } = walkMeHomeProject.props();

        expect(projectInfo).toEqual(ProjectsData.walkMeHome);
      });

      it('passes the the kind of device as the mobile prop', () => {
        const expectedMobile = chance.bool();

        projectsWrapper = renderComponent({ mobile: expectedMobile });
        projectsContent = projectsWrapper.childAt(0);
        walkMeHomeProject = projectsContent.childAt(5);

        expect(walkMeHomeProject.props().mobile).toEqual(expectedMobile);
      });
    });
  });
});
