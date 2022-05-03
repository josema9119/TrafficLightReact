import React, { useState } from "react";

const Home = () => {
	const [selectedColor, setSelectedColor] = useState("yellow");

	return (
		<div className="container vh-100">
			<div className="traffic-light">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" + (setSelectedColor === "red" ? "glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(setSelectedColor === "yellow" ? "glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(setSelectedColor === "green" ? "glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default Home;
