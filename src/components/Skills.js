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

const Skill = ({ skill, strength, index }) => (
    <div style={Styles.skillEntryContainer}>
        <span style={index % 3 < 2 ? Styles.skillEntryHeader: Object.assign({}, Styles.skillEntryHeader, { marginLeft: '7.5%' })}>
            {skill}
        </span>
        <div style={index % 3 < 2 ? Object.assign({}, { marginRight: '7.5%' }) : {}}>
            <Star strength={strength} limit={0}/>
            <Star strength={strength} limit={1}/>
            <Star strength={strength} limit={2}/>
            <Star strength={strength} limit={3}/>
            <Star strength={strength} limit={4}/>
        </div>
    </div>
);

const SkillsSection = props => {
    const { header, skills } = props.sectionInfo;

    let skillEntries = [];
    let key = 0;

    skills.forEach((skillGroup, index)=> {
        skillGroup.forEach(skill => {
            skillEntries.push(<Skill skill={skill} strength={5 - index} key={key} index={key}/>)
            key++;
        });
    });

    return (
        <div>
            <h3 style={Styles.subheader}>{header}</h3>
            <div style={Styles.skillEntries}>
                {skillEntries}
            </div>
        </div>
    );
};

const Skills = () => (
    <div style={Styles.skillsContainer}>
        <div style={Styles.skillsContent}>
            <h2 style={Styles.header}>Skills</h2>
            <SkillsSection sectionInfo={languageAndFrameworks}/>
            <SkillsSection sectionInfo={infrastructure}/>
            <SkillsSection sectionInfo={methodologies}/>
        </div>
    </div>
);

export default Skills;
