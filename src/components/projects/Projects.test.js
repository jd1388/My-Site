import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Projects from './Projects';

import Project from './project'
import * as ProjectsData from './data';
import { ProjectsContainer, ProjectsContent, ProjectsHeader } from './new-styles';

describe('Projects', () => {
  let projectsWrapper;
  let chance;

  const renderComponent = () => {
    return shallow(<Projects />);
  };

  beforeEach(() => {
    chance = Chance();

    projectsWrapper = renderComponent();
  });

  it('is wrapped in a ProjectsContainer', () => {
    expect(projectsWrapper.type()).toEqual(ProjectsContainer);
  });

  describe('Projects Content', () => {
    let projectsContent;

    beforeEach(() => {
      projectsContent = projectsWrapper.childAt(0);
    });

    it('is a ProjectsContent', () => {
      expect(projectsContent.type()).toEqual(ProjectsContent);
    });

    describe('Projects Header', () => {
      let projectsHeader;

      beforeEach(() => {
        projectsHeader = projectsContent.childAt(0);
      });

      it('is a ProjectsHeader', () => {
        expect(projectsHeader.type()).toEqual(ProjectsHeader);
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
    });
  });
});
