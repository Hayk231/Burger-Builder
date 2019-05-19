import React from 'react';
import classes from './Spinner.css';
import Aux from '../../../hoc/Auxiliary';

const spinner = () => (
    <Aux>
        <div className={classes.Darkback}>
            <div className={classes.Parent}>
                <div className={classes.Spinner}></div>
            </div>
        </div>

    </Aux>
);

export default spinner;