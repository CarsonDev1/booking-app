import { faBed, faCar, faPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

const Header = () => {
	return (
		<div className="header">
			<div className="headerList">
				<div className="headerListItem">
					<FontAwesomeIcon icon={faBed} />
				</div>
				<div className="headerListItem">
					<FontAwesomeIcon icon={faPlane} />
				</div>
				<div className="headerListItem">
					<FontAwesomeIcon icon={faCar} />
				</div>
				<div className="headerListItem">
					<FontAwesomeIcon icon={faBed} />
				</div>
			</div>
		</div>
	);
};

export default Header;
