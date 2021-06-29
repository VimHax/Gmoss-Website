import React, { useState } from 'react';
import Plyr from 'plyr-react';
import 'plyr-react/dist/plyr.css';
import Viewer from 'react-viewer';
import { Background, Parallax } from 'react-parallax';

import Lake from './images/lake.webp';
import Round1 from './images/round1.webp';
import Photo1 from './images/photo1.webp';
import Photo2 from './images/photo2.webp';
import Photo3 from './images/photo3.webp';
import Photo4 from './images/photo4.webp';
import Photo5 from './images/photo5.webp';
import Photo6 from './images/photo6.webp';
import Photo7 from './images/photo7.webp';
import Photo8 from './images/photo8.webp';
import Photo9 from './images/photo9.webp';

export default function OurProgress() {
	const [certVisible, setCertVisible] = useState(false);
	const [visible, setVisible] = useState(false);
	const [index, setIndex] = useState(0);
	return (
		<Parallax strength={600}>
			<Background>
				<img className="Background" src={Lake} alt="Lake"></img>
			</Background>
			<div id="OurProgressContainer">
				<div id="OurProgress">
					<h1 className="Title">Our Progress;</h1>
					<p>
						G-Moss is our submission for the{' '}
						<a href="https://www.facebook.com/events/297766794598828/">
							2021 Young Environmentalists' Challenge
						</a>{' '}
						which is a competition for high-school students to give them an
						opportunity to help Sri Lanka, and the world, by identifying and
						finding a solution to an issue in our local region. The competition
						is broken into 3 rounds;{' '}
						<ul>
							<li>
								Round 1 (The proposal stage) - Teams from multiple schools will
								find an issue and propose a solution to it,
							</li>
							<li>
								Round 2 (The development stage) - The teams who won Round 1 will
								now need to develope their proposal into a
								prototype/model/simulation,
							</li>
							<li>
								Round 3 (The final stage) - The teams who won Round 2 will be
								given time to further develope their project and will have to
								present it, the winner of this round is the winner of the whole
								competition.
							</li>
						</ul>
					</p>
					<h1 className="SubTopic">Round 1</h1>
					<img
						src={Round1}
						alt="Round 1 Certificate"
						onClick={() => setCertVisible(true)}
					/>
					<Viewer
						visible={certVisible}
						onClose={() => {
							setCertVisible(false);
						}}
						onMaskClick={() => {
							setCertVisible(false);
						}}
						drag={false}
						attribute={false}
						zoomable={false}
						rotatable={false}
						noFooter={true}
						images={[{ src: Round1, alt: 'Round 1 Certificate' }]}
					/>
					<p>
						This round is where we identified the problem (the global warming
						situation in Sri Lanka) and proposed a solution to it (the G-Moss
						unit). We were some of the select few who won Round 1! Here's our
						submission;
					</p>
					<Plyr
						source={{
							type: 'video',
							sources: [
								{
									src: '/proposal.mp4',
									provider: 'html5'
								}
							]
						}}
					/>
					<h1 className="SubTopic">Round 2</h1>
					<p>
						Sadly we were not one of the winners of Round 2, however, we've had
						a great time along the way and this does not spell out the end of
						our project. When we are all comfortable we will start continuing
						our work on this project. The point of the competition is not to win
						it rather to inspire you to contribute to the wellbeing of the
						environment.
					</p>
					<div className="Photos">
						<img
							src={Photo1}
							alt="A Photo Of Us Messing Around"
							onClick={() => {
								setVisible(true);
								setIndex(0);
							}}
						/>
						<img
							src={Photo2}
							alt="A Photo Of Us Messing Around"
							onClick={() => {
								setVisible(true);
								setIndex(1);
							}}
						/>
						<img
							src={Photo3}
							alt="A Photo Of Us Messing Around"
							onClick={() => {
								setVisible(true);
								setIndex(2);
							}}
						/>
						<img
							src={Photo4}
							alt="A Photo Of Us Messing Around"
							onClick={() => {
								setVisible(true);
								setIndex(3);
							}}
						/>
						<img
							src={Photo5}
							alt="A Photo Of Us Messing Around"
							onClick={() => {
								setVisible(true);
								setIndex(4);
							}}
						/>
						<img
							src={Photo6}
							alt="A Photo Of Us Messing Around"
							onClick={() => {
								setVisible(true);
								setIndex(5);
							}}
						/>
						<img
							src={Photo7}
							alt="A Photo Of Us Messing Around"
							onClick={() => {
								setVisible(true);
								setIndex(6);
							}}
						/>
						<img
							src={Photo8}
							alt="A Photo Of Us Messing Around"
							onClick={() => {
								setVisible(true);
								setIndex(7);
							}}
						/>
					</div>
					<div className="LargePhoto">
						<img
							src={Photo9}
							alt="A Photo Of Us At RIC"
							onClick={() => {
								setVisible(true);
								setIndex(8);
							}}
						/>
					</div>
					<p>
						You can see the presentations of all the teams in the video below
						which is a live-stream of the event at RIC.
					</p>
					<iframe
						width="100%"
						height="500"
						src="https://www.youtube-nocookie.com/embed/b9fsAzMvKv4?start=6115"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
					<Viewer
						visible={visible}
						onClose={() => {
							setVisible(false);
						}}
						onMaskClick={() => {
							setVisible(false);
						}}
						activeIndex={index}
						drag={false}
						attribute={false}
						zoomable={false}
						rotatable={false}
						images={[
							{ src: Photo1, alt: 'A Photo Of Us Messing Around' },
							{ src: Photo2, alt: 'A Photo Of Us Messing Around' },
							{ src: Photo3, alt: 'A Photo Of Us Messing Around' },
							{ src: Photo4, alt: 'A Photo Of Us Messing Around' },
							{ src: Photo5, alt: 'A Photo Of Us Messing Around' },
							{ src: Photo6, alt: 'A Photo Of Us Messing Around' },
							{ src: Photo7, alt: 'A Photo Of Us Messing Around' },
							{ src: Photo8, alt: 'A Photo Of Us Messing Around' },
							{ src: Photo9, alt: 'A Photo Of Us At RIC' }
						]}
					/>
				</div>
			</div>
		</Parallax>
	);
}
