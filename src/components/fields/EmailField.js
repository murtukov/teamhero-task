import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './styles';

EmailField.propTypes = {

};

function EmailField({data}) {
    const c = useStyles();

    return (
        <td className={c.root}>{data}</td>
    );
}

export default EmailField;