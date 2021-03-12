import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

TagsField.propTypes = {

};

function TagsField({data}) {
    const c = useStyles();

    return (
        <td className={c.root}>
            {data.map(tag => <span>{tag}</span>)}
        </td>
    );
}

export default TagsField;