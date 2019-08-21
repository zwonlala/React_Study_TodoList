import React from 'react';

class InputTodo extends React.Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.input}
                    onChange={this.props.input_listener}
                />
                <button onClick={this.props.btn_listener}>Add</button>
            </div>
        );
    }
}

export default InputTodo;
