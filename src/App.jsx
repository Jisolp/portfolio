import styles from './style';
import { Hero, About, Project, Skills, Footer, NavBar } from './components'; // Ensure NavBar is imported
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail'; 
import Exploring from './components/Exploring';

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden relative">
      <NavBar /> 

      <Routes>
        <Route path="/" element={
          <>

            <Hero />
            <About />
            <Project />
            <Skills />
          </>
        } />

        {/* Route for individual project details */}
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/exploring" element={<Exploring />} />
      </Routes>

      <Footer />
    </div>
  </Router>
);

export default App;
