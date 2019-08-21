import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({contents, index, onDelete}) {
    return (
        <li>
            {contents}
            <button>완료</button>
            <button onClick={() => onDelete(index)}>제거</button>
        </li>
    );
}

TodoItem.propTypes = {
  contents: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired
};


export default TodoItem;
