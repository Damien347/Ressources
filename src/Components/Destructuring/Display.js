import React, { Component } from 'react';

import Singers from './Singers';
import SingersClass from './SingersClass';

class Display extends Component {
    render() {
        return (
            <div>
                <Singers name="Alison Tricot" age="27" />
                <Singers name="Damien Onolfo" age="29"/>
                <Singers name="Laurie Darmon" age="32"/>


               
                <SingersClass name="Alison Tricot" age="27" />
                <SingersClass name="Damien Onolfo" age="29"/>
                <SingersClass name="Laurie Darmon" age="32"/>
            </div>
        );
    }
}

export default Display;