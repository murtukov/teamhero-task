import React from 'react';
import Field from "./Field";
import Icons from "../../../common/icons";

function IconsField({data}) {
    return (
        <Field styles={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            {data.map((entry, i) => <span key={i}>{Icons[entry]}</span>)}
        </Field>
    );
}

export default IconsField;