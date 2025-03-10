import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

const App = () => {
    console.log('App rendered')
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'}/>
            <Accordion titleValue={'Users'}/>
            Article 2
            <Rating value={4}/>
            <Rating value={2}/>
            <Rating value={5}/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;

