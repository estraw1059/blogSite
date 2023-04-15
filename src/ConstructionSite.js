import {useState, React} from 'react';
import './ConstructionSite.css';
import { motion } from 'framer-motion';

const ConstructionSite = () => {
    const [rotate, setRotate] = useState(false);
    return (
        <div>
            <motion.div animate={{ rotate: rotate ? 360 : 0}} onClick={() => {setRotate(!rotate)}} className="box"></motion.div>
        </div>
    );
};

export default ConstructionSite;