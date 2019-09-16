import React from "react";

class ToDoForm extends React.Component {
  constructor() {
    super();
    //crear el estado deste componentes con los datos adentro
    this.state = {
      //crear datos
      title: "",
      responsible: "",
      description: "",
      priority: "low"
    };
    //para conectar con el evento
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //funccion para cambiar los datos anteriores
  handleInput(e) {
    //guardar valores
    const { value, name } = e.target;
    //cambiar estado o crear datos
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }
  //para submeter las informaciones
  handleSubmit(e) {
    //evita refrescar la pantalla
    e.preventDefault();
    this.props.onAddToDo(this.state);
    console.log("sending the data...");
  }
  render() {
    return (
      <nav className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Título"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Responsable"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              onChange={this.handleInput}
              className="form-control"
              placeholder="Descripción"
            />
          </div>
          <div className="form-group">
            <select
              name="priority"
              className="form-control"
              onChange={this.handleInput}
            >
              <option>low</option>
              <option>medium</option>
              <option>hight</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </nav>
    );
  }
}
export default ToDoForm;
