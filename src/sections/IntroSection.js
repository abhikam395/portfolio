import React, {Component} from 'react';
import './intro.scss';

const image = "https://www.pngfind.com/pngs/m/546-5463443_man-pointing-man-victory-png-transparent-png.png";

export default class IntroSection extends Component{
    render(){
        return (
            <section className="introsection introsection--size introsection--theme">
                <div className="introsection__left introsection__left--size introsection__left--theme">
                </div>
                <div className="introsection__right introsection__right--size introsection__right--theme">
                </div>
                <div className="introsection__content introsection__content--size center">
                    <div className="introsection__content-left introsection__content-left--size">
                        <h5 className="introsection__title">Hello</h5>
                        <h1 className="introsection__subtitle">I'm Abhishek</h1>
                        <h5 className="introsection__skill">Android Developer &</h5>
                        <h5 className="introsection__skill">Full Stack Developer</h5>
                        <button className="introsection__button introsection__button--size introsection__button--theme">HIRE ME</button>
                    </div>
                    <div className="introsection__content-right introsection__content-right--size">
                        <img src={image} className="introsection__userimage introsection__userimage--size" alt="avtaar"/>
                    </div>
                </div>
            </section>
        )
    }
}