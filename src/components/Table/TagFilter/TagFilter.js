import React, {useState} from 'react';
import {Icon} from "@blueprintjs/core";
import s from './styles.module.css';
import {useTagsFilter} from "../TableProvider";

function TagFilter() {
    const [tags, setTags] = useState([]);
    const [showInput, setShowInput] = useState(false);
    const setFilterTags = useTagsFilter();

    function handleAddClick() {
        setShowInput(true);
    }

    function handleKeyPress(event) {
        if(event.key !== 'Enter'){
            return;
        }

        if (event.target.value.length === 0) {
            return;
        }

        const newTags = [...tags, event.target.value];

        setTags(newTags);
        setFilterTags(newTags);
        setShowInput(false);
    }

    function handleDeleteClick(index) {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
        setFilterTags(newTags);
    }

    function handleCleanClick() {
        setTags([]);
        setShowInput(false);
        setFilterTags([]);
    }

    const renderInput = () => (
        <span className={s.inputWrapper}>
            <input
                type='text'
                className={s.input}
                onKeyPress={handleKeyPress}
                autoFocus
            />
            <Icon
                icon='cross'
                onClick={() => setShowInput(false)}
            />
        </span>
    );

    const renderTag = (text, i) => (
        <div className={s.tag}>
            <span>
                <span>{text}</span>
                <Icon
                    icon='delete'
                    className={s.tagDeleteBtn}
                    color='#444F5F'
                    onClick={() => handleDeleteClick(i)}
                />
            </span>
        </div>
    );

    return (
        <div className={s.root}>
            <div className={s.header}>
                <div>Filter by skill</div>
                {tags.length > 0 &&
                    <div onClick={handleCleanClick} title='Remove all tags'>
                        <Icon
                            icon='trash'
                            color='#6a748c'
                            iconSize={13}
                        />
                    </div>
                }
            </div>
            <div className={s.tags}>
                {tags.map(renderTag)}

                {showInput
                    ? renderInput()
                    : (
                        <span
                            className={s.addBtn}
                            onClick={handleAddClick}
                            title='Add tag'
                        >
                            <Icon icon="add" color='#F2F4F9'/>
                        </span>
                    )
                }
            </div>
        </div>
    );
}

export default TagFilter;