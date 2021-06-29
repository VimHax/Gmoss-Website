import React, { useState } from 'react';
import Viewer from 'react-viewer';
import { Background, Parallax } from 'react-parallax';

import Trees from './images/trees.webp';
import Team1 from './images/team1.webp';
import Team2 from './images/team2.webp';
import Team3 from './images/team3.webp';
import Team4 from './images/team4.webp';
import Team5 from './images/team5.webp';
import Team6 from './images/team6.webp';

export default function AboutUs() {
	const [visible, setVisible] = useState(false);
	const [index, setIndex] = useState(0);
	return (
		<Parallax strength={600}>
			<Background>
				<img className="Background" src={Trees} alt="Lake"></img>
			</Background>
			<div id="AboutUsContainer">
				<div id="AboutUs">
					<h1 className="Title">About Us;</h1>
					<ul>
						<li>
							<p>
								Our Vision - Allow future generations to enjoy a healthy
								environment.
							</p>
						</li>
						<li>
							<p>
								Our Mission - To make a meaningful contribution to the wellbeing
								of our planet and inspire others to follow.
							</p>
						</li>
					</ul>
					<p>
						We wouldn't have been able to reach this far without the guidance of
						our school teacher Sir Manoj de Silva and our mentor Dr. Julius
						Orwa. We've had plenty of fun so far and we are looking forward to
						further develop our project and ourselves. We didn't participate in
						this competition in the hope of winning it, we participated because
						we knew we could gain new knowledge and experience while making new
						friends and strengthening existing relationships along the way.
						Winning for us is just the cherry on the cake.
					</p>
					<div className="Photos">
						<div className="Photo">
							<img
								src={Team1}
								alt="Manmini Gunasekara"
								onClick={() => {
									setVisible(true);
									setIndex(0);
								}}
							/>
							<div className="Content">
								<h1 className="SubTopic">Manmini Gunasekera</h1>
								<p>
									Grade 12<br></br>
									Likes science, makes science puns.<br></br>
									Would like to live in a chemistry lab.
								</p>
							</div>
						</div>
						<div className="Photo">
							<img
								src={Team2}
								alt="Vihara Girihagama"
								onClick={() => {
									setVisible(true);
									setIndex(1);
								}}
							/>
							<div className="Content">
								<h1 className="SubTopic">Vihara Girihagama</h1>
								<p>
									Grade 10<br></br>
									Often seen singing weird songs.
									<br></br>
									Never gonna give moss up.
								</p>
							</div>
						</div>
						<div className="Photo">
							<img
								src={Team3}
								alt="Vinuk Karunarathne"
								onClick={() => {
									setVisible(true);
									setIndex(2);
								}}
							/>
							<div className="Content">
								<h1 className="SubTopic">Vinuk Karunarathne</h1>
								<p>
									Grade 10<br></br>
									Often seen as the odd one out of the group.<br></br>
									Likes to dance on wooden floors with wet socks.
								</p>
							</div>
						</div>
						<div className="Photo">
							<img
								src={Team4}
								alt="Vimukthi Weerabahu"
								onClick={() => {
									setVisible(true);
									setIndex(3);
								}}
							/>
							<div className="Content">
								<h1 className="SubTopic">Vimukthi Weerabahu</h1>
								<p>
									Grade 11<br></br>I like (like really like) moss.<br></br>
									Tech geek... but worse.
								</p>
							</div>
						</div>
						<div className="Photo">
							<img
								src={Team5}
								alt="Sir Manoj de Silva"
								onClick={() => {
									setVisible(true);
									setIndex(4);
								}}
							/>
							<div className="Content">
								<h1 className="SubTopic">Sir Manoj de Silva</h1>
								<p>
									Teacher of Biology (Bsc. Zoology), social worker, motivational
									speaker and a public figure -Mr World Sri Lanka 2018/2019
								</p>
							</div>
						</div>
						<div className="Photo">
							<img
								src={Team6}
								alt="Dr. Julius Orwa"
								onClick={() => {
									setVisible(true);
									setIndex(5);
								}}
							/>
							<div className="Content">
								<h1 className="SubTopic">Dr. Julius Orwa</h1>
								<p>
									Lecturer in Physics and Materials Engineering. School of
									Engineering - Deakin University. Geelong, VIC 3220
									Australia.
								</p>
							</div>
						</div>
					</div>
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
							{ src: Team1, alt: 'Manmini Gunasekara' },
							{ src: Team2, alt: 'Vihara Girihagama' },
							{ src: Team3, alt: 'Vinuk Karunarathne' },
							{ src: Team4, alt: 'Vimukthi Weerabahu' },
							{ src: Team5, alt: 'Sir Manoj de Silva' },
							{ src: Team6, alt: 'Dr. Julius Orwa' }
						]}
					/>
				</div>
			</div>
		</Parallax>
	);
}
