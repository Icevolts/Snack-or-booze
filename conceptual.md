### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?  
  To handle client-side and server-side routing inside the application

- What is a single page application?  
  An application that only loads one page to the browser but is able to navigate to mutiple pages

- What are some differences between client side and server side routing?  
  Client side routing involves loading everything in a single initial request, as opposed to server side routing which the server handles changes and the page refreshes each time you move pages

- What are two ways of handling redirects with React Router? When would you use each?  
  Using the Redirect component or .push method on history. Redirect is best for defaulting back home when someone tries to break out of the confines of the page, whereas .push can be used to send the user to the next location after completing an action

- What are two different ways to handle page-not-found user experiences using React Router?   
  You can Navigate them back to the homepage, or create a view for a page not found component

- How do you grab URL parameters from within a component using React Router?  
  You can pass the useParams hook to name a variable and then pass that variable on

- What is context in React? When would you use it?  
  Universal data across all components. Prop drilling or shared themes

- Describe some differences between class-based components and function
  components in React.  
  In a class based component state was set in the constructor, then updated in the render method and only available in that component. In a function component state can be set and updated anywhere in the component and passed on to other components

- What are some of the problems that hooks were designed to solve?  
  They can slim down your code so you don't write so much duplicate code, and can be used in multiple components easily.