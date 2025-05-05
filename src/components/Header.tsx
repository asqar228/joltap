// // src/components/Header.tsx
// import { Link } from 'react-router-dom'

// export default function Header() {
//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="text-xl font-bold text-green-700">Jol Tap</Link>
//         <nav className="space-x-4">
//           <Link to="/" className="text-gray-700 hover:text-green-700">Басты бет</Link>
//           <Link to="/report" className="text-gray-700 hover:text-green-700">Шағым жіберу</Link>
//           <Link to="/track" className="text-gray-700 hover:text-green-700">Бақылау</Link>
//           <Link to="/login" className="text-gray-700 hover:text-green-700">Кіру</Link>
//         </nav>
//       </div>
//     </header>
//   )
// }
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Joltap
        </Link>
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
        <Link to="/" className="text-gray-700 hover:text-green-700">Басты бет</Link>
           <Link to="/report" className="text-gray-700 hover:text-green-700">Шағым жіберу</Link>
           <Link to="/track" className="text-gray-700 hover:text-green-700">Бақылау</Link>
           <Link to="/login" className="text-gray-700 hover:text-green-700">Кіру</Link>
        </nav>
        <Link
          to="/login"
          className="bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </Link>
      </div>
    </header>
  );
}
