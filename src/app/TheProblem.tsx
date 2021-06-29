import React from 'react';
import { Background, Parallax } from 'react-parallax';

import AQI from './images/aqi.webp';
import Factory from './images/factory.webp';
import CO2Graph from './images/co2-graph.webp';
import CarbonEmissions from './images/carbon_emissions.webp';
import GlobalTemperature from './images/global_temperature.webp';
import HumanDrivenCO2 from './images/human_driven_co2.webp';
import VehiclePopulation from './images/vehicle_population.webp';

export default function TheProblem() {
	return (
		<Parallax strength={600}>
			<Background>
				<img className="Background" src={Factory} alt="Factory"></img>
			</Background>
			<div id="TheProblemContainer">
				<div id="TheProblem">
					<h1 className="Title">The Problem;</h1>
					<p>
						We have come a long way from our ancestors. We transformed from a
						primitive species to the dominant species of our planet in a blink
						of an eye while other species haven't even come close to making such
						a large leap in technology. We have advanced our understanding of
						the universe down to the small details over many years and, with
						this new found knowledge, developed technologies, such as cars,
						planes, computers etc, to improve living standards and help us focus
						more on the important aspects of life while giving us increasing
						control over our environment. However, with all these advances rose
						a colossal issue, <b>pollution</b>.
					</p>
					<h1 className="SubTopic">What is Global Warming?</h1>
					<p>
						<b>
							Disposal of waste has been a problem since the very beginning.
						</b>{' '}
						The worst part is that we still lack a proper solution! (Piling
						massive amounts of waste is definitely not a good long-term
						solution) Because of the rapidly increasing population waste
						disposal is becoming an even bigger problem. Out of the many
						problems pollution causes <b>the biggest is global warming</b>.
					</p>
					<a
						className="ImageLink"
						href="https://www.unep.org/news-and-stories/story/alarming-rise-global-temperatures"
					>
						<img
							src={GlobalTemperature}
							alt="Global Surface Temperature"
							className="mb-3"
						/>
						<p>Global Surface Temperature</p>
					</a>
					<p>
						It is an <b>undeniable</b> fact that{' '}
						<a href="https://www.unep.org/news-and-stories/story/alarming-rise-global-temperatures">
							Earth is getting warmer
						</a>{' '}
						because of the pollution we are creating and this is what we refer
						to as global warming. Greenhouse gasses, such as carbon dioxide,
						methane, nitrous oxide and even water vapour, when released to the
						atmosphere trap heat, which otherwise would've escaped to space. The
						trapping of this heat causes the planet to get warmer which is how
						global warming occurs. Within just a few decades we have increased
						the carbon dioxide concentration of the atmosphere{' '}
						<a href="https://climate.nasa.gov/evidence/">
							<b>well beyond levels Earth has ever reached on its own</b>
						</a>
						!
					</p>
					<h1 className="SubTopic">Evidence for Global Warming</h1>
					<a
						className="ImageLink"
						href="https://en.wikipedia.org/wiki/Climate_change"
					>
						<img
							src={HumanDrivenCO2}
							alt="Human drivers vs Natural drivers for Global Warming"
							className="mb-3"
						/>
						<p>Human drivers vs Natural drivers for Global Warming</p>
					</a>
					<p>
						The above graph plots the observed temperatures with the
						contributions made for for global warming by natural and human
						sources. You can observe that the human contributions correlate
						strongly to the observed temperatures indicating that our actions
						have made a significant contribution to global warming. (The natural
						contributions only make up for small variations at the end of the
						day)
					</p>
					<a
						className="ImageLink"
						href="https://en.wikipedia.org/wiki/Climate_change"
					>
						<img
							src={CO2Graph}
							alt="Carbon Dioxide Levels Over Many Years"
							className="mb-3"
						/>
						<p>Carbon Dioxide Concentrations Over Many Years</p>
					</a>
					<p>
						Earth's carbon dioxide levels naturally cycle up and down due to
						slight variations in the solar energy our planet receives due to
						changes in Earth's orbit around the sun. The current spike, however,
						is the{' '}
						<a href="https://en.wikipedia.org/wiki/Climate_change">
							highest spike of carbon dioxide concentration we've ever had for
							millennia
						</a>
						! (And highest by a large factor as well) If you wish to see more
						evidence for global warming the internet is a great resource. (Just
						make sure to only trust data provided by reputable sources)
					</p>
					<h1 className="SubTopic">Why is Global Warming bad?</h1>
					<p>
						Below are a few, of the many, adverse effects which global warming
						has been linked to;
						<ul>
							<li>
								<p>
									The{' '}
									<a href="https://www.nationalgeographic.com/science/article/climate-change-increases-risk-fires-western-us">
										increasing rates of wildfires
									</a>
									, which inturn releases even more greenhouse gasses into our
									atmosphere (Sounds a lot like a chain reaction could occur or
									may even already be occurring).
								</p>
							</li>
							<li>
								<p>
									The{' '}
									<a href="https://www.climate.gov/news-features/understanding-climate/climate-change-global-sea-level">
										rise of sea levels due to the melting ice at the poles
									</a>{' '}
									which can cause flooding, shoreline erosion, hazards from
									storms and cause the destruction of habitats of some animals
									etc. just to name a few.
								</p>
							</li>
							<li>
								<p>
									Intense heatwaves are becoming{' '}
									<a href="https://www.popularmechanics.com/science/environment/a28638742/what-is-a-heat-wave/">
										more common
									</a>{' '}
									and these can cause{' '}
									<a href="https://www.worldatlas.com/articles/what-are-the-harmful-effects-of-a-heat-wave.html">
										wildfires, power outages, infrastructural damage and can go
										as far as to kill people
									</a>
									.
								</p>
							</li>
							<li>
								<p>
									The{' '}
									<a href="https://www.ucsusa.org/resources/drought-and-climate-change">
										rising risk of droughts
									</a>{' '}
									which inturn impact agriculture.
								</p>
							</li>
						</ul>
					</p>
					<h1 className="SubTopic">Why haven't we stopped Global Warming?</h1>
					<p>
						Global warming feels like a problem which everybody and nobody knows
						about at the same time. Awareness about global warming is unlikely
						to be the problem at hand (there have been many articles, campaigns,
						news etc. about it) it's just that some of us don't want to take
						responsibility. Many campaigns have risen over the years and yet
						none of them managed to make any major changes to the status quo. We
						blame large companies and yet excuse our own behavior claiming that
						we can't make any significant difference. Undoubtedly even the
						smallest changes you make to help our country, our world, will make
						a dent if enough of us follow through with them. Even if that wasn't
						the case, history has shown us time and time again individuals which
						have revolutionized the world. For example, below is a video of a
						young girl, Greta Thunberg, who took matters into her own hands to
						help save the world.
					</p>
					<a
						className="VideoLink"
						href="https://www.worldometers.info/co2-emissions/sri-lanka-co2-emissions/"
					>
						<iframe
							src="https://www.youtube-nocookie.com/embed/EAmmUIEsN9A"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						></iframe>
						<p>School Strike For Climate</p>
					</a>
					<p>
						We only have so much time to change things around, until it's too
						late. We can't get back the time we lost so we should attempt to
						maximize the potential of each and every moment. Even if we made
						global warming so bad that it's irreversible,{' '}
						<b>
							we can at least die in peace knowing that we died trying and not
							neglecting
						</b>
						.
					</p>
					<h1 className="SubTopic">
						The Global Warming situation in Sri Lanka
					</h1>
					<a
						className="ImageLink"
						href="https://www.worldometers.info/co2-emissions/sri-lanka-co2-emissions/"
					>
						<img
							src={CarbonEmissions}
							alt="Carbon Emissions"
							className="mb-3"
						/>
						<p>Yearly Carbon Emissions Of Sri Lanka</p>
					</a>
					<p>
						In 2019, Sri Lanka’s carbon dioxide emissions were as high as{' '}
						<a href="https://ourworldindata.org/co2/country/sri-lanka?country=~LKA#what-are-the-country-s-annual-co2-emissions">
							25 million tonnes
						</a>
						.{' '}
						<b>
							Year after year the carbon emissions have kept increasing, showing
							no signs of slowing down.
						</b>{' '}
						Moreover, Sri Lanka has an AQI (Air Quality Index) below 100. (In
						comparison the world's most polluted cities are standing at{' '}
						<a href="https://www.iqair.com/world-air-quality">about 200 AQI</a>){' '}
						This is a lot less than 200 AQI but, if we don't take any action to
						reduce our carbon footprint, the AQI will inevitably reach 200 due
						to the increasing number of vehicles and factories.
					</p>
					<a className="ImageLink" href="https://www.iqair.com/sri-lanka">
						<img src={AQI} alt="AQI" className="mb-3" />
						<p>Air Quality Index Of Sri Lanka</p>
					</a>
					<p>
						Most vehicles in Sri Lanka, as of 2016, have catalytic converters
						installed in them but sadly this unit actually does not help reduce
						carbon dioxide emissions. However Sri Lanka, being a third world
						country, majority of the vehicles being used are quite old so this
						makes the situation even worse as more carbon dioxide will be given
						out than normal. (Older vehicles aren't as optimized as vehicles
						nowadays for carbon dioxide emissions) The resultant excess waste
						gasses, which have been produced, increases air pollution
						drastically. Why is air pollution such a important thing to be
						considered? Due to the fact that it gives rise to diseases such as
						cancer, heart disease, stroke, and respiratory diseases such as
						asthma.
					</p>
					<a
						className="ImageLink"
						href="http://www.transport.gov.lk/web/index.php?option=com_content&view=article&id=26&Itemid=146&lang=en#vehicle-population"
					>
						<img
							src={VehiclePopulation}
							alt="Vehicle Population of Sri Lanka"
							className="mb-3"
						/>
						<p>Yearly Vehicle Population Of Sri Lanka</p>
					</a>
					<p>
						<b>
							Transportation is the biggest source of carbon dioxide emissions
							in Sri Lanka.
						</b>{' '}
						Transportation in Sri Lanka makes up{' '}
						<a href="https://www.worldometers.info/co2-emissions/sri-lanka-co2-emissions/">
							an enormous 47%
						</a>{' '}
						of the total emissions. (Which is a much higher percentage than that
						of the United States where transportation only adds up to{' '}
						<a href="https://en.wikipedia.org/wiki/Greenhouse_gas_emissions_by_the_United_States">
							29% of the total emissions
						</a>
						) If we are going to try to reduce our carbon footprint, on Sri
						Lanka, <b>the first go to is transportation</b>.
					</p>
				</div>
			</div>
		</Parallax>
	);
}
