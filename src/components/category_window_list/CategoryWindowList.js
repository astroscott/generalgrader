import React from 'react';
import { CategoryWindow } from '../category_window/CategoryWindow'

export class CategoryWindowList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.categories.map((category, index) => {
                    return <CategoryWindow
                    key={category.id}
                    id={category.id}
                    index={index}
                    name={category.name}
                    remove={this.props.remove}
                    total={this.props.total}
                    update_name={this.props.update_name}
                    />
                })}
            </ul>
        );
    }
}