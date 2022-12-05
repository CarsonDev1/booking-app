import "./list.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const List = () => {
	const location = useLocation();
	const [destination, setDestination] = useState(location.state.destination);
	const [date, setDate] = useState(location.state.date);
	const [options, setOptions] = useState(location.state.options);
	return (
		<div>
			<NavBar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="lsTitle">Search</h1>
						<div className="lsItem">
							<label>Destination</label>
							<input type="text" />
						</div>
						<div className="lsItem">
							<label>Check-in Date</label>
						</div>
					</div>
					<div className="listResult"></div>
				</div>
			</div>
		</div>
	);
};

export default List;
