import React from 'react';
import { useNavigate } from 'react-router-dom';

const StorybookLanding = () => {
  const navigate = useNavigate(); // ✅ 这里定义 navigate

  return (
    <div style={{ padding: '2rem' }}>
      <h1>📚 Welcome to the Baby Language Model Storybook!</h1>
      <p>Choose a story to explore:</p>

      <ul style={{ fontSize: '1.2rem', listStyle: 'none', padding: 0 }}>
        <li>
          <button onClick={() => navigate('/overview-of-the-process')}>
            Overview of the process
          </button>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <button onClick={() => navigate('/llm-generation-pipeline')}>
            📘 LLM Pipeline
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/baby-attention-story')}>
            🍬 Baby Attention
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/baby-bot-learn-attention')}>
            🍬 Baby Attention Further detail process
          </button>
        </li>

      </ul>
    </div>
  );
};

export default StorybookLanding;
