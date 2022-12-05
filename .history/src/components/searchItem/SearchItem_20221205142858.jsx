import "./searchItem.css";

const SearchItem = () => {
	return (
		<div className="searchItem">
			<img
				src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80"
				alt=""
				className="siImg"
			/>
			<div className="siDesc">
				<h1 className="siTitle">Tower Street Apartments</h1>
				<span className="siDistance">500m from center</span>
				<span className="siTaxiOp">Free airport taxi</span>
				<span className="siSubtitle">
					Studio Apartments with Air conditioning
				</span>
				<span className="siFeatures">
					Entire studio • 1 bathroom • 21m² 1 full bed
				</span>
				<span className="siCancelOp">Free cancellation</span>
				<span className="siCancelOpSubtitle">
					You can cancel later, so lock in this great price today!
				</span>
			</div>
			<div className="siDetails">details</div>
		</div>
	);
};

export default SearchItem;
