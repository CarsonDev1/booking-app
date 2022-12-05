import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
	const photos = [
		{
			src: "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
		},
		{
			src: "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
		},
		{
			src: "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
		},
		{
			src: "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
		},
		{
			src: "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
		},
		{
			src: "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80",
		},
	];
	return (
		<div>
			<NavBar />
			<Header type="list" />
			<div className="hotelContainer">
				<div className="hotelWrapper">
					<h1 className="hotelTitle">Grand Hotel</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New york</span>
					</div>
					<div className="hotelDostance">
						Excellent location - 500m from center
					</div>
					<span className="hotelPriceHighlight">
						Book a stay over $114 at this property and get a free
						airport taxi
					</span>
					<div className="hotelImages">
						{photos.map((photo) => (
							<div className="hotelImgWrapper">
								<img src={photo.src} alt="" />
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsText">
							<h1 className="hotelTitle">
								Stay in the heart of Krakow
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hotel;
