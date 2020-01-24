import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import Chance from 'chance';

import SkillsSection from './SkillsSection';
import { SkillSectionHeader, SkillSectionEntries } from './styles';

describe('Skills Section', () => {
    let skillsSectionWrapper;

    const chance = Chance();
    const numberOfSkillGroups = 5;
    const renderComponent = (props = {}) => {
        const defaultSectionInfo = {
            header: chance.word(),
            skills: chance.n(() => [
                chance.n(chance.string, chance.d6())
            ], chance.d6()),
        };
        const appliedSectionInfo = {
            header: props.sectionInfo && props.sectionInfo.header ? props.sectionInfo.header : defaultSectionInfo.header,
            skills: props.sectionInfo && props.sectionInfo.skills ? props.sectionInfo.skills : defaultSectionInfo.skills
        };
        const appliedProps = {
            ...props,
            sectionInfo: appliedSectionInfo
        };

        return shallow(<SkillsSection {...appliedProps} />);
    }

    beforeEach(() => {
        skillsSectionWrapper = renderComponent();
    });

    it('is wrapped in a fragment', () => {
        expect(skillsSectionWrapper.type()).toEqual(Fragment);
    });

    describe('Skills Section Header', () => {
        let skillsSectionHeader;

        beforeEach(() => {
            skillsSectionHeader = skillsSectionWrapper.childAt(0);
        });

        it('is a SkillSectionHeader', () => {
            expect(skillsSectionHeader.type()).toEqual(SkillSectionHeader);
        });

        it('contains the header text', () => {
            const fakeHeader = chance.word();

            skillsSectionWrapper = renderComponent({
                sectionInfo: {
                    header: fakeHeader
                }
            });
            skillsSectionHeader = skillsSectionWrapper.childAt(0);

            expect(skillsSectionHeader.text()).toEqual(fakeHeader);
        });
    })

    describe('Skills Section Entries', () => {
        let skillSectionEntries;

        const getSkillSectionEntries = () => skillsSectionWrapper
            .childAt(1)
            .children()
            .map((entry) => entry);
        const generateFakeSkills = () => chance.n(() => chance.n(chance.word, chance.d6()), numberOfSkillGroups);
        const findEntryForSkill = (skill) => (entry) => entry.props().skill === skill;

        beforeEach(() => {
            skillSectionEntries = getSkillSectionEntries();
        });

        it('has the correct number of skills', () => {
            const fakeSkills = generateFakeSkills();

            skillsSectionWrapper = renderComponent({
                sectionInfo: {
                    skills: fakeSkills
                }
            });
            skillSectionEntries = getSkillSectionEntries();

            expect(skillSectionEntries).toHaveLength(fakeSkills.flat().length);
        });

        it('applies each skill', () => {
            const fakeSkills = generateFakeSkills();

            expect.assertions(fakeSkills.flat().length);

            skillsSectionWrapper = renderComponent({
                sectionInfo: {
                    skills: fakeSkills
                }
            });
            skillSectionEntries = getSkillSectionEntries();

            fakeSkills.flat().forEach((fakeSkill, index) => {
                const correspondingEntry = skillSectionEntries.find(findEntryForSkill(fakeSkill));

                expect(correspondingEntry).toBeDefined();
            });
        });

        it('sets the strength of each skill correctly', () => {
            const fakeSkills = generateFakeSkills();

            expect.assertions(fakeSkills.flat().length);

            expect.assertions(fakeSkills.flat().length);

            skillsSectionWrapper = renderComponent({
                sectionInfo: {
                    skills: fakeSkills
                }
            });
            skillSectionEntries = getSkillSectionEntries();

            fakeSkills.forEach((skillGroup, skillGroupIndex) => {
                skillGroup.forEach((skill) => {
                    const correspondingEntry = skillSectionEntries.find(findEntryForSkill(skill));
                    const expectedStrength = numberOfSkillGroups - skillGroupIndex;

                    expect(correspondingEntry.props().strength).toEqual(expectedStrength)
                });
            });
        });

        it('applies the correct key to each skill', () => {
            const fakeSkills = generateFakeSkills();

            expect.assertions(fakeSkills.flat().length);

            skillsSectionWrapper = renderComponent({
                sectionInfo: {
                    skills: fakeSkills
                }
            });
            skillSectionEntries = getSkillSectionEntries();

            fakeSkills.flat().forEach((fakeSkill, index) => {
                const correspondingEntry = skillSectionEntries.find(findEntryForSkill(fakeSkill));

                expect(parseInt(correspondingEntry.key())).toEqual(index);
            });
        });

        it('applies the correct index to each skill', () => {
            const fakeSkills = generateFakeSkills();

            expect.assertions(fakeSkills.flat().length);

            skillsSectionWrapper = renderComponent({
                sectionInfo: {
                    skills: fakeSkills
                }
            });
            skillSectionEntries = getSkillSectionEntries();

            fakeSkills.flat().forEach((fakeSkill, index) => {
                const correspondingEntry = skillSectionEntries.find(findEntryForSkill(fakeSkill));

                expect(parseInt(correspondingEntry.key())).toEqual(index);
            });
        });
    });
});
