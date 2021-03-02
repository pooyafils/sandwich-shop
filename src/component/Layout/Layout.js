import React from 'react';
import  Auxs from '../../hoc/Auxs';
import classs from './LayoutStyle.module.css'
const Layout =(props)=> {
    return (
        <Auxs>
        <div>ToolBar,Sidebar,BACKdROP</div>

        <main className={classs.content}>
            {props.children}
        </main>
        </Auxs>
    )
}
export default Layout;