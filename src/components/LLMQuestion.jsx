import React from 'react';
import '../styles/LLMQuestion.css';

const LLMQuestion = () => {
  return (
    <div className="context-page">
      <h1>🧠 My Evolving Question About Meaning in LLMs</h1>
      <p className="intro-quote">
        “I used to think language models only predict the most common next words based on huge datasets —
        like after the word ‘it’, probably comes ‘is’ or ‘was’.
        But now I’m learning that the model can actually figure out what ‘it’ refers to in a sentence, like 'the mouse'.
        <br /><br />
        So my question is: <strong>How does a model trained on huge general data actually focus on the specific meaning of ‘it’</strong>
        in a sentence like this?
        <br />
        Does it still rely on general next-word patterns?
        <br />
        Or is it truly understanding context — like humans do, when we infer that ‘it’ = ‘mouse’?”
      </p>

      <h2>🔍 You’re Comparing Two Views:</h2>
      <table className="comparison-table">
        <thead>
          <tr>
            <th>View A: Pattern Memory (shallow)</th>
            <th>View B: Contextual Understanding (deep)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>“It” is followed by “rains,” “is,” “was” etc.</td>
            <td>“It” refers to something earlier in the sentence (“mouse”)</td>
          </tr>
          <tr>
            <td>The model just learns what words follow what</td>
            <td>The model builds an understanding of what “it” means</td>
          </tr>
          <tr>
            <td>Language = autocomplete on steroids</td>
            <td>Language = relational, structured meaning</td>
          </tr>
          <tr>
            <td>Based on stats over the whole internet</td>
            <td>Based on interpreting this exact sentence right now</td>
          </tr>
        </tbody>
      </table>

      <section className="context-section">
        <h2>🎯 So which is correct?</h2>
        <p>✅ Both are true — but the second is deeper. This is what modern Transformers like GPT-4 actually do.</p>

        <h3>🔹 First, Yes: Early models were more like View A.</h3>
        <p>They just tracked word patterns — like saying “after ‘it’ usually comes ‘is’ or ‘was.’”</p>
        <p>But they couldn’t understand what “it” refers to.</p>

        <h3>🔹 But Transformers do more: View B</h3>
        <p>Modern LLMs build meaning using self-attention and huge data.</p>

        <h3>💡 How?</h3>
        <ul>
          <li>👀 They look at the whole sentence</li>
          <li>🔍 Compute attention for each token</li>
          <li>🧠 Combine those attentions to choose what “it” means</li>
        </ul>

        <p>Example: “The cat chased the mouse. It ran away.” → It = the mouse.</p>

        <h3>🧠 Analogy: How humans do it</h3>
        <p>We don’t guess what follows “it” — we infer what “it” *is* based on sentence logic.</p>

        <h3>✅ So your question: “How does it know ‘it’ refers to mouse?”</h3>
        <p>It learns through training on examples like “The dog chased the cat. It ran…”</p>
        <ul>
          <li>✔ It discovers reference patterns</li>
          <li>✔ Learns to attend to subjects/verbs/nouns</li>
          <li>✔ Builds meaning via self-supervised learning</li>
        </ul>

        <h3>🛠 Who builds this understanding?</h3>
        <ul>
          <li>Humans build the architecture (Transformer)</li>
          <li>Give it an objective (predict the next word)</li>
          <li>The model *discovers* meaning on its own</li>
        </ul>

        <h2>🎯 Final Answer:</h2>
        <p>❓Is it about frequent word patterns — or actual meaning?</p>
        <p>✅ It’s both — but models like GPT lean toward meaning.</p>
        <p>This is why <strong>self-attention</strong> is the heart of LLMs.</p>

        <div className="questions">
          <p>Would you like to:</p>
          <ul>
            <li>🧪 Simulate GPT’s attention on a sentence?</li>
            <li>📊 Visualize “it” referring to “mouse” in a map?</li>
            <li>🧭 Explore what “meaning” means in vector space?</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default LLMQuestion;
