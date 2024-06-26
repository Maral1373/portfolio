import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
	return (
		<Router>
			<Routes>
				{/* <Route path="/" element={<Home />}> */}
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/aboutMe" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/Skills" element={<Skills />} />
				{/* </Route> */}
			</Routes>
		</Router>
	);
}

export default App;
