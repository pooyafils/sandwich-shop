import React,{Component} from 'react'
import Auxs from '../../hoc/Auxs'
import Sandwich from '../../component/sandwich/Sandwich'
import BulidControls from "../../component/sandwich/bulidcontrols/BulidControls";
const INGREDIENT_PRICE={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class sandwichBuilder extends Component{
  /*  constructor(props) {
        super(props);
        this.state={...}
    }*/
    state={
        ingredient:{
           salad:0,
            bacon:0,
            cheese:3,
            meat:0
        },
        totalPrice:4
    }

   addIngridentHandler=(type)=> {
       const oldCount = this.state.ingredient[type]
       const updatedCount = oldCount + 1;
       const updatedIngrident = {...this.state.ingredient};

        updatedIngrident[type]=updatedCount;
const priceAddtion=INGREDIENT_PRICE[type]
        const oldPrice=this.state.totalPrice;
const newPrice=oldPrice+priceAddtion;
       this.setState({totalPrice:newPrice, ingredient:updatedIngrident});

    }

render() {
    return(
<Auxs>

    <div>sandwich</div>
    <div>bulid Controll</div>
    <Sandwich ingredients={this.state.ingredient}/>
    <BulidControls ingredientadded={this.addIngridentHandler} />
</Auxs>
    )
}
}

export default sandwichBuilder;