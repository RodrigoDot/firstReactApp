import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
  <div className="todoForm" role="form">
    <Grid cols='7 9 9 10'>
      <input id='description' className="form-control"
        onChange={ props.handleChange }
        value={ props.description } placeholder="Tarefa">
      </input>
    </Grid>
    <Grid cols='5 3 3 2'>
      <IconButton style='primary' icon='plus'
        onClick={ props.handleAdd } />
      <IconButton style='info' icon='search'
        onClick={ props.handleSearch } />
      <IconButton style='light' icon='eraser'
        onClick={ props.handleClear } />
    </Grid>
  </div>
)
