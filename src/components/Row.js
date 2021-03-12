import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from "react-jss";

Row.propTypes = {

};

function Row({children}) {
    const c = useStyles();

    return (
        <tr className={c.root}>
            {children}
        </tr>
    );
}

const useStyles = createUseStyles({
    root: {
        borderBottom: [1, 'solid', '#eaeaea'],
        '&:last-child': {
            borderBottom: 'none'
        }
    }
});

export default Row;