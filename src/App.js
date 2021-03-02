import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Layout from './component/Layout/Layout'
import SandwichBuilder from './containers/sandwich/SandwichBulider'
class App extends Component {
  render() {


    return (
        <div className="App">
<Layout>
    <SandwichBuilder/>
</Layout>
        </div>
    );
  }
}
export default App;
