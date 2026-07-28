// import Navbar from "./Navbar";
// import Sidebar from "./Sidebar";
// import Footer from "./Footer";

// export default function Layout({ children }) {
//   return (
//     <div className="bg-[#F8FAFC]">

//       <Navbar />

//       <Sidebar />

//       <main
//         className="
//         ml-[280px]
//         pt-[88px]
//         min-h-screen
//         "
//       >
//         {children}
//       </main>
//      <Footer />
//     </div>
//   );
// }

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navbar */}
      <Navbar />

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <main
        className="
          min-h-screen
          pt-[72px]
          lg:ml-[280px]
        "
      >
        <div className="px-5 py-6 sm:px-8 lg:px-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <div className="lg:ml-[0px]">
        <Footer />
      </div>
    </div>
  );
}