import { useState } from "react";
import "./App.scss";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="section">
			<div className="background-image">
				<div className="row">
					<div className="flexRow">
						<div className="box-shadow box box1">
							<div className="topHeader">
								<h1 className="title">Home</h1>
							</div>
						</div>
						<div className="box-shadow box box2">
							<div className="topHeader">
								<h1 className="title">About me</h1>
							</div>
						</div>
						<div className="flexColumn">
							<div className="box-shadow box box3">
								<div className="topHeader">
									<h1 className="title">Projects</h1>
								</div>
							</div>
							<div className="box-shadow box box4">
								<div className="topHeader">
									<h1 className="title">Contact</h1>
								</div>
							</div>
						</div>
					</div>
					<div className="flexRow">
						<div className="box-shadow box box5">
							<div className="topHeader">
								<h1 className="title">Skills</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div> */}
		</div>
	);
}

export default App;
