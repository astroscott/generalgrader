import React from 'react';
import { CategoryWindow } from '../category_window/CategoryWindow'

export class CategoryWindowList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.cat_list.map( (item) => {
                    return <CategoryWindow key={item} num={item} total={this.props.total} del_self={this.props.del_self}/> 
                })}
            </ul>
        );
    }
}