import React from 'react';

import Moss from './images/moss.webp';
import GMossUnit from './images/gmoss_unit.webp';
import MossBackground from './images/moss_background.webp';
import { Background, Parallax } from 'react-parallax';

export default function OurProject() {
	return (
		<Parallax strength={600}>
			<Background>
				<img className="Background" src={MossBackground} alt="Moss"></img>
			</Background>
			<div id="OurProjectContainer">
				<div id="OurProject">
					<h1 className="Title">Our Project; </h1>
					<p>
						Plants feed on carbon dioxide and produce oxygen which we, and other
						animals, consume and give out carbon dioxide in return. It's a
						natural cycle which keeps the carbon dioxide and oxygen levels under
						control. This natural cycle has worked just fine for millions of
						years, however, we've managed to disrupt it. The machinery we make
						use of daily produces a lot of carbon dioxide which should be
						balanced out by having more plants to absorb that additional amount
						of produced carbon dioxide but we are constantly cutting down trees
						as we speak thus we've stopped the natural adaptation which would've
						fixed our global warming issue. (If enough time was given for plants
						to catch up) Among all the plants which absorb carbon dioxide, one{' '}
						<b>very efficient</b> plant stuck out; <b>moss</b>. In fact moss is
						so efficient at absorbing carbon dioxide that a 3.5 meter tall park
						bench, which was created by{' '}
						<a href="https://greencitysolutions.de/en/">Green City Solutions</a>
						, can absorb just as much carbon dioxide as{' '}
						<a href="https://www.forbes.com/sites/trevornace/2018/03/20/this-city-bench-absorbs-more-air-pollution-than-a-grove-of-trees/">
							275 trees within just 1% of the space
						</a>{' '}
						required for the former. Moss is also a{' '}
						<a href="https://greencitysolutions.de/en/solution/problem-fine-dust/">
							great dust filter
						</a>{' '}
						and it doesn't end there, moss can be grown relatively easily and it
						can tolerate both low light and low water conditions. All-round moss
						is a very capable and very flexible plant to work with.
					</p>
					<h1 className="SubTopic">What is G-Moss?</h1>
					<a
						className="ImageLink"
						href="https://www.pexels.com/photo/green-leafed-plant-87153/"
					>
						<img src={Moss} alt="Moss" className="mb-3" />
						<p>A Photo Of Moss</p>
					</a>
					<p>
						Combining with the fact that transportation is the biggest source of
						carbon dioxide lead to the conception of the idea behind G-Moss, the
						idea to create a unit which you attach to the exhaust pipe of a
						vehicle to reduce the carbon dioxide emissions of the vehicle by
						using moss to absorb a portion of the carbon dioxide emitted by the
						engine. G-Moss units are designed to work with already existing
						catalytic converts which newer vehicles come pre-installed with. A
						catalytic converter will convert partially combusted carbon monoxide
						and hydrocarbons to carbon dioxide and water and convert oxides of
						nitrogen to the much more environmentally friendly nitrogen gas.
						Thus, carbon dioxide, water and nitrogen will enter the G-Moss unit.
						The water and carbon dioxide will be used in photosynthesis while
						the nitrogen will pass through without reacting. Thus, carbon
						dioxide emissions can be minimized with the help of this unit.
					</p>
					<h1 className="SubTopic">Obstacles We Faced</h1>
					<p>
						When designing the G-Moss unit, we realized many requirements which
						our unit needed to meet;
						<ol>
							<li>
								<p>
									<b>The unit needs good air-flow</b> to allow the exhaust
									gasses to flow freely through the unit and keep back-pressure
									at a minimum, which would otherwise cause a negative effect on
									the host engine's performance.{' '}
									<span className="Details">
										This problem could be alleviated by working with the engine
										manufacturers to minimize engine performance dependence on
										the exhaust gas pressure however this would be hard, if not
										impossible, to do at this stage of our project.
									</span>
								</p>
							</li>
							<li>
								<p>
									The exhaust{' '}
									<b>
										gasses need to make as much contact with the moss as
										possible
									</b>{' '}
									to maximize the effectiveness of the unit.{' '}
									<span className="Details">
										Having more surface area which the gas needs to travel
										through will help with this. However this requirement
										directly rivals the first requirement, so we need to have a
										optimal balance between the both.
									</span>
								</p>
							</li>
							<li>
								<p>
									The moss cannot survive high temperatures so the hot exhaust{' '}
									<b>gasses emitted from the engine needs to be cooled down</b>{' '}
									to a level which the moss is comfortable with.{' '}
									<span className="Details">
										This will require a cooling unit but this unit will further
										limit our options as the G-Moss unit will require even
										better airflow to compensate for the friction which the
										cooling unit applies on the exhaust gasses.
									</span>
								</p>
							</li>
							<li>
								<p>
									Sufficient{' '}
									<b>light, nutrients and water needs to be supplied</b> to the
									moss to keep it alive. <b>Power needs to be supplied</b> to
									whatever components that require it.
								</p>
							</li>
							<li>
								<p>
									The unit should <b>handle failures gracefully</b> without
									inhibiting the performance of the host vehicle.{' '}
									<span className="Details">
										Designing for failures may seem counterintuitive but it is
										an essential part of a well designed product
									</span>
								</p>
							</li>
							<li>
								<p>
									The unit should be{' '}
									<b>easy to attach and remove from the vehicle</b>.
									Additionally the{' '}
									<b>moss inside should be easily accessible</b> for
									replacement.{' '}
									<span className="Details">
										Replacement of the unit will be inevitable for any user so
										it should be as convenient as possible so that the user
										shows less resistance for making use of our unit in their
										vehicle.
									</span>
								</p>
							</li>
						</ol>
					</p>
					<h1 className="SubTopic">The Design Of The G-Moss Unit</h1>
					<p>
						We are rapidly prototyping designs as of now, we are performing
						tests to analyze the feasibility of certain aspects of the current
						design and then improve our design based on this new knowledge.
						Below is a diagram of the current design we have in mind.
					</p>
					<div className="ImageLink">
						<img src={GMossUnit} alt="G-Moss Unit Design" className="mb-3" />
						<p>G-Moss Unit Design</p>
					</div>
					<p>
						To maximize the air flow the design includes multiple exhaust gas
						outlets and to minimize back-pressure the diameter of the exhaust
						gas tube has not been modified. The moss is grown inside of
						compartments placed at the corners. To stop the moss from spreading
						to the tube, disrupting air flow, the compartments are enclosed in
						wire meshes. Because the compartments are kept at the corners the
						exhaust gasses are likely to make good contact with the moss as the
						gasses needs to bend at a junction to reach an outlet. (Unless the
						gasses travels straight ahead) The LEDs, which are monochromatic,
						are placed inside the compartments to provide light for the moss to
						grow and the power for them can be easily provided by wiring the
						LEDs to a battery above the unit. To keep the moss heathy it is
						placed in cotton which is soaked in albert solution. (Which provides
						nutrients for the moss) Since the incoming exhaust gasses will be
						hot, a cooling unit will be placed right before the gasses enter the
						G-Moss unit. When it comes to replacement the procedure should be
						easy as you just need to replace the compartments. Failure of the
						G-Moss unit will not inhibit the engine in any case as there is
						nothing directly getting in the way of the exhaust gasses even when
						it's functioning as expected.
					</p>
					<h1 className="SubTopic">
						Why you should consider using a G-Moss unit
					</h1>
					<p>
						This is one effective way of contributing to the cause with very
						little effort required. As stated earlier, transportation is the
						biggest source of carbon dioxide in Sri Lanka and by installing a
						G-Moss unit you can reduce your carbon footprint. Ultimately what's
						important is making some kind of contribution to the world, the
						usage of a G-Moss unit is just one simple way of doing so and if
						enough people follow, it will make a dent.
					</p>
				</div>
			</div>
		</Parallax>
	);
}
