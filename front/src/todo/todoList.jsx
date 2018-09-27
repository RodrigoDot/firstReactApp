import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(task => (
      <tr key={ task._id }>
        <td colSpan='9'>{ task.description }</td>
        <td colSpan='3'><IconButton style='danger' icon='trash'
          onClick={ () => props.handleRemove(task._id) } />
        </td>
      </tr>
    ))
  }

  return (
    <Grid cols='12 12 12'>
      <hr />
      <table className='table table-hover'>
        <thead>
          <tr>
            <th colSpan='9'>Descrição</th>
            <th colSpan='3'>Ações</th>
          </tr>
        </thead>
        <tbody>
          { renderRows() }
        </tbody>
      </table>
    </Grid>
  )
}
