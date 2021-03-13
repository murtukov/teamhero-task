import React from 'react';
import {createUseStyles} from "react-jss";

function Field({children, styles}) {
    const c = useStyles(styles);

    return (
        <td className={c.root}>
            {children}
        </td>
    );
}

const useStyles = createUseStyles({
    root: styles => ({
        textAlign: "left",
        padding: 15,
        ...styles
    })
});

export default Field;