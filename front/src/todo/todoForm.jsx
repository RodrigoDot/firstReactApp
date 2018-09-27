import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
  <div className="todoForm" role="form">
    <Grid cols='12 9 9'>
      <input id='description' className="form-control"
        placeholder="Tarefa"></input>
    </Grid>
    <Grid cols='12 3 3'>
      <IconButton style='primary' icon='plus' />
    </Grid>
  </div>
)
