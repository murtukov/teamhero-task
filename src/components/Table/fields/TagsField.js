import React from 'react';
import {createUseStyles} from "react-jss";
import Field from "./Field";

function TagsField({data}) {
    const c = useStyles();

    return (
        <Field>
            {data.map((tag, i) =>
                <span className={c.tag} key={i}>
                    {tag}
                </span>
            )}
        </Field>
    );
}

const useStyles = createUseStyles({
    tag: {
        backgroundColor: 'rgb(254, 240, 216)',
        padding: 5,
        borderRadius: 5,
        marginRight: 7
    }
});

export default TagsField;