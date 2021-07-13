import React, {Component} from 'react';
import IntroSection from '../sections/IntroSection';
import './home.scss';

export default class HomePage extends Component{
    render(){
        return (
            <main className="homepage homepage--size homepage--theme">
                <IntroSection />
            </main>
        )
    }
}