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
      student_name: ''
    };
    this.delete_all  = this.delete_all.bind(this);
    this.get_total   = this.get_total.bind(this);
    this.increment   = this.increment.bind(this);
    this.remove      = this.remove.bind(this);
    this.test        = this.test.bind(this);
    this.update_name = this.update_name.bind(this);
  }

  increment() {
    let number = this.state.num_cats;
    let id = this.state.id_maker;
    
    number = number + 1;
    id = id + 1;
    this.setState(state => {
      const categories = state.categories.concat({id: id, name: 'Unnamed Category ' + id});
      return {
        categories,
        num_cats: number,
        id_maker: id
      };
    });
  }

  remove(id) {
    let number = this.state.num_cats;
    let categories = this.state.categories;
    number = number - 1
    categories = categories.filter(item => item.id !== id);
    this.setState({categories: categories, num_cats: number});
  }

  delete_all() {
    this.setState({categories: [], num_cats: 0})
  }

  update_name(index, name) {
    let categories = this.state.categories;
    categories[index].name = name;
    this.setState({categories: categories});
  }

  get_total(event) {
    this.setState({assignment_total: event.target.value});
  }

  test() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="outer_container">
        <div className="ms_container">
          <MainWindow increment={this.increment} delete_all={this.delete_all} get_total={this.get_total} test={this.test}/>
          <ServerWindow />
        </div>
          <CategoryWindowList categories={this.state.categories} remove={this.remove} total={this.state.assignment_total} update_name={this.update_name}/>
      </div>
    );
  }
}

export default App;
