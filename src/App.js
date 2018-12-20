import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Navbar from "./components/navbar/NavBar";
import Search from "./components/search/Search";
import Footer from "./components/footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Navbar />
          <div
            className="container"
            style={{
              margin: "2px auto",
              width: "96%"
            }}
          >
            <Search />
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
