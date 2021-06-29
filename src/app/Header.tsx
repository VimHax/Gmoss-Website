import React from 'react';
import FadeIn from 'react-fade-in';

export default function Header() {
	let prevScrollpos = window.pageYOffset;
	window.onscroll = () => {
		const currentScrollPos = window.pageYOffset;
		const header = document.getElementById('Header');
		if (header) {
			if (prevScrollpos > currentScrollPos) {
				header.style.top = '0';
			} else if (window.pageYOffset > 50) {
				header.style.top = '-68px';
			}
		}
		prevScrollpos = currentScrollPos;
	};
	let sidePanelOpen = false;
	window.onclick = (e: MouseEvent) => {
		if (sidePanelOpen && e.x > 190) {
			const sidePanel = document.getElementById('SidePanel');
			if (sidePanel) {
				sidePanel.style.width = '0px';
				sidePanelOpen = false;
			}
		}
	};
	const reset = () =>
		setTimeout(() => {
			const header = document.getElementById('Header');
			if (header && window.pageYOffset > 50) header.style.top = '-68px';
		}, 750);
	return (
		<div>
			<ul id="Header">
				<button
					onClick={() => {
						const sidePanel = document.getElementById('SidePanel');
						if (sidePanel) {
							sidePanel.style.width = '190px';
							sidePanelOpen = true;
						}
					}}
				>
					<i className="fas fa-bars"></i>
				</button>
				<li>
					<a href="#home" onClick={reset}>
						<FadeIn delay={300}>Home</FadeIn>
					</a>
				</li>
				<li>
					<a href="#the-problem" onClick={reset}>
						<FadeIn delay={400}>The Problem</FadeIn>
					</a>
				</li>
				<li>
					<a href="#our-project" onClick={reset}>
						<FadeIn delay={500}>Our Project</FadeIn>
					</a>
				</li>
				<li>
					<a href="#our-progress" onClick={reset}>
						<FadeIn delay={600}>Our Progress</FadeIn>
					</a>
				</li>
				<li>
					<a href="#about-us" onClick={reset}>
						<FadeIn delay={700}>About Us</FadeIn>
					</a>
				</li>
			</ul>
			<div id="SidePanel">
				<a
					href={'javascript:void(0)'}
					id="Close"
					onClick={() => {
						const sidePanel = document.getElementById('SidePanel');
						if (sidePanel) {
							sidePanel.style.width = '0px';
							sidePanelOpen = false;
						}
						reset();
					}}
				>
					x
				</a>
				<a href="#home">Home</a>
				<a href="#the-problem">The Problem</a>
				<a href="#our-project">Our Project</a>
				<a href="#our-progress">Our Progress</a>
				<a href="#the-team">The Team</a>
			</div>
		</div>
	);
}
