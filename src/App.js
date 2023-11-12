import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import Pages from "./components/Pages";
import { usePages } from "./components/contexts/PagesContext";

function App() {
  const { allPages } = usePages();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Editor />}>
          {allPages.map((page) => (
            <Route key={page.id} path={`${page.id}`} element={<Pages page={page} />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
