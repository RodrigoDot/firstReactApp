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
    this.handleDone = this.handleDone.bind(this)
    this.handleUndone = this.handleUndone.bind(this)

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
    .then(response => {
      this.handleList()
    })
  }

  handleList() {
    axios.get(`${URL}?sort=-createdAt`)
    .then(response => {
      this.setState({
        ...this.state,
        description: '',
        list: response.data
      })
    })
  }

  handleRemove(task) {
    axios.delete(`${URL}/${task._id}`)
    .then(response => {
      this.handleList()
    })
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      description: e.target.value
    })
  }

  handleDone(task) {
    axios.put(`${URL}/${task._id}`, {
      ...task,
      done: true
    })
    .then(response => {
      this.handleList()
    })
  }

  handleUndone(task) {
    axios.put(`${URL}/${task._id}`, {
      ...task,
      done: false
    })
    .then(response => {
      this.handleList()
    })
  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' pageDescription='Cadastro' />
        <TodoForm handleAdd={ this.handleAdd }
          handleChange={ this.handleChange }
          description={ this.state.description } />
        <TodoList list={ this.state.list }
          handleRemove={ this.handleRemove }
          handleUndone={ this.handleUndone }
          handleDone={ this.handleDone }
        />
      </div>
    )
  }
}
