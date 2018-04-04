import React from 'react';

import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';

import { languageAndFrameworks, infrastructure, methodologies } from '../data/Skills';

import Styles from '../styles/Skills';

const Star = ({ strength, limit }) => (
    <span>
        {strength > limit ? (
            <StarIcon style={Styles.skillIcon} width={20} height={20} />
        ) : (
            <StarOutlineIcon style={Styles.skillIcon} width={20} height={20} />
        )}
    </span>
);

const Skill = ({ skill, strength, index, mobile }) => (
    <div style={mobile ? Styles.mobileSkillEntryContainer : Styles.skillEntryContainer}>
        <span 
            style={
                index % 3 < 2 || mobile ? 
                    Styles.skillEntryHeader :
                    Object.assign({}, Styles.skillEntryHeader, { marginLeft: '7.5%' })
            }
        >
            {skill}
        </span>
        <div style={index % 3 < 2  && !mobile ? Object.assign({}, { marginRight: '7.5%' }) : {}}>
            <Star strength={strength} limit={0}/>
            <Star strength={strength} limit={1}/>
            <Star strength={strength} limit={2}/>
            <Star strength={strength} limit={3}/>
            <Star strength={strength} limit={4}/>
        </div>
    </div>
);

const SkillsSection = ({ sectionInfo, mobile }) => {
    const { header, skills } = sectionInfo;

    let skillEntries = [];
    let key = 0;

    skills.forEach((skillGroup, index)=> {
        skillGroup.forEach(skill => {
            skillEntries.push(<Skill skill={skill} strength={5 - index} key={key} index={key} mobile={mobile}/>)
            key++;
        });
    });

    if (mobile)
        return (
            <div>
                <h3 style={Styles.mobileSubheader}>{header}</h3>
                {skillEntries}
            </div>
        )

    return (
        <div>
            <h3 style={Styles.subheader}>{header}</h3>
            <div style={Styles.skillEntries}>
                {skillEntries}
            </div>
        </div>
    );
};

const Skills = ({ mobile }) => (
    <div style={Styles.skillsContainer}>
        <div style={mobile ? Styles.mobileSkillsContent : Styles.skillsContent}>
            <h2 style={mobile ? Styles.mobileHeader : Styles.header}>Skills</h2>
            <SkillsSection sectionInfo={languageAndFrameworks} mobile={mobile}/>
            <SkillsSection sectionInfo={infrastructure} mobile={mobile}/>
            <SkillsSection sectionInfo={methodologies} mobile={mobile}/>
        </div>
    </div>
);

export default Skills;
