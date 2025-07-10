import React, { useState } from "react";
import '../styles/BabyBotExplainer.css';

export default function BabyBotExplainer() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Step 1: Build BabyBot’s Alphabet",
      content: `You give BabyBot the sentence "hello world!".

Original code:

    text = "hello world!"
    chars = sorted(list(set(text)))

It finds all unique characters: 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd', '!'.
Then it sorts them by computer logic (ASCII order): [' ', '!', 'd', 'e', 'h', 'l', 'o', 'r', 'w'].
That's why space ' ' is index 0.`
    },
    {
      title: "Step 2: Assign a Number to Each Character",
      content: `BabyBot builds two maps:

    stoi = {' ': 0, '!': 1, 'd': 2, 'e': 3, 'h': 4, 'l': 5, 'o': 6, 'r': 7, 'w': 8}
    itos = {0: ' ', 1: '!', 2: 'd', 3: 'e', 4: 'h', 5: 'l', 6: 'o', 7: 'r', 8: 'w'}

Now BabyBot understands characters as numbers.`
    },
    {
      title: "Step 3: Convert the Sentence to Numbers",
      content: `The sentence "hello world!" becomes:

    data = torch.tensor([4, 3, 5, 5, 6, 0, 8, 6, 7, 5, 2, 1])

That's: 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!'`
    },
    {
      title: "Step 4: BabyBot’s Brain (Embedding Table)",
      content: `Now you hand BabyBot a magical notebook: an embedding table. He doesn't know the rules yet — so each page is filled with random numbers.

Original code:

    class BigramLanguageModel(nn.Module):
        def __init__(self, vocab_size):
            super().__init__()
            self.token_embedding_table = nn.Embedding(vocab_size, vocab_size)

What does this give us? A 9x9 table where each row is BabyBot’s guess of what comes next if he sees that letter. Initially, these guesses are just random scribbles.

Let’s show this as a proper table:

    ┌────────────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
    │ Character  │  ' '│  '!'│  'd'│  'e'│  'h'│  'l'│  'o'│  'r'│  'w'│
    ├────────────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
    │ ' ' (0)    │ 0.2 │-0.1 │ 0.5 │ 0.7 │-0.3 │ 0.1 │ 0.0 │ 0.2 │-0.2 │
    │ '!' (1)    │-1.1 │ 0.3 │ 0.0 │ 0.4 │ 0.9 │-0.6 │ 0.2 │ 0.5 │ 0.1 │
    │ 'd' (2)    │ 0.6 │ 0.2 │ 1.0 │-0.2 │ 0.1 │ 0.3 │ 0.8 │-0.1 │ 0.4 │
    │ 'e' (3)    │ 0.1 │-0.3 │ 0.7 │ 0.5 │ 0.0 │ 0.2 │-0.2 │ 0.3 │ 0.4 │
    │ 'h' (4)    │ 0.8 │ 0.3 │ 0.6 │ 0.5 │ 0.0 │ 0.1 │-0.1 │ 0.7 │ 0.2 │
    │ 'l' (5)    │ 0.4 │ 0.1 │ 0.2 │ 0.3 │ 0.7 │ 0.6 │-0.4 │ 0.9 │-0.2 │
    │ 'o' (6)    │ 0.0 │ 0.3 │ 0.5 │ 0.2 │ 0.1 │-0.3 │ 0.6 │ 0.8 │-0.1 │
    │ 'r' (7)    │ 0.9 │ 0.0 │ 0.1 │ 0.2 │-0.5 │ 0.4 │ 0.3 │ 0.6 │ 0.5 │
    │ 'w' (8)    │ 0.3 │ 0.1 │ 0.4 │ 0.2 │ 0.6 │-0.2 │ 0.5 │ 0.7 │-0.3 │
    └────────────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘

So if you give BabyBot the letter 'l' (index 5), he flips to row 5 and sees his scores for each possible next character.`
    },
    {
      title: "Step 5: Guessing Time",
      content: `BabyBot looks at input [4, 3, 5, 5, 6, 0, 8, 6, 7, 5, 2] → "hello worl..."

Code:

    def forward(self, idx, targets=None):
        logits = self.token_embedding_table(idx)

It gives scores for what comes next after each character. These are logits (raw guesses).`
    },
    {
      title: "Step 6: Measure the Mistake",
      content: `You provide the true targets:

    targets = [[3, 5, 5, 6, 0, 8, 6, 7, 5, 2, 1]]

Cross entropy is used to compute how wrong BabyBot’s guesses were.`
    },
    {
      title: "Step 7: Learn and Update",
      content: `The update step:

    loss.backward()
    optimizer.step()

This tells BabyBot: "Change your table so next time you're more right."`
    },
    {
      title: "Step 8: Generate New Text",
      content: `You use the model to write:

    def generate(self, idx, max_new_tokens):
        for _ in range(max_new_tokens):
            logits, _ = self(idx)
            logits = logits[:, -1, :]
            probs = F.softmax(logits, dim=-1)
            idx_next = torch.multinomial(probs, num_samples=1)
            idx = torch.cat((idx, idx_next), dim=1)
        return idx

Then:

    m.generate(torch.tensor([[4]]), max_new_tokens=10)  # start with 'h'

Might output: [4, 3, 5, 6, 0, 8, 6, 7, 5, 2, 1] → "hello world!"`  
    },
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🍼 BabyBot: Learn to Talk</h1>

      <div className="border p-4 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-2">{steps[step].title}</h2>
        <pre className="whitespace-pre-wrap text-gray-800">{steps[step].content}</pre>
      </div>

      <div className="flex justify-between mt-6">
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
        >
          ← Back
        </button>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
