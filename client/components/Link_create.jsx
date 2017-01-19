import React from 'react'

export default React.createClass ({
  render () {
    return (
      <form>
        <div className="form-group">
          <label>Link to shorten</label>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Shorten!</button>
      </form>
    )
  }
})
