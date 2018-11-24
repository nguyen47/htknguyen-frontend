import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import SidebarSearch from "./components/SidebarSearch";
import Header from "./components/Header";
import Slider from "./components/Slider";
import BlogLists from "./components/BlogLists";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <SidebarSearch />
        <Header />
        <Slider />
        <BlogLists />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
