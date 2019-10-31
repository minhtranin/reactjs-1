import React, {Component} from 'react'
import { createStore } from 'redux';






class Postm extends Component {
   
    render(){
        return(
            <div>
                <label> this is post m</label>
                <input ref="postm"  type="text" placeholder="postm"/>
            </div>

        )
    }
}
export default Postm 