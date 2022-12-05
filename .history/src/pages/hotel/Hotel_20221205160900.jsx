import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
	return (
		<div>
			<NavBar />
			<Header type="list" />
			<div className="hotelContainer">
				<div className="hotelWrapper">
					<div className="hotelTitle">Grand Hotel</div>
				</div>
			</div>
		</div>
	);
};

export default Hotel;
