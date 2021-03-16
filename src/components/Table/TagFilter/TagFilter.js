import React, {useEffect, useState} from 'react';
import {Icon} from "@blueprintjs/core";
import styles from './styles.module.css';

function TagFilter(props) {
    const [tags, setTags] = useState([]);
    const [showInput, setShowInput] = useState(false);

    function handleAddClick() {
        setShowInput(true);
    }

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                Filter by skill
            </div>
            <div className={styles.tags}>
                { tags.map(t => <Tag text={t}/>) }
                { showInput && <Input/> }
                <span className={styles.addBtn} onClick={handleAddClick}>
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
    function handleKeypress(event) {
        if(event.key === 'Enter'){
            console.log('enter press here!')
        }
    }

    return (
        <input
            type='text'
            className={styles.input}
            onKeyPress={handleKeypress}
        />
    );
}

export default TagFilter;