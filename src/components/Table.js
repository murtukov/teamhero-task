import React from 'react';
import PropTypes from 'prop-types';
import helpers, {createRowElement, createTypesMap} from "../utils/helpers";
import {createUseStyles} from "react-jss";

Table.propTypes = {
    data: PropTypes.object.isRequired,
    isDraggable: PropTypes.bool
};

function Table({data, children}) {
    const c = useStyles();

    function createHeader() {
        const fields = [];

        for (let child of children) {
            fields.push(
                <th>
                    {child.props.title || child.props.source}
                </th>
            );
        }

        return <tr>{fields}</tr>
    }

    const typesMap = createTypesMap(children);

    const rows = [];
    for (let rowData of data) {
        rows.push(createRowElement(rowData, typesMap));
    }


    const header = createHeader();

    return (
        <table className={c.root}>
            <thead>
                {header}
            </thead>
            <tbody>
                {rows}
                {rows.map(row =>
                    <tr>
                        cells.map(cell => <td>{'test'}</td>)
                    </tr>
                )}
            </tbody>
        </table>
    );
}

const useStyles = createUseStyles({
    root: {
        backgroundColor: "white",
        width: 1200
    }
});

export default Table;