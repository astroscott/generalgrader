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
                    grade={category.grade}
                    remove={this.props.remove}
                    total={this.props.total}
                    total_grade={this.props.total_grade}
                    update_name={this.props.update_name}
                    update_cat_grade={this.props.update_cat_grade}
                    update_total_grade={this.props.update_total_grade}
                    />
                })}
            </ul>
        );
    }
}