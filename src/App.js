import React from 'react';
import { MainWindow } from './components/main_window/MainWindow';
import { ServerWindow } from './components/server_window/ServerWindow';
import { CategoryWindowList } from './components/category_window_list/CategoryWindowList';
import './utils/reset.css';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assignment_name: '',
      assignment_total: 0,
      categories: [],
      id_maker: 0,
      num_cats: 0,
      student_name: '',
      total_grade : 0
    };
    this.delete_all         = this.delete_all.bind(this);
    this.get_all            = this.get_all.bind(this);
    this.increment          = this.increment.bind(this);
    this.remove             = this.remove.bind(this);
    this.submit             = this.submit.bind(this);
    this.update_name        = this.update_name.bind(this);
    this.update_cat_grade   = this.update_cat_grade.bind(this);
    this.update_total_grade = this.update_total_grade.bind(this);
  }

  increment() {
    if (Number(this.state.assignment_total) !== 0 && Number(this.state.assignment_total) !== null) {
      let number = this.state.num_cats;
      let id = this.state.id_maker;
      number = number + 1;
      id = id + 1;
      this.setState(state => {
        const categories = state.categories.concat({id: id, name: 'Unnamed Category ' + id, grade: 0});
        return {
          categories,
          num_cats: number,
          id_maker: id
        };
      });
    } else {
      document.getElementById('assignment_total').style.border = '1px solid red';
    }
  }

  remove(id) {
    let number = this.state.num_cats;
    let categories = this.state.categories;
    number = number - 1
    categories = categories.filter(item => item.id !== id);
    this.setState({categories: categories, num_cats: number});
  }

  delete_all() {
    document.getElementById('assignment_name').value = null;
    document.getElementById('assignment_total').value = null;
    document.getElementById('assignment_total').style.border = 'none';
    document.getElementById('student_name').value = null;
    this.setState({
      assignment_name: '', 
      assignment_total: 0, 
      categories: [], 
      num_cats: 0, 
      student_name: '',
      total_grade: 0,
    });
  }

  update_name(index, name) {
    let categories = this.state.categories;
    categories[index].name = name;
    this.setState({categories: categories});
  }

  update_cat_grade(index, grade) {
    let categories = this.state.categories;
    categories[index].grade = grade;
    this.setState({categories: categories});
  }

  update_total_grade() {
    const grades =  this.state.categories.map(item => item.grade);
    const sum_grades = grades.reduce((acc, cur) => acc + cur);
    const num_grades = this.state.categories.length;
    const total_grade = sum_grades / num_grades;
    this.setState({total_grade: total_grade});
  }

  get_all() {
    const assignment_name = document.getElementById('assignment_name').value;
    const assignment_total = document.getElementById('assignment_total').value;
    const student_name = document.getElementById('student_name').value;

    document.getElementById('assignment_total').style.border = 'none';

    this.setState({
      assignment_total: assignment_total,
      assignment_name: assignment_name, 
      student_name: student_name
    });
  }

  submit() {
    if (Number(this.state.assignment_total) !== 0 && Number(this.state.assignment_total) !== null) {
      document.getElementById('assignment_total').style.border = 'none';
      console.log('Success');
    } else {
      document.getElementById('assignment_total').style.border = '1px solid red';
    }
    console.log(this.state);
  }

  render() {
    return (
      <div className="outer_container">
        <div className="ms_container">
          <MainWindow 
            increment={this.increment} 
            delete_all={this.delete_all} 
            get_all={this.get_all} 
            update_total_grade={this.update_total_grade}
            submit={this.submit}
            />
          <ServerWindow />
        </div>
          <CategoryWindowList 
            categories={this.state.categories} 
            remove={this.remove} 
            total={this.state.assignment_total}
            total_grade={this.state.total_grade} 
            update_name={this.update_name} 
            update_cat_grade={this.update_cat_grade} 
            update_total_grade={this.update_total_grade}
            />
      </div>
    );
  }
}

export default App;
