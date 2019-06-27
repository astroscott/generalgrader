import React from 'react';
import { ReactComponent as DeleteButton } from '../../buttons/deleteButtonTest.svg';
import './CategoryWindow.css';

export class CategoryWindow extends React.Component {
    
    render() {
        return (
        <div className="child_window">
            <div className="upper_input">
                <input className="upper_input text_left" type="text" placeholder={`Rename Category ${this.props.num}`} />
                <DeleteButton className="button_small child_delete_button" onClick={this.props.del_self}/>
            </div>
            <div className="child_input_container">
                <input className="small_input" type="number" id="weight1" name="weight1" placeholder="Student Score" />
                <p className="divider">/</p>
                <p className="divider" id="score">{this.props.total}</p>
            </div>
        </div>
        );
    }
}