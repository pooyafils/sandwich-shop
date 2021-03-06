import React,{Component} from 'react'
import Auxs from '../../hoc/Auxs'
import Sandwich from '../../component/sandwich/Sandwich'
class sandwichBuilder extends Component{
  /*  constructor(props) {
        super(props);
        this.state={...}
    }*/
    state={
        ingredient:{
            salad:1,
            bacon:1,
            cheese:2,
            meat:2
        }
    }
render() {
    return(
<Auxs>
    <div>sandwich</div>
    <div>bulid Controll</div>
    <Sandwich ingredients={this.state.ingredient}/>
</Auxs>
    )
}
}

export default sandwichBuilder;