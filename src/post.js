import React, {Component} from 'react';
import Postm from './postm';

class Post extends Component {
        showRef(){
            console.log(this.refs.name.value);
        }
       
    constructor(props){
        
        super(props);
        this.showRef = this.showRef.bind(this);
        this.state= {
            type:"upload"
        }
        
    }
    render(){
        return(
        
        <div>
           <form action="" method="POST" >
               <legend>modify name</legend>
               <div className="form-group">
                   <label htmlor=""> new name</label>
                   <input ref="name" type="NclassNametext" className="form-control" id="" placeholder="Input field"/>
               </div>
               
               <span className="badge" onClick={this.showRef}>Ref {this.props.sty}</span>
               
               <button   className="btn btn-primary">Submit</button>
           </form>
           {this.state.type}
           <Postm ref="post2"></Postm>
        </div>
        
        )
    }
}
export default Post;