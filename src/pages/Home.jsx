// import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./Home.scss";

function Home() {
	// const [count, setCount] = useState(0);

	return (
		<div className="container">
			<div className="flexRow">
				<div className="flexColumn">
					<div className="box box-shadow box3">
						<Link to={"/"} className="topHeader">
							<h1 className="title">Home</h1>
						</Link>
					</div>
					<div className="box box-shadow box4">
						<Link to={"/contact"} className="topHeader">
							<h1 className="title">Contact</h1>
						</Link>
					</div>
				</div>
				<div className="box box-shadow box2">
					<Link to={"/aboutMe"} className="topHeader">
						<h1 className="title">About me</h1>
					</Link>
				</div>
				<div className="box box-shadow">
					<Link to={"/projects"} className="topHeader">
						<h1 className="title">Projects</h1>
					</Link>
				</div>
			</div>
			<div className="flexRow">
				<div className="box box-shadow box5">
					<Link to={"/skills"} className="topHeader">
						<h1 className="title">Skills</h1>
					</Link>
				</div>
			</div>
			<Outlet />
		</div>
	);
}

export default Home;

{
	/* <>
	<div className="card">
		<button onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	</div>
	;
</>; */
}
