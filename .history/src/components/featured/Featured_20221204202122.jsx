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
		</div>
	);
};

export default Featured;
