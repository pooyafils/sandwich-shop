import React,{Component} from 'react'
import Auxs from '../../hoc/Auxs'
import Sandwich from '../../component/sandwich/Sandwich'
class sandwichBuilder extends Component{
render() {
    return(
<Auxs>
    <div>sandwich</div>
    <div>bulid Controll</div>
    <Sandwich/>
</Auxs>
    )
}
}

export default sandwichBuilder;