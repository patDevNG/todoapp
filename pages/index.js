import React, { Component } from "react";
import Layout from "./components/Layout";
import Todo from "./components/Todo";
import Header from "./components/Header";

export class index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <div>
            <Header />
            <p className="lead" style={paragraph}>
              Add Todos, check the box when you are done
            </p>
            <div className="mb-6">
              <Todo />
            </div>
          </div>
        </Layout>
      </div>
    );
    const paragraph = {
      fontSize: "12px",
      padding: "8px"
    };
  }
}

export default index;
