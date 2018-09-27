import React, {
  Component
} from 'react'

import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
  constructor(props) {
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleList = this.handleList.bind(this)

    this.handleList()

    this.state = {
      description: '',
      list: []
    }
  }

  handleAdd() {
    const description = this.state.description

    axios.post(URL, {
      description
    })
    .then(function(response){
      console.log(response.data); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });
  }

  // handleList() {
  //   axios.get(URL)
  //   .then(function(response){
  //     console.log(response.data); // ex.: { user: 'Your User'}
  //     console.log(response.status); // ex.: 200
  //   });
  // }

  handleChange(e) {
    this.setState({
      ...this.state,
      description: e.target.value
    })
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' pageDescription='Cadastro'/>
        <TodoForm handleAdd={ this.handleAdd } handleChange={ this.handleChange }
          description={ this.state.description } />
        <TodoList />
      </div>
    )
  }
}
