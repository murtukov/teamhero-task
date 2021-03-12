import React from 'react';
import useStyles from './styles';

function StringField({data}) {
    const c = useStyles();

    return (
        <td className={c.root}>
            {data}
        </td>
    );
}

export default StringField;