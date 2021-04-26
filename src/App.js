import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddFeedPage from "./pages/AddFeedPage";
import EditFolderPage from "./pages/EditFolderPage";
import InitialPage from "./pages/InitialPage";
import NewsPage from "./pages/NewsPage";

function App() {
	return (
		<Router>
			<div className='app-wrapper'>
				<div className='app-wrapper-content'>
					<Switch>
						<Route exact path='/' component={InitialPage} />
						<Route path='/add-feed' component={AddFeedPage} />
						<Route exact path='/folders' component={EditFolderPage} />
						<Route path='/news' component={NewsPage} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
