import React from 'react'
import classes from './BulidControl.module.css'
const BulidControl=(props)=>{

    return(
        <div className={classes.BuildControl}>
          <div className="Label">{props.label}</div>
            <button className="Less" onClick={props.removed}
                    disabled={props.disabled}>less</button>
            <button className="More" onClick={props.added}>more</button>
        </div>
    )

}

export default BulidControl;