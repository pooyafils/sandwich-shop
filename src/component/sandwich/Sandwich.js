import React from 'react'
import classes from './TheSandwich.module.css'
import SandwichIngredient from "./sandwichingridient/SandwichIngredient";
const Sandwich=(props)=>{
 return(
     <div className={classes.Burger}>
         <SandwichIngredient type="bread-top"/>
         <SandwichIngredient type="meat"/>
         <SandwichIngredient type="cheese"/>
         <SandwichIngredient type="bread-bottom"/>

     </div>
 )
}
export default Sandwich;
