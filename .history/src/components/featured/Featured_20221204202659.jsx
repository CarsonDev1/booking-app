import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					src="https://images.unsplash.com/photo-1665437315081-883caaaec0cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
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
					src="https://images.unsplash.com/photo-1665437315081-883caaaec0cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
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
					src="https://images.unsplash.com/photo-1665437315081-883caaaec0cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
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
