import React from 'react'

export default function Footer() {
    return (
      <footer className="bg-gray-800 max-w-full text-white py-6 w-full top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2023 SkillQ</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <ul className="flex justify-center md:justify-center">
              <li className="mx-2"><a href="#" className="hover:text-gray-400">Tentang</a></li>
              <li className="mx-2"><a href="#" className="hover:text-gray-400">Layanan</a></li>
              <li className="mx-2"><a href="#" className="hover:text-gray-400">Kontak</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <p>Sosial Media</p>
            <div className="flex justify-center md:justify-end mt-2">
              <a href="#" className="text-gray-400 hover:text-white mx-2"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white mx-2"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white mx-2"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
}
