import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import Nav from './Nav';
import Portfolio from './Portfolio';

export default function Landing(props) {
    const { data, } = props;

    return(
        <div>
            <Nav />
            <Hero hero={data.hero} />
            <Portfolio works={data.works} />
            <Footer />
        </div>
    )
}