import React, {Component} from 'react';
import './App.css';
import Draggable from 'react-draggable';

class Stickies extends Component {
    render() {
        return (
            <Draggable>
            <div class="stickie">
              <h5>test</h5>
              <p>message</p>
            </div>
            </Draggable>
        );
    }
}
    
export default Stickies;
    