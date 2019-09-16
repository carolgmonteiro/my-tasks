import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import Navigation from "./components/Navigation.js";
//importar archivos json
import { toDos } from "./toDos.json";
import ToDoForm from "./components/ToDoForm";

class App extends React.Component {
  constructor() {
    super();
    //crear el estado deste componentes con los datos adentro
    this.state = {
      //busca los datos
      toDos
    };
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  //buton para borrar tarea desde el indice con filter que recorre a los elementos y genera un nuevo arreglo
  removeToDo(index) {
    if (window.confirm("está seguro que desea eliminar?")) {
      this.setState({
        toDos: this.state.toDos.filter((e, i) => {
          return i !== index;
        })
      });
    }
  }

  //vay recibir los datos nuevos
  handleAddToDo(toDo) {
    this.setState({
      toDos: [...this.state.toDos, toDo]
    });
  }
  render() {
    //antes de imprimir a tela, tem que buscar os dados en json
    const toDos = this.state.toDos.map((toDo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{toDo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {toDo.priority}
              </span>
            </div>
            <div className="card-body">
              <h5>{toDo.description}</h5>
              <p>
                <mark>{toDo.responsible}</mark>
              </p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeToDo.bind(this, i)}
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      //react so imprime 1 etiqueta por vez (DIV)
      //ClassName es lo mismo que class de css (para evitar confusion)
      <div className="App">
        <nav className="navbar navbar dark bg-dark">
          <span>
            {" "}
            <img src={logo} className="App-logo" alt="logo" />
          </span>
          <a href="./" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.toDos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-4 text-center">
              <ToDoForm onAddToDo={this.handleAddToDo}></ToDoForm>
            </div>

            <div className="col-md-8">
              <div className="row">{toDos}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
