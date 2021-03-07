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
            {controls.map(ctrl=>(
                <BulidControl key={ctrl.label} label={ctrl.label}/>
            ))}
        </div>
    )
}
export default BulidControls;