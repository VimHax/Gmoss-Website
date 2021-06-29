import React from 'react';

import Hero from './Hero';
import Header from './Header';
import AboutUs from './AboutUs';
import OurProject from './OurProject';
import TheProblem from './TheProblem';
import OurProgress from './OurProgress';

import Quote from './images/quote_author.webp';

export default function App() {
	return (
		<div>
			<div data-bs-spy="scroll" data-bs-offset="0" tabIndex={0}>
				<div id="home">
					<Hero></Hero>
				</div>
				<div id="QuoteContainer">
					<div id="Quote">
						<img src={Quote} alt="Franklin D. Roosevelt" />
						<div>
							<p id="QuoteContent">
								A nation that destroys its soils destroys itself. Forests are
								the lungs of our land, purifying the air and giving fresh
								strength to our people.
							</p>
							<p id="QuoteAuthor">Franklin D. Roosevelt</p>
						</div>
					</div>
				</div>
				<div id="the-problem">
					<TheProblem></TheProblem>
				</div>
				<div id="our-project">
					<OurProject></OurProject>
				</div>
				<div id="our-progress">
					<OurProgress></OurProgress>
				</div>
				<div id="about-us">
					<AboutUs></AboutUs>
				</div>
				<div id="FooterContainer">
					<div id="Footer">
						<p>&copy; Copyright 2021 G-Moss</p>
					</div>
				</div>
			</div>
			<Header></Header>
		</div>
	);
}
