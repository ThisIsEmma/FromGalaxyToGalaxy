import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import GalaxyMap from './components/GalaxyMap';
import UnderstandingGeneralLLMs from './components/Understanding-General-LLMs';
import BuildYourGPT2 from './components/BuildYourGPT2';
import LLMQuestion from './components/LLMQuestion';
import LLMGenerationPipeLine from './components/LLMGenerationPipeLine';
import BabyAttentionStory from './components/BabyAttentionStory';
import StoryBookLanding from './components/StoryBookLanding';
import BabyBotLearnAttention from './components/BabyBotLearnAttention';
import ThoughtsPopUp from './components/ThoughtsPopUp';
import ThoughtsYuMeng20250709 from './components/ThoughtsYuMeng20250709';
import OverviewOfTheProcess from './components/OverviewOfTheProcess';




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
        <Route path="/baby-attention-story" element={<BabyAttentionStory />} />
        <Route path="/storybook" element={<StoryBookLanding />} />
        <Route path="/baby-bot-learn-attention" element={<BabyBotLearnAttention />} />
        <Route path="/thoughts-Pop-up" element={<ThoughtsPopUp/>} />
        <Route path="/thoughts/convo-YuMeng-2025-07-09"element={<ThoughtsYuMeng20250709 />}/>
        <Route path="/overview-of-the-process" element={<OverviewOfTheProcess/>} />

       


      </Routes>
    </Router>
  );
}

export default App;
