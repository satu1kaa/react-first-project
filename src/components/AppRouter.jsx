import React from "react";
import { Route, Routes } from 'react-router-dom';
import { routes } from "../router";

const AppRouter = () => {
    return (
        <Routes>
          {routes.map(route => 
            <Route 
              component={route.component} 
              path={route.path}
              exact={route.exact}
            />
          )}
        </Routes>
    )
}

export default AppRouter;


// import About from '../pages/About'
// import Posts from '../pages/Posts'
// import Error from '../pages/Error';
// import PostIdPage from "../pages/PostIdPage";

/* <Route path='/about' element={<About />} />
          <Route exact path='/posts' element={<Posts />} />
          <Route exact path='/posts/:id' element={<PostIdPage />} />
          <Route path='/error' element={<Error />} />
          <Route
            path="*"
            element={<Navigate to="/error" replace />}
          /> */