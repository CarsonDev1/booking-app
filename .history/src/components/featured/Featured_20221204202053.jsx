import "./featured.css";

const Featured = () => {
	return (
		<div className="featured">
			<div className="featuredItem">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS632ucwGwjWXUk3OdCzzlfpQYF5bqrg0Scrg&usqp=CAU"
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
