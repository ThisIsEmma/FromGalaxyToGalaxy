import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import GalaxyMap from './components/GalaxyMap';
import UnderstandingGeneralLLMs from './components/Understanding-General-LLMs';
import BuildYourGPT2 from './components/BuildYourGPT2';
import LLMQuestion from './components/LLMQuestion';
import LLMGenerationPipeLine from './components/LLMGenerationPipeLine';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/galaxy-map" element={<GalaxyMap />} />
        <Route path="/understanding-General-llms" element={<UnderstandingGeneralLLMs />} />
        <Route path="/build-your-gpt2" element={<BuildYourGPT2 />} />
        <Route path="/llm-question" element={<LLMQuestion />} />
        <Route path="/llm-generation-pipeline" element={<LLMGenerationPipeLine />} />


      </Routes>
    </Router>
  );
}

export default App;
