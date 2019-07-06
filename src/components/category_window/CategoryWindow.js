import React from 'react';
import { ReactComponent as DeleteButton } from '../../buttons/deleteButtonTest.svg';
import './CategoryWindow.css';

export class CategoryWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grade: 0
        }
        this.calculate_grade = this.calculate_grade.bind(this);
        this.del_self = this.del_self.bind(this);
        this.update = this.update.bind(this);
    }

    calculate_grade() {
        let student_score = document.getElementById('student_score_' + this.props.id).value;
        let weight = document.getElementById('weight_' + this.props.id).value;
        if (weight !== 0) {
            const grade = student_score / weight;
            this.props.update_cat_grade(this.props.index, grade);
            this.props.update_total_grade();
        }
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
                <input className="small_input" type="number" id={"student_score_" + this.props.id} name="student_score" placeholder="Student Score" onKeyUp={this.calculate_grade}/>
                <p className="divider">/</p>
                <input className="small_input" type="text" id={"weight_" + this.props.id} name="weight" placeholder="Weight" onKeyUp={this.calculate_grade}/>
                <p className="divider" id="score">Category Grade: {(this.props.grade * 100).toFixed(2)}%</p>
                <p className="divider" id="score">Total Grade: {(this.props.total_grade * 100).toFixed(2)}%</p>

            </div>
        </div>
        );
    }
}