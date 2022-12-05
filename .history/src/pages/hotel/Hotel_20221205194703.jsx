import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import NavBar from "../../components/navbar/Navbar";
import "./hotel.css";

const Hotel = () => {
	const [slideNumber, setSlideNumber] = useState(0);
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
					<button className="bookNow">Reserve or Book Now!</button>
					<h1 className="hotelImg">Grand Hotel</h1>
					<div className="hotelImg">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New york</span>
					</div>
					<div className="hotelDistance">
						Excellent location - 500m from center
					</div>
					<span className="hotelPriceHighlight">
						Book a stay over $114 at this property and get a free
						airport taxi
					</span>
					<div className="hotelImages">
						{photos.map((photo, idx) => (
							<div className="hotelImgWrapper">
								<img
									onClick={() => setSlideNumber(idx)}
									src={photo.src}
									alt=""
									className="hotelImg"
								/>
							</div>
						))}
					</div>
					<div className="hotelDetails">
						<div className="hotelDetailsText">
							<h1 className="hotelTitle">
								Stay in the heart of Krakow
							</h1>
							<p className="hotelDesc">
								Set in Ho Chi Minh City, The White House Do
								Quang Dau features a garden, terrace and shared
								lounge. The property is around 0.8 mi from Fine
								Arts Museum and 0.9 mi from Ben Thanh Street
								Food Market. The accommodations offers a 24-hour
								front desk and free WiFi is available. At the
								hotel, rooms have a wardrobe and a flat-screen
								TV. Rooms are complete with a private bathroom
								equipped with a shower, while certain rooms at
								The White House Do Quang Dau also offer a
								seating area. The area is popular for cycling,
								and bike hire is available at the
								accommodations. Tao Dan Park is 0.9 mi from The
								White House Do Quang Dau, while Takashimaya
								Vietnam is 0.9 mi from the property. The nearest
								airport is Tan Son Nhat International Airport,
								8.1 mi from the property. This is our guests'
								favorite part of Ho Chi Minh City, according to
								independent reviews. Couples in particular like
								the location – they rated it 9.7 for a
								two-person trip.
							</p>
						</div>
						<div className="hotelDetailsPrice">
							<h1>Perfect for a 9-night stay!</h1>
							<span>
								Located in the real heart of Krakow, this
								property has an excellent location score of 9.8
							</span>
							<h2>
								<b>$945</b> (9 nights)
							</h2>
							<button>Reserve of Book Now!</button>
						</div>
					</div>
				</div>
				<MailList />
				<Footer />
			</div>
		</div>
	);
};

export default Hotel;
