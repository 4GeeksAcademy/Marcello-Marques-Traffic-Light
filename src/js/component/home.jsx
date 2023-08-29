import React,{useState} from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [glow, setGlow]=useState("red")
	return (
		<div className="text-center">
			<div className="pole"></div>
			<div className="m">
				<div className={`${glow=="red"?"glowLight":""} red bg-danger`}
				onClick = {()=> setGlow("red")}></div>

				<div className={`${glow=="yellow"?"glowLight":""} yellow bg-warning`} 
				onClick = {()=>setGlow("yellow")}></div>

				<div className={`${glow=="green"?"glowLight":""} green bg-success`} 
				onClick = {()=>setGlow("green")}></div>
			</div>
		</div>
	);
};

export default Home;
