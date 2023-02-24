import React from "react";
import New from './new.jsx';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container mb-8 p-3 w-50">

			<h1 id="title" className="text-center fs-1 mb-8 pb-8">Todo List</h1>

			<New/>

		</div>

	);
};

export default Home;
