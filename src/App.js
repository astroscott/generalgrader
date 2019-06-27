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
      num_cat: 0,
      cat_list: [],
      total: 0
    };
    this.inc_cat = this.inc_cat.bind(this);
    this.del_cat = this.del_cat.bind(this);
    this.get_total = this.get_total.bind(this);
    this.del_single_cat = this.del_single_cat.bind(this);
    this.test = this.test.bind(this);
  }

  num_cat_to_array(num) {
    let array = [];
    for (let i = 0; i < num; i++) {
      array.push(i);
    }
    return array;
  }

  inc_cat() { 
    let num = this.state.num_cat;
    num = num + 1;
    this.setState({num_cat: num, cat_list: this.num_cat_to_array(num)});
  }

  del_cat() {
    this.setState({num_cat: 0, cat_list: []})
  }

  del_single_cat(num) {
    let cat_list = this.state.cat_list;
    let num_cat = this.state.num_cat;
    cat_list.pop(num);
    num_cat = num_cat - 1;
    this.setState({num_cat: num_cat, cat_list: cat_list});
  }

  get_total(event) {
    this.setState({total: event.target.value});
  }

  test() {
    console.clear();
    console.log(`cat_list ${this.state.cat_list}`);
    console.log(`Number of Categories: ${this.state.num_cat}`);
    console.log(`Assignment Total: ${this.state.total}`);
  }

  render() {
    return (
      <div className="outer_container">
        <div className="ms_container">
          <MainWindow inc_cat={this.inc_cat} del_cat={this.del_cat} return_total={this.get_total} test={this.test}/>
          <ServerWindow />
        </div>
          <CategoryWindowList del_self={this.del_single_cat} num_cat={this.state.num_cat} cat_list={this.state.cat_list} total={this.state.total}/>
      </div>
    );
  }
}

export default App;
