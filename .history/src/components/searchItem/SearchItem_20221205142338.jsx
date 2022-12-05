import "./searchItem.css";

const SearchItem = () => {
	return (
		<div className="searchItem">
			<img src="" alt="" className="siImg" />
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
			</div>
		</div>
	);
};

export default SearchItem;
