import React from 'react';
import Link from 'gatsby-link';

import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import LinkedinIcon from 'mdi-react/LinkedinIcon';
import GithubCircleIcon from 'mdi-react/GithubCircleIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import Styles from '../styles/home';

const About = () => (
    <div style={Styles.aboutContainer}>
        <p>
            {`
                My name is Jared Griffin. I'm a junior in Computer Engineering at
                Iowa State University. Through side projects that I've worked on
                with my friends and my apprenticeships, I've became a fluent web
                developer with experience working on the entire stack. I have also
                invested a lot of time in becoming a great leader, serving as
                President of Iowa State's student branch of the Institute of
                Electrical and Electronics Engineers and as a member of the
                Electrical and Computer Engineering Department's Student Advisory
                Committee. When I'm not knee-deep in side projects, I'm probably
                playing video games or disc golf with friends.
            `}
        </p>
    </div>
);

const Experience = () => (
    <div style={Styles.experienceContainer}>
        <h2 style={Styles.invertedHeader}>Experience</h2>
        <h3 style={Styles.invertedSubheader}>School</h3>

        <div style={Styles.experienceEntryContainer}>
            <div style={Styles.experienceEntryLeft}>
                <p style={Styles.experienceEntryLocation}>
                    Iowa State University
                </p>
                <p style={Styles.experienceEntryTime}>August 2015 - Present</p>
            </div>
            <div style={Styles.experienceEntryRight}>
                <p style={Styles.experienceEntryTitle}>
                    Bachelor - Computer Engineering
                </p>
                <p style={Styles.experienceEntryDescription}>
                    {`
                        At ISU, I learned a lot about design patterns and best
                        practices when building software. I mainly focused in
                        software development, expecially in frontend and web design.
                    `}
                </p>
            </div>
        </div>

        <div style={Styles.experienceEntryContainer}>
            <div style={Styles.experienceEntryLeft}>
                <p style={Styles.experienceEntryLocation}>
                    Newton Senior High School
                </p>
                <p style={Styles.experienceEntryTime}>August 2011 - May 2015</p>
            </div>
            <div style={Styles.experienceEntryRight}>
                <p style={Styles.experienceEntryTitle}>High School</p>
                <p style={Styles.experienceEntryDescription}>
                    {`
                        Here was where I discovered my love of programming by
                        building robots for my high school's robotics club. Later I
                        would switch my focus to software development because I'm a
                        far better programmer than builder.
                    `}
                </p>
            </div>
        </div>

        <h3 style={Styles.invertedSubheader}>Work Experience</h3>

        <div style={Styles.experienceEntryContainer}>
            <div style={Styles.experienceEntryLeft}>
                <p style={Styles.experienceEntryLocation}>
                    Source Allies, Inc.
                </p>
                <p style={Styles.experienceEntryTime}>May 2017 - August 2017</p>
            </div>
            <div style={Styles.experienceEntryRight}>
                <p style={Styles.experienceEntryTitle}>
                    Software Engineering Apprentice
                </p>
                <p style={Styles.experienceEntryDescription}>
                    {`I worked on a team rewritting the website for `}
                    <a
                        href="https://www.adventurelandresort.com/"
                        target="_blank"
                        style={Styles.hyperlink}
                    >
                        Adventureland Resort
                    </a>
                    {`
                        . This involved learning to use PHP, specifically the
                        Laravel framework, as well as using Vue JS for the first
                        time, and using Django for our CMS. With this project, I was
                        also able to gain an understanding of cloud infrastructure,
                        specifically AWS and how CloudFormation works.
                    `}
                </p>
            </div>
        </div>

        <div style={Styles.experienceEntryContainer}>
            <div style={Styles.experienceEntryLeft}>
                <p style={Styles.experienceEntryLocation}>
                    Source Allies, Inc.
                </p>
                <p style={Styles.experienceEntryTime}>May 2016-August 2016</p>
            </div>
            <div style={Styles.experienceEntryRight}>
                <p style={Styles.experienceEntryTitle}>
                    Software Engineering Apprentice
                </p>
                <p style={Styles.experienceEntryDescription}>
                    {`
                        I spent this summer working with a team on finishing an
                        in-house application used by the Source Allies business team
                        to create resumes for consultants that they were trying to
                        send to potential clients. This is where I first learned how
                        to use React and Redux, and we used Spring for our Java
                        backend.
                    `}
                </p>
            </div>
        </div>
    </div>
);

const Skills = () => (
    <div style={Styles.skillsContainer}>
        <h2 style={Styles.header}>Skills</h2>
        <h3 style={Styles.subheader}>Languages &amp; Frameworks</h3>

        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="JavaScript" strength={5} />
            <SkillGraphic name="React" strength={5} />
            <SkillGraphic name="Redux" strength={5} />
        </div>
        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="CSS" strength={4} />
            <SkillGraphic name="HTML 5" strength={4} />
            <SkillGraphic name="Java" strength={4} />
        </div>
        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="Laravel" strength={4} />
            <SkillGraphic name="Lumen" strength={4} />
            <SkillGraphic name="Node" strength={4} />
        </div>
        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="PHP" strength={4} />
            <SkillGraphic name="Sass" strength={4} />
            <SkillGraphic name="C" strength={3} />
        </div>
        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="Express" strength={3} />
            <SkillGraphic name="Knex" strength={3} />
            <SkillGraphic name="MySQL" strength={3} />
        </div>
        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="React Native" strength={3} />
            <SkillGraphic name="Vue" strength={3} />
            <SkillGraphic name="Python" strength={2} />
        </div>
        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="Spring" strength={1} />
            <SkillGraphic name="Django" strength={1} />
            <SkillGraphic empty />
        </div>

        <h3 style={Styles.subheader}>Infrastructure</h3>
        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="AWS" strength={4} />
            <SkillGraphic name="Docker" strength={3} />
            <SkillGraphic empty />
        </div>

        <h3 style={Styles.subheader}>Methodologies</h3>
        <div style={Styles.skillRowContainer}>
            <SkillGraphic name="Agile" strength={5} />
            <SkillGraphic name="Scrum" strength={4} />
            <SkillGraphic empty />
        </div>
    </div>
);

const SkillGraphic = ({ name, strength, empty }) => {
    if (empty) {
        return <div style={Styles.skillGraphic} />;
    }

    return (
        <div style={Styles.skillGraphic}>
            <span style={Styles.skillName}>{name}</span>
            <div style={Styles.skillRating}>
                <Star strength={strength} limit={0} />
                <Star strength={strength} limit={1} />
                <Star strength={strength} limit={2} />
                <Star strength={strength} limit={3} />
                <Star strength={strength} limit={4} />
            </div>
        </div>
    );
};

const Star = ({ strength, limit }) => (
    <span>
        {strength > limit ? (
            <StarIcon style={Styles.ratingIcon} width={20} height={20} />
        ) : (
            <StarOutlineIcon style={Styles.ratingIcon} width={20} height={20} />
        )}
    </span>
);

const Links = () => (
    <div style={Styles.linksContainer}>
        <h2 style={Styles.invertedHeader}>Links</h2>
        <div style={Styles.linkRowContainer}>
            <a
                href="https://www.linkedin.com/in/griffinjared/"
                target="_blank"
                style={Styles.contactLink}
            >
                <div>
                    <LinkedinIcon
                        style={Styles.linkIcon}
                        width={20}
                        height={20}
                    />
                </div>
                <span style={Styles.linkText}>
                    https://www.linkedin.com/in/griffinjared/
                </span>
            </a>
            <a
                href="https://github.com/jd1388"
                target="_blank"
                style={Styles.contactLink}
            >
                <div>
                    <GithubCircleIcon
                        style={Styles.linkIcon}
                        width={20}
                        height={20}
                    />
                </div>
                <span style={Styles.linkText}>https://github.com/jd1388</span>
            </a>
        </div>
        <div style={Styles.linkRowContainer}>
            <a
                href="mailto:griffinjared1388@gmail.com"
                style={Styles.contactLink}
            >
                <div>
                    <EmailIcon style={Styles.linkIcon} width={20} height={20} />
                </div>
                <span style={Styles.linkText}>griffinjared1388@gmail.com</span>
            </a>
        </div>
    </div>
);

const IndexPage = () => (
    <div>
        <h1 style={Styles.hero}>Hello</h1>
        <About />
        <Experience />
        <Skills />
        <Links />
    </div>
);

export default IndexPage;
