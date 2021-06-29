import React from 'react';
import FadeIn from 'react-fade-in';
import { Background, Parallax } from 'react-parallax';

import Logo from './images/logo.webp';
import Forest from './images/forest.webp';

export default function Hero() {
	return (
		<div>
			<Parallax strength={300}>
				<Background>
					<img id="HeroBackground" src={Forest} alt="Forest"></img>
				</Background>
				<div style={{ height: '100vh' }}>
					<div id="Hero">
						<div
							style={{
								minWidth: '300px',
								width: '30vw'
							}}
						>
							<FadeIn>
								<img src={Logo} alt="Logo" className="HeroLogo" width="100%" />
							</FadeIn>
							<FadeIn delay={250}>
								<p>a green solution for a greener future</p>
							</FadeIn>
						</div>
					</div>
				</div>
			</Parallax>
		</div>
	);
}
