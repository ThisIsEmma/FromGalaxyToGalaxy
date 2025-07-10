import React from 'react';

export default function OverviewOfTheProcess  () {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🧠 How a Transformer Learns</h1>

      

      <p className="mb-4">
    <div> "I love robots"</div>
    

    First, we start with embedding, where each token in a sentence is converted into a vector.

Second, we apply multi-head self-attention, where each “head” represents a different way of looking at relationships between tokens — like viewing the sentence from different perspectives.

For each head, we compute Q (Query), K (Key), and V (Value) matrices. The Q matrix represents the current word asking a question like “Who is relevant to me?” The K matrix contains the identities of all words, and V carries their actual content information.

We then compute the attention scores by multiplying Q and Kᵀ, which gives us a table (or matrix) showing how much each token is related to every other token. For example:
	•	How “I” is related to “love”
	•	How “love” is related to “robots”
	•	And so on…

After computing the scores, we apply softmax to normalize them into probabilities, and then use these as weights to do a weighted sum of V, so we can form a new representation of each token, based on its relationship with other tokens.

Since we have multiple heads, we concatenate the outputs from all heads. This step integrates information gathered from different “angles” or perspectives.

After that, we pass each token’s updated vector into a FeedForward layer, which helps the model capture more complex patterns. This part is like self-reflection: each token processes its own information more deeply — it’s no longer just about attention to others, but about transforming and refining itself.

Then we calculate the loss by comparing the model’s prediction with the true next token (from the training data). Using backpropagation, we update the model’s parameters (including Q, K, V, and the feedforward layers) to make the model better.

We repeat this whole process — embedding, attention, feedforward, loss — across many batches of data. Over time, the model becomes better and better.

So eventually, when we give it a token like “I”, the model learns to predict something meaningful like “love” — not just randomly say “robots” — because it has already learned to pay attention to relationships and context.
      </p>

    </div>
  );
}
