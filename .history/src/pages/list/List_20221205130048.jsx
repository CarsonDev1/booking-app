import "./list.css";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/Navbar";

const List = () => {
	return (
		<div>
			<NavBar />
			<Header type="list" />
			<div className="listContainer">
				<div className="listWrapper">
					<div className="listSearch"></div>
					<div className="listResult"></div>
				</div>
			</div>
		</div>
	);
};

export default List;
