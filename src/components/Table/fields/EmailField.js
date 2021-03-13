import React from 'react';
import StringField from "./StringField";

function EmailField({data, ...rest}) {
    return (
        <StringField data={data} {...rest}/>
    );
}

export default EmailField;