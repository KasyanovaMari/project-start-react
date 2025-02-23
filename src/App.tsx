import React from 'react';
import logo from './logo.svg';
import './App.css';
import {log} from "node:util";

const App = () => {
    console.log('App rendered')
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function AppTitle() {
    return <>This is APP component</>
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function Star() {
    console.log('Star rendered')
    return (
        <div>star</div>
    )
}

function Accordion() {
    console.log('Accordion rendered')
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    );
}

function AccordionTitle() {
    console.log('AccordionTitle rendering')
    return (
        <h3>Menu</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default App;
