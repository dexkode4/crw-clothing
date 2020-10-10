import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

function App() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		let unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			setUser(user);
		});
		console.log(user);
		return () => unsubscribeFromAuth();
	}, [user]);

	return (
		<div className="App">
			<Header currentUser={user} />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/shop" component={ShopPage} />
				<Route exact path="/signin" component={SignInAndSignUpPage} />
			</Switch>
		</div>
	);
}

export default App;
