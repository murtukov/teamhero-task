import React from 'react';
import Field from "./Field";
import {createUseStyles} from "react-jss";

function ImageField({data, shape = 'circle'}) {
    const c = useStyles();

    return (
        <Field>
            <img src={data} alt='avatar' width={35} height={35} className={c.img}/>
        </Field>
    );
}

const useStyles = createUseStyles({
    img: {
        borderRadius: 50
    }
});

export default ImageField;