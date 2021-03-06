import React from 'react'
import classes from './TheSandwich.module.css'
import SandwichIngredient from "./sandwichingridient/SandwichIngredient";
const Sandwich=(props)=>{
    let trasformedIngrident=Object.keys(props.ingredients)
    .map(igKey=>{return[...Array(props.ingredients[igKey])]
        .map((_,i)=>{
            return <SandwichIngredient key={igKey+i} type={igKey}/>})})
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[])
    if(trasformedIngrident.length===0){
        trasformedIngrident=<p>please start adding ingrident</p>
    }
    console.log(trasformedIngrident)
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
