import React, { useState } from 'react';
import '../styles/BabyBotExplainer.css';

export default function CandySmoothieStory() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Step 1: Meet the Candies 🍬',
      content: `You have 3 candies:

- Candy 1
- Candy 2
- Candy 3

Each candy has a unique flavor (like sweet, sour, fruity), represented by numbers. These flavors are the "values" each candy holds.`
    },
    {
      title: 'Step 2: Who Can See Who 👀',
      content: `Candy 1 only sees itself.
Candy 2 sees itself and Candy 1.
Candy 3 sees itself, Candy 2, and Candy 1.

This is a lower-triangular matrix (attention mask) — like this:

    [[1, 0, 0],
     [1, 1, 0],
     [1, 1, 1]]`
    },
    {
      title: 'Step 3: Share the Love ❤️',
      content: `Each candy evenly distributes attention to those it can see:

    [[1.0, 0.0, 0.0],   → Candy 1 only cares about itself
     [0.5, 0.5, 0.0],   → Candy 2 gives half love to itself, half to Candy 1
     [0.33, 0.33, 0.33]] → Candy 3 loves all three equally

Each row is how much attention each candy gives.`
    },
    {
      title: 'Step 4: Candies Have Flavors 😋',
      content: `Assign flavor vectors (2 numbers) to each candy:

    Candy 1: [2, 6]
    Candy 2: [7, 6]
    Candy 3: [4, 7]`
    },
    {
      title: 'Step 5: Make Smoothies 🍹',
      content: `Each candy mixes flavors from the candies it gives attention to.

Use matrix multiplication (attention @ flavor) to get:

    Candy 1’s smoothie: [2, 6]
    Candy 2’s smoothie: [(2+7)/2, (6+6)/2] = [4.5, 6.0]
    Candy 3’s smoothie: (2+7+4)/3, (6+6+7)/3 = [4.33, 6.33]

Each candy creates a new flavor — a smoothie! — from the ones it pays attention to.`
    },
    {
      title: 'Step 6: That’s Self-Attention! 🤯',
      content: `Self-attention is just like this candy party:

- Tokens = candies 🍬
- Values = flavors 😋
- Attention = how much you like each candy ❤️
- Output = smoothie 🍹

Each token creates a weighted average of others it attends to.

That’s how language models learn context!`
    }
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🍬 Candy Smoothie Attention Party</h1>

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
