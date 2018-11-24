import React, { Component } from "react";
import BlogList from "./BlogList";
import Pagination from "./Pagination";
import Search from "./Search";
import AboutMe from "./AboutMe";
import FollowUs from "./FollowUs";
import ContactUs from "./ContactUs";
import PopularPosts from "./PopularPosts";
import Categories from "./Categories";
import Tags from "./Tags";

class BlogLists extends Component {
  state = {};
  render() {
    return (
      <section className="content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="page-main">
                <BlogList />
                <BlogList />
                <BlogList />
                <BlogList />
                <Pagination />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="page-sidebar">
                <Search />
                <AboutMe />
                <FollowUs />
                <ContactUs />
                <PopularPosts />
                <Categories />
                <Tags />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default BlogLists;
