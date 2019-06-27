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
                        <input className="normal_input" type="text" id="student_name" name="student_name" placeholder="Student Name" />
                        <input className="normal_input" type="text" id="assignment_name" name="assignment_name" placeholder="Assignment Name"/>
                        <input className="normal_input" type="number" id="assignment_value" name="assignment_value" placeholder="Total Points For Assignment" onKeyUp={this.props.return_total}/>
                    </div>
                    <div className="button_container">
                    < Add className="button_large" onClick={this.props.inc_cat} />
                    < Delete className="button_large" onClick={this.props.del_cat} />
                    < Submit className="button_large" onClick={this.props.test}/>
                    </div>  
                </div>
            </div>
        );
    }
}