import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/root";
import HeaderLayout from "./layouts/Header";
import PageLayout from "./layouts/Page";

const router = createBrowserRouter(Root);

function App() {
  return (
    <div className="App">
      <HeaderLayout>
        <PageLayout>
          <RouterProvider router={router} />
        </PageLayout>
      </HeaderLayout>
    </div>
  );
}

export default App;
