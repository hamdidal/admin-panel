import React from "react";
import Provider from "./bootstrap/Provider";
import Guard from "./bootstrap/Guard/GuardProvider";
import Auth from "./bootstrap/Guard/AuthProvider";
import RouterProvider from "./bootstrap/Router/RouterProvider";

const App: React.FunctionComponent = () => {
  return (
    <Provider>
      <Guard>
        <Auth>
          <RouterProvider />
        </Auth>
      </Guard>
    </Provider>
  );
};

export default App;
