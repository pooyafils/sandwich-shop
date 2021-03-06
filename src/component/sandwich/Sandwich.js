import React from 'react'
import classes from './TheSandwich.module.css'
import SandwichIngredient from "./sandwichingridient/SandwichIngredient";
const Sandwich=(props)=>{
    const trasformedIngrident=Object.keys(props.ingredients)
    .map(igKey=>{return[...Array(props.ingredients[igKey])].map((_,i)=>{ return <SandwichIngredient key={igKey+i} type={igKey}/>})})
 return(
     <div className={classes.Burger}>
         <SandwichIngredient type="bread-top"/>
      {/*   <SandwichIngredient type="meat"/>
         <SandwichIngredient type="cheese"/>*/}
         {trasformedIngrident}
         <SandwichIngredient type="bread-bottom"/>

     </div>
 )
}
export default Sandwich;
