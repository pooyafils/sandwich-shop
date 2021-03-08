import React from 'react'
import classes from './BulidControls.module.css'
import BulidControl from "./bulidcontrol/Bulidcontrol";
const controls=[
    {label:'Salad',  type:'salad'},
    {label:'Bacon',  type:'bacon'},
    {label:'Cheese',  type:'cheese'},
    {label:'Meat',  type:'meat'}
];
const BulidControls=(props)=>{

    return(
        <div className={classes.BulidControls} >
            <p>Cutrrent price : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl=>(
                <BulidControl added={()=>props.ingredientadded(ctrl.type)}
                              removed={()=>props.ingridentRemoveed(ctrl.type)}
                              type={ctrl.type}
                              disabled={props.disabed[ctrl.type]}

                    key={ctrl.label} label={ctrl.label}/>
            ))}
            <button disabled={!props.purchaseable} className={classes.OrderButton}>ORDER NOW </button>
        </div>
    )
}
export default BulidControls;