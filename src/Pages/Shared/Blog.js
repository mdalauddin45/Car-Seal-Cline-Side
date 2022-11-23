import React from "react";

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto pt-10 ">
      <h1 className="text-5xl text-center text-gray-900 font-bold p-10">
        <span className="text-green-400">Welcome!</span> To Our Blog
      </h1>
      <div className="bg-white text-gray-900 m-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg bg-white">
          <div className="mt-3">
            <p className="text-2xl font-bold">
              Q-1 What are the different ways to manage a state in a React
              application?
            </p>
            <p className="mt-2">
              State represents the value of a dynamic properties of a React
              component at a given instance. React provides a dynamic data store
              for each component. The internal data represents the state of a
              React component and can be accessed using this.state member
              variable of the component. Whenever the state of the component is
              changed, the component will re-render itself by calling the
              render() method along with the new state. A simple example to
              better understand the state management is to analyse a real-time
              clock component. The clock component primary job is to show the
              date and time of a location at the given instance. As the current
              time will change every second, the clock component should maintain
              the current date and time in it’s state. As the state of the clock
              component changes every second, the clock’s render() method will
              be called every second and the render() method show the current
              time using it’s current state.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 m-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg bg-white">
          <div className="mt-3">
            <p className="text-2xl font-bold">
              Q-2 How does prototypical inheritance work?
            </p>
            <p className="mt-2">
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object. getPrototypeOf and Object.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 m-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg bg-white">
          <div className="mt-3">
            <p className="text-2xl font-bold">
              Q-3 What is a unit test? Why should we write unit tests?
            </p>
            <p className="mt-2">
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white text-gray-900 m-10">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-lg bg-white">
          <div className="mt-3">
            <p className="text-2xl font-bold">Q-4 React vs. Angular vs. Vue?</p>
            <p className="mt-2">
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
