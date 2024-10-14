# Frontend Mentor - Product feedback app solution

This is a solution to the [Product feedback app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-feedback-app-wbvUYqjR6).

About Frontend Mentor: Frotend Mentor offers a collection of realistic projects designed to enhance front-end development skills. Each challenge comes with detailed Figma designs, allowing us to build high-quality applications based on professional-grade mockups.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [3 Main things I learned](#3-Main-things-I-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

This project is a responsive and dynamic feedback application built using React.js and Bootstrap, designed to enhance user interaction and streamline the feedback process. It provides a seamless user experience with complex CRUD (Create, Read, Update, Delete) functionalities, allowing users to:

- View an optimal layout tailored to their device's screen size.
- Interact with hover states for all clickable elements on the page.
- Create, read, update, and delete product feedback requests.
- Receive form validations when submitting or editing feedback requests.
- Sort suggestions based on the number of upvotes and comments.
- Filter suggestions by category for easier navigation.
- Add comments and replies to existing product feedback requests.
- Upvote feedback requests to help prioritize suggestions.

### Screenshot

![](./assets/screenshots/Desktop-Feedback-Detail.png)
![](./assets/screenshots/Desktop-Roadmap.png)
![](./assets/screenshots/Desktop-Suggestions.png)
![](./assets/screenshots/Mobile-Roadmap.png)
![](./assets/screenshots/Mobile-Suggestions-Sidebar.png)

### Links

- [Frontendmentor solution](https://www.frontendmentor.io/solutions/responsive-product-feedback-app-with-react-and-bootstrap-2hNWu9VOio)
- [Live Site URL: ](https://product-feedback-app-reactjs.netlify.app/)

## My process

### Built with

This project utilizes a range of modern technologies and libraries to deliver a robust user experience:

- Semantic HTML5 for accessible and meaningful markup.
- CSS Custom Properties for easy theming and styling.
- Flexbox and CSS Grid for responsive and flexible layouts.
- [React](https://reactjs.org/) - JS library
- [Bootstrap](https://getbootstrap.com/) - For responsive design and pre-styled components.
- [React Router DOM](https://www.npmjs.com/package/react-router-dom) - For routing and navigation within the application, enabling multi-page functionality.
- Local Storage - For persisting data across sessions.
- Context API (useContext) for state management across components.

### 3 Main things I learned

This really challenging project was my first multi-page React application, where I tackled complex CRUD operations and nested data management. I learned to effectively use React Router for navigation, understood the importance of creating deep copies to manage state updates, and utilized the useContext hook to manage global state, which streamlined my data flow and prevented prop drilling issues.

### 1. Using React Router for Multi-page Navigation

One of the significant challenges I faced during this project was learning to utilize React Router for multi-page navigation. Initially, I underestimated its complexity since React is optimized for single-page applications (SPAs). To effectively implement routing, I focused on three main concepts I learned:

**1. Creating the Routers**: I set up the router at the root level in `main.jsx` using the `createBrowserRouter` method, defining paths for each component within my application. This approach ensures that the router encapsulates all components, allowing them to access routing functionalities seamlessly. For example, I structured my routes as follows:

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/create-new-feedback",
    element: <CreateNewFeedbackPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/feedback/:id",
    element: <FeedbackDetail />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/edit-feedback/:id",
    element: <EditFeedbackPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/roadmap",
    element: <RoadmapPage />,
    errorElement: <NotFoundPage />,
  },
]);
```

**2.Providing Router Context::** I utilized the <RouterProvider> to enable navigation between pages, effectively providing context for all components that require routing functionalities. This allowed for seamless transitions and a consistent user experience:

```javascript
<RouterProvider router={router} />
```

**3. Accessing Dynamic Parameters:** I implemented dynamic routing to handle parameters in my links, using the `useParams` hook to access specific data based on the route. In the `FeedbackDetail.jsx` component, I utilized the useParams hook to extract the feedback ID from the URL, allowing me to display the corresponding feedback details:

```javascript
const { id } = useParams();
const feedback = feedbackList.find((feedback) => feedback.id === parseInt(id));
```

Additionally, I included navigation links for returning to the previous page and editing feedback, enhancing user experience:

```javascript
<Link to="/" className="d-flex semi-bold-grey-font-style">Go Back</Link>
<Link to={`/edit-feedback/${id}`}>Edit Feedback</Link>
```

### 2. Understanding React's Re-rendering Behavior: Creating Deep Copy Before Using Setter Method

I've learned to appreciate React's re-rendering behavior and the principle of immutability in state management. In my EditFeedbackPage component, I create a deep copy of the feedbackList before making any modifications. This ensures I follow the immutability principle and allows React to recognize changes, triggering re-renders when necessary.

For instance, I initialize the copy of the feedback list like this:

```javascript
let copyOfFeedbackList = JSON.parse(JSON.stringify([...feedbackList]));
```

By doing so, I avoid directly modifying the original state. When deleting or updating feedback items, I use the setter function `setFeedbackList` to ensure the component re-renders with the updated state:

```javascript
copyOfFeedbackList = copyOfFeedbackList.filter(
  (feedback) => feedback.id !== parseInt(cleanId)
);
setFeedbackList(copyOfFeedbackList);
```

### 3. Using useContext for Global State Management

In this project, I learned to use useContext hook for the first time to create global variables for managing feedback and the current user. This approach helps prevent issues with nested states in a larger application, ensuring that the state remains consistent across multiple pages and preventing prop drilling.

```jsx
import { createContext } from "react";
import { createRoot } from "react-dom/client";
import useLocalStorage from "use-local-storage";

export const FeedbackListContext = createContext();
export const CurrentUserContext = createContext();

function Main() {
  const [feedbackList, setFeedbackList] = useLocalStorage(
    "feedbackList",
    data.productRequests
  );
  const currentUser = data.currentUser;

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <FeedbackListContext.Provider value={{ feedbackList, setFeedbackList }}>
        {/* Router and app components go here */}
      </FeedbackListContext.Provider>
    </CurrentUserContext.Provider>
  );
}

// Render the app
createRoot(document.getElementById("root")).render(<Main />);
```

### Continued development

- I would love to turn this into a full-stack app. Right now, data is stored in a local JSON file, but I’m eager to connect it to an external database for storing, updating, and retrieving data.

- I want to keep exploring how to build multi-page applications with React Router DOM and look into the most efficient ways and best practices for state management, especially when comparing useContext with other approaches.

## Author

- Portfolio - [Nydia Subur](https://nydia-subur-portfolio.netlify.app/)
- Frontend Mentor - [@nydiasubur](https://www.frontendmentor.io/profile/nydiasubur)
- Twitter/X - [@nydiaSubur](https://x.com/nydiasubur)
