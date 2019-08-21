import React from 'react';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class App extends React.Component {
    state = {
        inputtodo_input: '',
        items: [],
    };

    input_btn_clicked = () => {
        this.setState({
            items: [
                ...this.state.items,
                {
                    contents: this.state.inputtodo_input,
                    completed: false,
                },
            ],
        });
    };

    input_input_changed = e => {
        // console.log("input_input_changed()");
        this.setState({
            inputtodo_input: e.target.value,
        });
        // console.log(new_contents);
    };

    done_btn_clicked = e => {};

    onDeleteItem = index => {
      const { items } = this.state;
      this.setState({
        items: [...items.slice(0, index), ...items.slice(index + 1, items.length)],
      });
    }

    render() {
        return (
            <div>
                <InputTodo
                    input={this.state.inputtodo_input}
                    btn_listener={this.input_btn_clicked}
                    input_listener={this.input_input_changed}
                />

                <TodoList items={this.state.items} onDelete={this.onDeleteItem}/>
            </div>
        );
    }
}

export default App;
