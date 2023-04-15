import React from 'react';
import './Skill.css';

const Skill = (props) => {
    return (
    <div className="skills">
		<div className="skill">
			<div className="skill-name">HTML/CSS</div>
			<div className="skill-level">
				<div className="skill-level-bar" style={{width: "100%"}}>
					<span>Advanced</span>
				</div>
			</div>
		</div>
	</div>
    );
};

export default Skill;