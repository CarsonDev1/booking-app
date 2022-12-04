import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
	faBed,
	faCar,
	faEarth,
	faMountain,
	faPlane,
	faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faEarth} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Airport taxis</span>
					</div>
				</div>
				<h1 className="headerTitle">
					A lifetime of discounts? It's Genius.
				</h1>
				<p className="headerDesc">
					Get rewarded for your travels - unlock instant savings of
					20% or more with a free TTCBooking account
				</p>
				<button className="headerBtn">Sign in / Register</button>
				<div className="headerSearch">
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faBed} className="headerIcon" />
						<input
							type="text"
							placeholder="Where are you going?"
							className="headerSearchInput"
						/>
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon
							icon={faCalendarDays}
							className="headerIcon"
						/>
						<span className="headerSearchText">date to date</span>
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faBed} className="headerIcon" />
						<input
							type="text"
							placeholder="Where are you going?"
							className="headerSearchInput"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
