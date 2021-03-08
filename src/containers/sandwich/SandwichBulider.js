import React,{Component} from 'react'
import Auxs from '../../hoc/Auxs'
import Sandwich from '../../component/sandwich/Sandwich'
import BulidControls from "../../component/sandwich/bulidcontrols/BulidControls";
import BulidControl from "../../component/sandwich/bulidcontrols/bulidcontrol/Bulidcontrol";
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
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchaseable:false
    }
updatePurchaseState(ingridents){
        // const ingrident={...this.state.ingredient}
        const sum=Object.keys(ingridents).map(igkey=>{return ingridents[igkey]})
            .reduce((sum,el)=>{return sum+el},0)
    this.setState({purchaseable:sum>0})
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
       this.updatePurchaseState(updatedIngrident);

    }
    removeIngridientHandler=(type)=>{

        const oldCount = this.state.ingredient[type]
        if(oldCount<=0){
            return ;
        }
        const updatedCount = oldCount - 1;
        const updatedIngrident = {...this.state.ingredient};

        updatedIngrident[type]=updatedCount;
        const priceDedution=INGREDIENT_PRICE[type]
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice-priceDedution;
        this.setState({totalPrice:newPrice, ingredient:updatedIngrident});
        this.updatePurchaseState(updatedIngrident);


    }

render() {
        const disableInfo={
            ...this.state.ingredient
        };
        for(let key in disableInfo){
            disableInfo[key]= disableInfo[key]<=0
        }
    return(
<Auxs>

    <div>sandwich</div>
    <div>bulid Controll</div>
    <Sandwich ingredients={this.state.ingredient}/>
    <BulidControls ingridentRemoveed={this.removeIngridientHandler}
        ingredientadded={this.addIngridentHandler}
    disabed={disableInfo}
                   purchaseable={this.state.purchaseable}
    price={this.state.totalPrice}/>
</Auxs>
    )
}
}

export default sandwichBuilder;