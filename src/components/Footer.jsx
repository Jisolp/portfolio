import React from 'react'

const Footer = () => (
  <footer className="bg-third opacity-40 text-gray-950 font-semibold py-4">
  <div className="container mx-auto text-center">
    
    <div className="flex justify-center space-x-4 mb-2">
      <a href="mailto:jjisolpark@gmail.com" className="hover:text-blue-400">Email</a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">LinkedIn</a>
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">GitHub</a>
    </div>

    <p className="mb-2">© 2024 Jisol Park. All rights reserved.</p>
  </div>
</footer>

)

export default Footer