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
    this.handleRemove = this.handleRemove.bind(this)

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
      console.log(response.data)
      console.log(response.status)
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
      console.log(this.state.list)
    })
  }

  handleRemove(id) {
    console.log(id)

    axios.delete(`${URL}/${id}`)
    .then(response => {
      console.log(this.state.list)
      this.handleList()
    })
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      description: e.target.value
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
          handleRemove={ this.handleRemove } />
      </div>
    )
  }
}
