import React, {} from 'react';
import Header from "./Header/Header";
import {useTableData} from "./hooks";
import s from './styles.module.css';

function Table({children: fields}) {
    const data = useTableData();

    // Create mapping
    const columns = fields.map(({props, type}) => ({
        source: props.source,
        title: props.title,
        isSortable: true,
        props,
        type,
    }));

    return (
        <table className={s.root}>
            <thead>
                <tr>
                    {columns.map((entry, i) =>
                        <Header entry={entry} key={i}/>
                    )}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) =>
                    <tr className={s.row} key={i}>
                        {columns.map((entry, j) =>
                            <entry.type
                                data={row[entry.source]}
                                {...entry.props}
                                key={j}
                            />
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export default Table;