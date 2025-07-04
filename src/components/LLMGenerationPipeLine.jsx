import React from 'react';
import '../styles/LLMGenerationPipeLine.css';


const LLMGenerationPipeLine = () => {
  return (
    <div className="context-page">
      <h1>🧠 From Character to Prediction: How Language Models Work</h1>

      <section className="context-section">
        <h2>✅ Full Process: From Character to Prediction</h2>

        <h3>① Text Encoding: string → integer</h3>
        <p>
          The input string (e.g., "hello") is encoded into a sequence of integers:
          <br />
          'h' → 43, 'e' → 30, ...
          <br />
          This is called tokenization. It maps each character to a unique number.
        </p>

        <h3>② Lookup: integer → vector (embedding)</h3>
        <p>
          Each integer ID (like 43) is mapped to a vector using <code>nn.Embedding</code>:
          <br />
          Embedding(43) → [0.1, -0.2, ..., 0.9]
        </p>

        <h3>③ Model Computation: vector → logits (prediction scores)</h3>
        <p>
          These vectors go through the model and produce a set of logits:
          <br />
          logits = [2.3, -1.1, 0.5, ..., 3.2]
          <br />
          Each logit is the model's score for each possible next token.
        </p>

        <h3>④ Softmax: logits → probabilities</h3>
        <p>
          The logits are turned into actual probabilities:
          <br />
          probs = softmax(logits) → [0.6, 0.2, 0.1, ..., 0.01]
        </p>

        <h3>⑤ Sampling: probs → next token</h3>
        <p>
          The model randomly selects the next token using <code>torch.multinomial</code>:
          <br />
          id_next = torch.multinomial(probs, 1) → 0
        </p>

        <h3>⑥ Decoding: integer → character</h3>
        <p>
          The token is converted back into a character:
          <br />
          itos[0] → ' '
        </p>

        <h3>📌 Summary</h3>
        <p>
          A language model: transforms characters to vectors → predicts probabilities for the next token → samples to generate text.
        </p>
      </section>
    </div>
  );
};

export default LLMGenerationPipeLine;