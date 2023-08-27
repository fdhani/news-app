import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";

const router = createBrowserRouter(Root);

function App() {
  return (
    <div className="App">
      <section>
        <RouterProvider router={router} />
      </section>
    </div>
  );
}

export default App;
