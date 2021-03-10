import React from 'react';
import PropTypes from 'prop-types';

Table.propTypes = {
    isDraggable: PropTypes.bool
};

function Table({
   isDraggable = false,
   children
}) {
    return (
        <div>
            {children}
        </div>
    );
}

export default Table;