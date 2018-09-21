import React from 'react'

export default props => (
  <form className="todoForm" role="form">
    <div className="col-xs-12 col-sm-9 com-md-9">
      <input id='description' type="text" className="form-control"
        placeholder="Tarefa"></input>
    </div>
    <div className="col-xs-12 col-sm-3 com-md-3">
      <button type="button" className="btn btn-primary">
        <i className="fa fa-plus"></i>
      </button>
    </div>
  </form>
)
