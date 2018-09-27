import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import If from '../helpers/if'

export default props => {

  const renderRows = () => {
    const list = props.list || []
    return list.map(task => (
      <tr key={ task._id }>
        <td colSpan='9' className={ task.done ? 'markedAsDone' : '' }>{ task.description }</td>
        <td colSpan='3'>
          <If test={!task.done}>
            <IconButton style='success' icon='check'
            onClick={ () => props.handleDone(task) } />
          </If>
          <If test={task.done}>
            <IconButton style='warning' icon='undo'
            onClick={ () => props.handleUndone(task) } />
          </If>
          <If test={task.done}>
            <IconButton style='danger' icon='trash'
              onClick={ () => props.handleRemove(task) } />
          </If>
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
