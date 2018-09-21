import React from 'react'

export default props => (
  <form className="navbar-form navbar-default" role="add">
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Tarefa" />
    </div>
    <button type="submit" className="btn btn-primary">
      <i className="fa fa-plus" aria-hidden="true"></i>
    </button>
  </form>
)
