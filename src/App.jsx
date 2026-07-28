// import { Routes, Route } from "react-router-dom";

// import Layout from "./components/layout/Layout";

// import Homepage from "./pages/Homepage";
// // import ResearchPage from "./pages/ResearchPage";
// import PublicationsPage from "./pages/PublicationsPage";
// import AwardsPage from "./pages/AwardsPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import CollaboratorsPage from "./pages/CollaboratorsPage";
// import IndustryPage from "./pages/IndustryPage";
// import StudentsPage from "./pages/StudentsPage";

// import GalleryPage from "./pages/GalleryPage";
// import NewsPage from "./pages/NewsPage";
// import ContactPage from "./pages/ContactPage";
// import CoursesPage from "./pages/CoursesPage";
// import CentreOfExcellence from "./pages/CentreofExcellence";

// export default function App() {
//   return (
//     <Layout>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/centre" element={<CentreOfExcellence />} />
//         {/* <Route path="/research" element={<ResearchPage />} /> */}
//         <Route path="/publications" element={<PublicationsPage />} />
//         <Route path="/awards" element={<AwardsPage />} />
//         <Route path="/projects" element={<ProjectsPage />} />
//         <Route path="/collaborators" element={<CollaboratorsPage />} />
//         <Route path="/industry" element={<IndustryPage />} />
//         <Route path="/students" element={<StudentsPage />} />
//         <Route path="/courses" element={<CoursesPage />} />
//         <Route path="/gallery" element={<GalleryPage />} />
//         <Route path="/news" element={<NewsPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//       </Routes>
//     </Layout>
//   );
// }

import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import Homepage from "./pages/Homepage";
import CentreOfExcellence from "./pages/CentreofExcellence";
import PublicationsPage from "./pages/PublicationsPage";
import AwardsPage from "./pages/AwardsPage";
import ProjectsPage from "./pages/ProjectsPage";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import IndustryPage from "./pages/IndustryPage";
import StudentsPage from "./pages/StudentsPage";
import CoursesPage from "./pages/CoursesPage";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/" element={<Homepage />} />

        <Route path="/centre" element={<CentreOfExcellence />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/collaborators" element={<CollaboratorsPage />} />
        <Route path="/industry" element={<IndustryPage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Optional 404 page */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
}