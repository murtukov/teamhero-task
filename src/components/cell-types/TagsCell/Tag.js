import React from 'react';
import PropTypes from 'prop-types';
import {createUseStyles} from "react-jss";

Tag.propTypes = {
    text: PropTypes.string.isRequired
};

function Tag({text}) {
    const c = useStyles();

    return (
        <span className={c.root}>
            {text}
        </span>
    );
}

const useStyles = createUseStyles({
    root: {

    }
});

export default Tag;