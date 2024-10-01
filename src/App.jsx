import styles from './style';
import { Hero, About, Project, Skills, Footer } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail'; 
import Exploring from './components/Exploring';

const App = () => (
  <Router>
    <div className="bg-primary w-full overflow-hidden">
      <Routes>
        {/* Home route displaying the Hero, About, and Project components */}
        <Route path="/" element={
          <>
            <div className={`bg-secondary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero />
                <About />
              </div>
            </div>

            <div className={`bg-white ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Project />
              </div>
            </div>
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
