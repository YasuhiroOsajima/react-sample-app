import * as React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// https://getbootstrap.com/docs/4.4/layout/overview/

const Component: React.FC = () => (
  <div className="container-fluid">
    <h4>Tasks</h4>
    <form>
      <div className="form-group">
        <label htmlFor="formTaskTitle">Title</label>
        <input className="form-control" id="formTaskTitle" />
      </div>

      <div className="form-group">
        <label htmlFor="formTaskText">Text</label>
        <textarea className="form-control" id="formTaskText" />
      </div>

      <button className="btn btn-primary">Add task</button>
      <button className="btn btn-danger">Delete all tasks</button>
    </form>

    <h4>Task list</h4>
    <table className="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Text</th>
          <th></th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>
);

export default Component;
