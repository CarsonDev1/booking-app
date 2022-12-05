import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					src="https://images.ireland.com/thumbs/Images/Dublin/56f17e8b811e4adca3fd211a1c83bda1/featurecarousel-desktop.jpg"
					alt=""
				/>
				<div className="featuredTitles">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="http://cdn.cnn.com/cnnnext/dam/assets/220624030905-aerial-view-of-rosie-hackett-bridge-on-the-river-liffey-dublin-city-master.jpg"
					alt=""
				/>
				<div className="featuredTitles">
					<h1>Autin</h1>
					<h2>153 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://a.storyblok.com/f/112937/568x464/300d4ba563/things_to_know_before_moving_to_dublin_hero.jpg/m/620x0/filters:quality(70)/"
					alt=""
				/>
				<div className="featuredTitles">
					<h1>Reno</h1>
					<h2>143 properties</h2>
				</div>
			</div>
		</div>
	);
};

export default Featured;
