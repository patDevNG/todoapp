import React, { Component } from "react";
import Layout from "./components/Layout";
import Todo from "./components/Todo";
import Header from "./components/Header";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <div>
    <Layout>
      <div>
        <Header />
        <p className="lead" style={paragraph}>
          Add your chores, tick if its completed and delete if you are finished
        </p>
        <div className="mb-4">
          <Todo props = {props}/>
        </div>
      </div>
    </Layout>
  </div>
);
Index.getInitialProps = async function() {
  const res = await fetch("http://localhost:3500/todo");
  const data = await res.json();

  // console.log('my todos', data);
  return {
    todos: data
  };
};
const paragraph = {
  fontSize: "16px",
  padding: "8px",
  textAlign: 'center',
};
export default Index;
