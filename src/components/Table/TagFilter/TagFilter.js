import React, {useEffect, useState} from 'react';
import {createUseStyles} from "react-jss";
import {Icon} from "@blueprintjs/core";

function TagFilter(props) {
    const c = useStyles();
    const [tags, setTags] = useState([]);
    const [showInput, setShowInput] = useState(false);

    function handleAddClick() {
        setShowInput(true);
    }

    return (
        <div className={c.root}>
            <div className={c.header}>
                Filter by skill
            </div>
            <div className={c.tags}>
                { tags.map(t => <Tag text={t}/>) }
                { showInput && <Input/> }
                <span className={c.addBtn} onClick={handleAddClick}>
                    <Icon icon="add" color='#F2F4F9'/>
                </span>
            </div>
        </div>
    );
}

const Tag = ({text}) => (
    <div>
        <span>{text}</span>
        <span>X</span>
    </div>
);

function Input() {
    const c = useStyles();

    function handleKeypress(event) {
        if(event.key === 'Enter'){
            console.log('enter press here!')
        }
    }

    return (
        <input
            type='text'
            className={c.input}
            onKeyPress={handleKeypress}
        />
    );
}

const useStyles = createUseStyles({
    root: {
        display: "flex",
        flexDirection: "column"
    },
    header: {
        textTransform: "uppercase",
        fontSize: 13,
        fontFamily: 'montserrat'
    },
    tags: {
        display: "flex"
    },
    addBtn: {
        backgroundColor: "#444F5F",
        borderRadius: 3,
        cursor: "pointer",
        height: 18,
        padding: [2, 3]
    },
    input: {
        border: [1, 'solid', '#ccc'],
        borderRadius: 5,
        padding: 5,

        '&:focus': {
            border: "unset"
        }
    }
});

export default TagFilter;