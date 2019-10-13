import React from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import Project from './Project';
import { ProjectContainer, ProjectName, ProjectDescription } from './styles';

describe('Project', () => {
  let projectWrapper;
  let chance;

  const generateProjectInfo = (projectInfo = {}) => ({
    name: chance.string(),
    descriptioin: chance.sentence(),
    ...projectInfo,
  });

  const renderComponent = (props = {}) => {
    const { projectInfo, mobile } = props;

    return shallow(
      <Project
        projectInfo={generateProjectInfo(projectInfo)}
        mobile={mobile !== undefined ? mobile : chance.bool()}
      />,
    );
  };

  beforeEach(() => {
    chance = Chance();

    projectWrapper = renderComponent();
  });

  it('is wrapped in a ProjectContainer', () => {
    expect(projectWrapper.type()).toEqual(ProjectContainer);
  });

  describe('Project Name', () => {
    let projectName;

    beforeEach(() => {
      projectName = projectWrapper.childAt(0);
    });

    it('is a ProjectName', () => {
      expect(projectName.type()).toEqual(ProjectName);
    });

    it('displays the name passed in the projectInfo prop', () => {
      const fakeName = chance.string();

      projectWrapper = renderComponent({ projectInfo: { name: fakeName } });
      projectName = projectWrapper.childAt(0);

      const projectNameText = projectName.childAt(0).text();

      expect(projectNameText).toEqual(fakeName);
    });
  });

  describe('Project Description', () => {
    let projectDescription;

    beforeEach(() => {
      projectDescription = projectWrapper.childAt(1);
    });

    it('is a ProjectDescription', () => {
      expect(projectDescription.type()).toEqual(ProjectDescription);
    });

    it('uses the description passed in the projectInfo prop', () => {
      const fakeDescription = chance.sentence();

      projectWrapper = renderComponent({ projectInfo: { description: fakeDescription } });
      projectDescription = projectWrapper.childAt(1);

      const projectDescriptionText = projectDescription.childAt(0).text();

      expect(projectDescriptionText).toEqual(fakeDescription);
    });
  });
});
