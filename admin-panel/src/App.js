import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import * as $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Components/Header';


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      dataSent:false,
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.setState({
          dataSent:true,
    })
  }


  render(){
      return (
          <div className="App">
            <header className="App-header">

              {!this.state.dataSent &&(<div className="container">
                <h2>Stacked form</h2>
                <form action="action_page.php" method="get">
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text"
                           className="form-control"
                           id="email"
                           placeholder="Enter email"
                           name="email"
                           value={this.state.email}
                           onChange={e=>this.setState({email:e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text"
                           value={this.state.name}
                           className="form-control"
                           id="name"
                           placeholder="Enter name"
                           name="name"
                           onChange={e=>this.setState({name: e.target.value})}

                    />
                  </div>
                  <div className="form-group form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                  </div>
                  <button type="submit" value="Send" onClick={e => this.onSubmit(e)} className="btn btn-primary">Submit</button>
                </form>
              </div>)}

              {this.state.dataSent&&
              (

                  <div>
                    <p>Welcome {this.state.name}!</p><br/>
                    <p>Your email is {this.state.email}.</p>
                    <Header/>
                  </div>


              )
            }
            </header>
          </div>
      );
    }


}

export default App;
