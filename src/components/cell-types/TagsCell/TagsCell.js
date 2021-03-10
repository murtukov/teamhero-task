import React from 'react';
import PropTypes from 'prop-types';
import Tag from "./Tag";

TagsCell.propTypes = {
    data: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]))
};

function TagsCell({data = []}) {
    return (
        <div>
            {data.map(tag => <Tag text={tag}/>)}
        </div>
    );
}

export default TagsCell;