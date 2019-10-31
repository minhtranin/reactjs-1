import React, {Component} from 'react';

import './App.css';
import {table} from 'reactstrap';
import Post from './post';

class App extends Component{
  componentDidMount(){
    console.log('anytime even run')
  }
  del = (i)=>{
    this.refs.idP.showRef();
     console.log(this.refs.idP.refs.post2.refs.postm.value)
  }
  
  constructor(props){
    super(props);
  this.state = {
    name: this.props.testpro,
    phone: '09999'
  }
  
}
  render(){
    return (
      <div className="container">
        <h1>Customers List</h1>
        <div>
          <table className="table">
          <thead>
            <tr>
              <th scope="col">code</th>
              <th scope="col">name</th>
              <th scope="col">phone</th>
              <th scope="col">mail</th>
              <th scope="col">address</th>
              <th scope="col">modify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.state.name}</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Mark</td>
              <td><button className="btn btn-danger" onClick={this.del}> del </button>
                  <button className="btn btn-primary">update</button>
                  <button className="btn btn-success">add</button>
              </td>              
            </tr>
            
          </tbody>
        </table>
     </div>
     <Post ref="idP" sty='ngu'/>
     </div>
    )
  }
}

export default App;
