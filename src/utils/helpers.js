import {createElement} from 'react';
import Row from "../components/Row";
import StringField from "../components/fields/StringField";
import EmailField from "../components/fields/EmailField";
import TagsField from "../components/fields/TagsField";

const knownFieldComponents = {
    StringField,
    EmailField,
    TagsField
};

/**
 *
 * @param data
 * @param children
 * @return {[JSX.Element]}
 */
function helpers(data, children) {
    const typesMap = createTypesMap(children);

    const rows = [];
    for (let rowData of data) {
        rows.push(createRowElement(rowData, typesMap));
    }

    return rows;
}

/**
 *
 * @param rowData
 * @param typesMap
 * @return {JSX.Element}
 */
export function createRowElement(rowData, typesMap) {
    const fields = [];

    for (const [key, data] of Object.entries(rowData)) {
        const element = typesMap[key];

        if (!element) {
            continue;
        }

        fields.push(createElement(typesMap[key], {data}));
    }

    return (
        <Row>
            {fields}
        </Row>
    );
}

/**
 *
 * @param children
 * @return {{}}
 */
export function createTypesMap(children) {
    const map = {};

    for (let child of children) {
        // Prevent repeating columns
        if (map[child.props.source]) {
            throw new Error(`Column '${child.props.title}' defined more than once.`);
        }

        // Allow only supported field components
        if (child.type !== knownFieldComponents[child.type.name]) {
            throw new Error(`Component '${child.type.name}' is not allowed as child of 'Table' component`);
        }

        map[child.props.source] = knownFieldComponents[child.type.name];
    }

    return map;
}

export default helpers;