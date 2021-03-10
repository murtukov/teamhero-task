import React from 'react';
import PropTypes from 'prop-types';
import types from './cell-types/types';
import TagsCell from "./cell-types/TagsCell/TagsCell";

Cell.propTypes = {
    type: PropTypes.oneOf(Object.values(types)),
};

function Cell({type}) {
    const resolveType = () => {
        switch (type) {
            case types.TAGS: return TagsCell;
            default: return StringCell;
        }
    }

    return (
        <div>
            {resolveType()}
        </div>
    );
}

export default Cell;