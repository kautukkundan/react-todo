import React, { Component } from 'react';

class Title extends Component {
    render() { 
        return ( 
            <div>
                <div className='title-container__title'>What's on your schedule?</div>
                <div className='title-container__subtitle'>{this.props.count}</div>
                <div className='title-container__subsubtitle'>Tasks Left</div>

            </div>
         );
    }
}
 
export default Title;