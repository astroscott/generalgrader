import React from 'react';
import {ReactComponent as AddButton} from '../../buttons/addButtonTest.svg';
import './ServerWindow.css';

export class ServerWindow extends React.Component {
    render() {
        return (
            <div id="server_window">
                <div className="upper_tool_bar text_left">
                    <p>Saved Configurations</p>
                        <AddButton className="button_small" />
                    </div>
                <div id="server_area">No saved config</div>
            </div>
        );
    }
}