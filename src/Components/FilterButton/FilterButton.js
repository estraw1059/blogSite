import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import './FilterButton.css';

const FilterButton = ({field, onClick}) => {
    
    const [selected, setSelected] = useState(false);

    const hanldeClick = () => {
        onClick();
        setSelected(!selected);
    }


    return (
        <Button onClick={hanldeClick} variant='dark' className={selected ? 'selectedPill rounded-pill pill' : 'unselectedPill rounded-pill pill'}>
            {field}
        </Button>
    );
};

export default FilterButton;