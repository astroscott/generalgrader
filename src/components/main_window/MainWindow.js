import React from 'react';
import './MainWindow.css';
import { ReactComponent as Add } from '../../buttons/addButtonTest.svg';
import { ReactComponent as Delete } from '../../buttons/deleteButtonTest.svg';
import { ReactComponent as Submit } from '../../buttons/submitButtonTest.svg';

export class MainWindow extends React.Component {
    render() {
        return (
            <div className="window" id="main_window">
                <div className="upper_tool_bar text_left"><p>General Grader Web Node</p></div>
                <div className="outer_input_container">
                    <div className="input_container"> 
                        <input className="normal_input" type="text" id="student_name" name="student_name" placeholder="Student Name" onKeyUp={this.props.get_all}/>
                        <input className="normal_input" type="text" id="assignment_name" name="assignment_name" placeholder="Assignment Name" onKeyUp={this.props.get_all}/>
                        <input className="normal_input" type="number" id="assignment_total" name="assignment_total" placeholder="Total Points For Assignment" onKeyUp={this.props.get_all}/>
                    </div>
                    <div className="button_container">
                    < Add className="button_large" onClick={this.props.increment} />
                    < Delete className="button_large" onClick={this.props.delete_all} />
                    < Submit className="button_large" onClick={this.props.submit}/>
                    </div>  
                </div>
            </div>
        );
    }
}