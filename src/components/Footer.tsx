import { Link } from "react-router-dom";

// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-100 mt-10 border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Қоғамдық Мәселелерге Шағымдар Платформасы. Барлық құқықтар қорғалған. 
        </div>
        <Link to="/admin" className="text-gray-700 hover:text-green-700">Админ</Link>
      </footer>
    )
  }
  