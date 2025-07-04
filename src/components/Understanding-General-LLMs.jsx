// src/components/UnderstandingGeneralLLMs.jsx
import React from 'react';
import '../styles/UnderstandingGeneralLLMs.css';

const UnderstandingGeneralLLMs = () => {
  return (
    <div className="llm-page">
      <h1>Before You Build: Understanding LLMs in Two Stages</h1>

      <section className="intro">
        <p>
          Before you build your own model, you need to understand the foundation that powers all of them.
          This page gives you a <strong>simplified overview</strong> — inspired by
          <a href="#">Andrej Karpathy’s lecture</a> — of how modern language models work in two stages.
        </p>
      </section>

      <section>
        <h2>Stage 1: Pretraining (The Base Model)</h2>
        <p>
          A massive neural network is trained to predict the next word on internet-scale text.
          Think of this like downloading <strong>the entire internet</strong>, compressing it into billions of parameters,
          and saving the “essence” of language.
        </p>
        <ul>
          <li>No understanding. Just pattern recognition.</li>
          <li>Output: a base model like LLaMA 3 or GPT-2.</li>
        </ul>
        <a href="/base-model">👉 Learn what a base model really is →</a>
      </section>

      <section>
        <h2>Stage 2: Post-training (The Fine-Tuned Model)</h2>
        <p>We then adjust this base model to make it more useful. For example:</p>
        <ul>
          <li>Give it examples of conversations</li>
          <li>Reward good answers</li>
          <li>Align it with humans</li>
        </ul>
        <p>This creates a model like ChatGPT: fluent, helpful, friendly.</p>
        <a href="/fine-tuning">👉 How fine-tuning works →</a>
      </section>

      <img src="/images/chatgpt-training-summary.png" alt="Summary of how to train your ChatGPT" className="llm-image" />

      <section>
        <h2>Why Separate the Two?</h2>
        <p>
          Karpathy calls this the <strong>"Two-Stage LLM Stack"</strong>.
          <br />
          Pretraining gives the model its “language brain”.
          <br />
          Fine-tuning teaches it to <strong>use that brain</strong> in helpful ways.
        </p>
        <p>This split allows you to:</p>
        <ul>
          <li>Start with powerful open-source models</li>
          <li>Customize them for your specific task</li>
        </ul>
      </section>

      <blockquote className="quote">
        "Pretraining is about memorizing the world. <br />
        Fine-tuning is about shaping its behavior." 
      </blockquote>

      <section>
        <h2>Limitations (What I Still Struggle With)</h2>
        <ul>
        <li><strong>Knowledge Cutoff:</strong> My training data has a cutoff date (typically around early 2023 for the most widely available models). I don't know about events that happened after that date unless specifically integrated with real-time information via RAG or other methods.</li>
        <li><strong>Hallucinations:</strong> I can sometimes generate incorrect or nonsensical information confidently ("hallucinate"). This is a persistent problem, and fact-checking my responses is always recommended.</li>
        <li><strong>Bias:</strong> My training data reflects the biases present in the real world. I can inadvertently perpetuate these biases in my responses. Developers are actively working to mitigate this.</li>
        <li><strong>Common Sense Reasoning:</strong> While improved, I still lack true common sense understanding of the world.</li>
    <   li><strong>Emotional Intelligence:</strong> I don't feel emotions and cannot truly understand human emotional states. My attempts at empathy are based on patterns in text data.</li>
        <li><strong>Complex Reasoning & Planning:</strong> I can struggle with tasks that require extensive planning or complex logical reasoning over many steps.</li>
    </ul>
    </section>


      <section>
        <h2>You Will Learn How To:</h2>
        <ul>
          <li>✅ Download a base model</li>
          <li>✅ Try prompting it locally</li>
          <li>✅ Fine-tune it on your own dataset</li>
          <li>✅ Understand what’s happening under the hood</li>
        </ul>
        <p>This is the first step. You're standing at the edge of a new galaxy.</p>
      </section>

      <a className="next-button" href="/build-your-gpt2">
        → Try Running a Base Model
      </a>
    </div>
  );
};

export default UnderstandingGeneralLLMs;

