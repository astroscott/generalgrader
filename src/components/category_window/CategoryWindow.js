import React from 'react';
import { ReactComponent as DeleteButton } from '../../buttons/deleteButtonTest.svg';
import './CategoryWindow.css';

export class CategoryWindow extends React.Component {
    constructor(props) {
        super(props);
        this.del_self = this.del_self.bind(this);
        this.update = this.update.bind(this);
    }

    del_self() {
        this.props.remove(this.props.id);
    }

    update(event) {
        let name = event.target.value;
        this.props.update_name(this.props.index, name);
    }

    render() {
        return (
        <div className="child_window">
            <div className="upper_input">
                <input className="upper_input text_left" type="text" placeholder={this.props.name} onKeyUp={this.update}/>
                <DeleteButton className="button_small child_delete_button" onClick={this.del_self}/>
            </div>
            <div className="child_input_container">
                <input className="small_input" type="number" id="student_score" name="student_score" placeholder="Student Score" />
                <p className="divider">/</p>
                <input className="small_input" type="number" id="weight" name="weight" placeholder="Weight" />
                <p className="divider" id="score">{this.props.total}</p>
            </div>
        </div>
        );
    }
}