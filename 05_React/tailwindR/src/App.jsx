// import React from "react";

// const App = () => {
//   return (
//     <header className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <div className="text-2xl font-bold text-blue-600">
//             MyWebsite
//           </div>

//           {/* Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             <a
//               href="/"
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               Home
//             </a>

//             <a
//               href="/about"
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               About
//             </a>

//             <a
//               href="/services"
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               Services
//             </a>

//             <a
//               href="/contact"
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               Contact
//             </a>
//           </nav>

//           {/* Button */}
//           <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
//             Login
//           </button>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden text-gray-700 text-2xl">
//             ☰
//           </button>

//         </div>
//       </div>
//     </header>
//   );
// };

// export default App;



import React from 'react'
import { Home } from './components/Home'

export default function App() {
  return (
   <Home/>
  )
}
