import React,{Component} from 'react'
import Auxs from '../../hoc/Auxs'
import Sandwich from '../../component/sandwich/Sandwich'
import BulidControls from "../../component/sandwich/bulidcontrols/BulidControls";
class sandwichBuilder extends Component{
  /*  constructor(props) {
        super(props);
        this.state={...}
    }*/
    state={
        ingredient:{
           salad:2,
            bacon:0,
            cheese:0,
            meat:0
        }
    }
render() {
    return(
<Auxs>
    <div>sandwich</div>
    <div>bulid Controll</div>
    <Sandwich ingredients={this.state.ingredient}/>
    <BulidControls/>
</Auxs>
    )
}
}

export default sandwichBuilder;