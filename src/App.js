import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FrameComponent from "./pages/FrameComponent";
import { useEffect } from "react";
// import Anxiety from "./components/anxiety";
// import Happy from "./components/happy";
// import Suicide from "./components/Suicide";
// import Contact from "./components/register";
import Register from "./components/register";
import Depression from './components/newdepression'
import HappyPage from './components/happypage'
import Recommendation from './components/anxietypage'
import SadRecommendations from './components/sadpage'
import Progress from './components/progress'
import Load from "./components/loadingpage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<FrameComponent />} />
      <Route path="/anxiety" element={<Recommendation />} />
      <Route path="/happy" element={<HappyPage />} />
      <Route path="/suicide" element={<Depression />} />
      <Route path="/sad" element={<SadRecommendations />} />
      <Route path="/report" element={<Progress />} />
      <Route path="/register" element={<Register />} />
      <Route path="/load" element={<Load />} />

    </Routes>
  );
}
export default App;
