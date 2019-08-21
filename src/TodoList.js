import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    
  render() {
    const items = this.props.items;
    return (
      <ul>
        {items.map((item, index) => (
          <TodoItem 
            contents={item.contents} 
            completed={item.completed} 
            onDelete={this.props.onDelete}
            key={index}
            index={index} />
        ))}
      </ul>
    )
  }
}


export default TodoList;