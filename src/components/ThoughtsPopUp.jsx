
import React from 'react';
import { Link } from 'react-router-dom';


export default function ThoughtsPopUp() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🧠 Thoughts Archive</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🌌 Philosophical Questions by Myself</h2>
        <Link
          to="/thoughts/philosophy"
          className="text-blue-600 hover:underline"
        >
          → View My Deep Questions
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">💬 Conversation with Others</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <Link to="/thoughts/convo-YuMeng-2025-07-09" className="text-blue-600 hover:underline">
              📅 2025-7-09 — Dialect 
            </Link>
          </li>
          <li>
            <Link to="/thoughts/convo-classmate-2025-02-20" className="text-blue-600 hover:underline">
              📅 2025-02-20 — With Classmate
            </Link>
          </li>
          <li>
            <Link to="/thoughts/convo-stranger-2025-06-10" className="text-blue-600 hover:underline">
              📅 2025-06-10 — With Stranger
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
} 