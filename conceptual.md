### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front-end javascript library that allows you to create reusable components and makes it easier to render and update them. 
It uses a declarative approach where you can describe how the UI should look based on the current state and React handles updating the state.

- What is Babel?
Babel is used to transform code such as JSX in react components into javascript 

- What is JSX?
Allows you to react code that looks like regular html in your javascript within React components. 

- How is a Component created in React?
A component is created by defining a javascript function that is used to represent reusable elements.

- What are some difference between state and props?
Props are data that is passed down from parent components, they are considered immutable and  cannot be updated by the component that is receiving them.
State represent the data in a component that can be changed within a component using setState and is used to re-render elements when pieces of 
data(state) change. 

- What does "downward data flow" refer to in React?
Thsi refers to the belief that data should be controlled by parent elements and passed down or "flow" to children elements as props. Used as a way to try to keep the flow of data from becoming too complex. 

- What is a controlled component?
Is a component where the value of form elements are controlled by react state. Meaning the component captures the current value of the form element in its state so that it can make sure the component always reflexts the current state of the form element.

- What is an uncontrolled component?
A component where the value of form elements if handled by the DOM itself and it updates the components values without using react.

- What is the purpose of the `key` prop when rendering a list of components?
Helps react to uniquely identify each item in a list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
I can cause issues when the order of items in the array is changed or if item are added or removed.

- Describe useEffect.  What use cases is it used for in React components?
A built in hook in react that allows you to perform action or effects on components when certain things happen in the lifecycle of a component. 
Accept two arguments, the function you want to perform and an optional array of dependencies that specify when the effect should run.
Usecase include: making api calls, cleaning up components when they unmount

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
Returns a mutable ref object that can hold a value that persists accross multiple renders. Won't cause a rerender of a component.

- When would you use a ref? When wouldn't you use one?
You could use a ref when accessing underlying DOM elements or when setting up/clearing timers. You wouldn't use refs when updating state that needs to trigger a rerender

- What is a custom hook in React? When would you want to write one?
A custom hook is a function that helps with built in hooks to extract reusable logic and share it across multiple components. You can write a custom hook when you are reusing logic mutiple times such as making many api calls or handling local storage.
