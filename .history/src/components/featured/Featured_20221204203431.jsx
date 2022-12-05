import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					src="https://images.ireland.com/thumbs/Images/Dublin/56f17e8b811e4adca3fd211a1c83bda1/featurecarousel-desktop.jpg"
					alt=""
					className="featuredImg"
				/>
				<div className="featuredTitles">
					<h1>Dublin</h1>
					<h2>123 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://images.unsplash.com/photo-1670139018938-af8bf748a1bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					className="featuredImg"
					alt=""
				/>
				<div className="featuredTitles">
					<h1>Autin</h1>
					<h2>153 properties</h2>
				</div>
			</div>
			<div className="featuredItem">
				<img
					src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					className="featuredImg"
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
