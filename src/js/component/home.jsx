import React from "react";
import Contador from "./contador";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({digitos1, digitos2, digitos3, digitos4, digitos5, digitos6}) => {
	return (
		<div className="text-center">
			<Contador digitos1={digitos1} digitos2={digitos2} digitos3={digitos3} digitos4={digitos4} digitos5={digitos5} digitos6={digitos6} />
		</div>
	);
};

export default Home;

