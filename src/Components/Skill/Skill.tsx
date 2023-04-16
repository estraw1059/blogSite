import React from 'react';
import { Col } from 'react-bootstrap';
import './Skill.css';

type SkillProps  = {
	skillName: String,
	skillPercent: number
}


const Skill = (props: SkillProps) => {
    return (
    <Col xs={12}>
		<div className='skills'>
			<div className="skill">
				<div className="skill-name">{props.skillName}</div>
				<div className="skill-level">
					<div className="skill-level-bar" style={{width: `${props.skillPercent}%`}}>
					</div>
				</div>
			</div>
		</div>
	</Col>
    );
};

export default Skill;