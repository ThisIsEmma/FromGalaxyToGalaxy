import React, { useState } from "react";
import '../styles/BabyBotExplainer.css';

export default function BabyAttentionExplainer() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Chapter 0: BabyBot's Settings 📋",
      content: `Original Code:

    batch_size = 16
    block_size = 32
    max_iters = 5000
    eval_interval = 100
    learning_rate = 1e-3
    device = 'cuda' if torch.cuda.is_available() else 'cpu'
    eval_iters = 200
    n_embd = 64
    n_head = 4
    n_layer = 4
    dropout = 0.0

Explanation:
These are BabyBot's setup options! We tell BabyBot:
- How many samples to read at once (batch_size)
- How far back to look in context (block_size)
- How many learning steps to take
- Whether to use GPU or CPU
- How big his brain is (n_embd, n_head, n_layer)`
    },
    {
      title: "Chapter 1: Reading the Big Book 📖",
      content: `Original Code:

    with open('input.txt', 'r', encoding='utf-8') as f:
        text = f.read()

Explanation:
We give BabyBot a big book — Shakespeare! This line loads all the text so BabyBot can start learning.`
    },
    {
      title: "Chapter 2: Learning the Alphabet 🔤",
      content: `Original Code:

    chars = sorted(list(set(text)))
    vocab_size = len(chars)

Explanation:
We find all unique characters in the book, like 'a', 'b', spaces, punctuation, etc. These are BabyBot’s basic building blocks.`
    },
    {
      title: "Chapter 3: From Letters to Numbers 🔢",
      content: `Original Code:

    stoi = { ch:i for i,ch in enumerate(chars) }
    itos = { i:ch for i,ch in enumerate(chars) }
    encode = lambda s: [stoi[c] for c in s]
    decode = lambda l: ''.join([itos[i] for i in l])

Explanation:
We teach BabyBot how to turn text into numbers (and back). Now he can understand characters as IDs.`
    },
    {
      title: "Chapter 4: Splitting into Train and Validation 📚",
      content: `Original Code:

    data = torch.tensor(encode(text), dtype=torch.long)
    n = int(0.9*len(data))
    train_data = data[:n]
    val_data = data[n:]

Explanation:
We split the book into two parts: one for learning, and one to check how much BabyBot remembers.`
    },
    {
      title: "Chapter 5: Feeding in Small Bites 🍱",
      content: `Original Code:

    def get_batch(split):
        data = train_data if split == 'train' else val_data
        ix = torch.randint(len(data) - block_size, (batch_size,))
        x = torch.stack([data[i:i+block_size] for i in ix])
        y = torch.stack([data[i+1:i+block_size+1] for i in ix])
        x, y = x.to(device), y.to(device)
        return x, y

Explanation:
We break the book into tiny batches. BabyBot eats a piece (x), and tries to guess what comes next (y).`
    },
    {
      title: "Chapter 6: What is Self-Attention? 👀",
      content: `Imagine we have a sentence: "I love AI"

Each word becomes a small vector:

    I     → [0.1, 0.5, -0.3, 0.2]
    love  → [-0.4, 0.3, 0.8, -0.6]
    AI    → [0.7, -0.1, 0.0, 0.4]

We compute Q, K, V vectors for each word using different matrices for 2 attention heads:

🔹 Head 1:
| Token | Q            | K           | V            |
|-------|--------------|-------------|--------------|
| I     | [1.0, 0.2]   | [0.8, 0.5]  | [0.1, 0.4]   |
| love  | [0.3, 0.9]   | [0.4, 0.7]  | [-0.2, 0.6]  |
| AI    | [0.5, -0.1]  | [0.6, 0.1]  | [0.7, -0.3]  |

🔹 Head 2:
| Token | Q            | K           | V            |
|-------|--------------|-------------|--------------|
| I     | [0.2, 1.0]   | [0.5, 0.8]  | [0.6, 0.2]   |
| love  | [0.9, 0.3]   | [0.7, 0.4]  | [0.1, -0.5]  |
| AI    | [-0.1, 0.5]  | [0.1, 0.6]  | [-0.4, 0.3]  |

🔍 Head 1 Results:
- "I": dot(Q_I, K) = [0.9, 0.54, 0.62] → softmax = [0.42, 0.28, 0.30]
    → mix V = [0.196, 0.246]
Does it mean it always pay attnetion to I since I has 0.42? No. Because after training it will adjust its weight. 
- "love": dot(Q_love, K) = [0.51, 0.75, 0.14] → softmax = [0.30, 0.45, 0.25]
    → mix V = [-0.03, 0.425]
- "AI": dot(Q_AI, K) = [0.43, 0.31, 0.29] → softmax = [0.36, 0.32, 0.32]
    → mix V = [0.251, 0.188]

🔍 Head 2 Results:
- "I": dot(Q_I, K) = [0.86, 0.58, 0.62] → softmax = [0.42, 0.28, 0.30]
    → mix V = [0.208, 0.024]
- "love": dot(Q_love, K) = [0.69, 0.75, 0.33] → softmax = [0.33, 0.36, 0.31]
    → mix V = [0.123, -0.152]
- "AI": dot(Q_AI, K) = [0.37, 0.29, 0.29] → softmax = [0.35, 0.33, 0.32]
    → mix V = [-0.09, 0.138]

🧠 Final Outputs (Head1 + Head2):
- I: [0.196, 0.246, 0.208, 0.024]
- love: [-0.03, 0.425, 0.123, -0.152]
- AI: [0.251, 0.188, -0.09, 0.138]`
    },
    {
      title: "Chapter 7: Think Deeper with FeedForward 🧠",
      content: `Original Code:

    class FeedFoward(nn.Module):
        def __init__(self, n_embd):
            super().__init__()
            self.net = nn.Sequential(
                nn.Linear(n_embd, 4 * n_embd),
                nn.ReLU(),
                nn.Linear(4 * n_embd, n_embd),
                nn.Dropout(dropout),
            )

        def forward(self, x):
            return self.net(x)

Explanation:
It is like summarizing and storing in a short term memories.
✍️ Taking messy notes → expanding into an outline → summarizing clearly → keeping only the helpful points.

After attending to other words, BabyBot wants to reflect more deeply. This FeedForward network acts like a mini-brain that thinks by itself.

- It first stretches the vector 4x longer (like expanding thoughts)
- Then adds ReLU (non-linear thinking)
- Then squishes it back to the original size
- And finally, applies a bit of dropout to help generalize`


    },
    {
      title: "Chapter 8: Transformer Block = Attention + Thinking 🧱",
      content: `Original Code:

    class Block(nn.Module):
        def __init__(self, n_embd, n_head):
            super().__init__()
            head_size = n_embd // n_head
            self.sa = MultiHeadAttention(n_head, head_size)
            self.ffwd = FeedFoward(n_embd)
            self.ln1 = nn.LayerNorm(n_embd)
            self.ln2 = nn.LayerNorm(n_embd)

        def forward(self, x):
            x = x + self.sa(self.ln1(x))
            x = x + self.ffwd(self.ln2(x))
            return x

Explanation:
This is a full transformer block:
1. First, BabyBot normalizes its thoughts
2. Then pays attention to others
3. Then normalizes again
4. Then thinks deeply by itself

All these steps happen in sequence — like one cycle of reading, understanding, and reflecting.`
    }
  ];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧠 BabyBot: Learn with Attention</h1>

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
