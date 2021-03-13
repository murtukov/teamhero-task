import React from 'react';
import Field from "./Field";

function StringField({data, bold = false}) {
    let styles = {};

    if (bold) {
        styles.fontWeight = 'bold';
    }

    return (
        <Field styles={styles}>
            {data}
        </Field>
    );
}

export default StringField;