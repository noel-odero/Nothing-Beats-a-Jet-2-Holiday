"use client";
import { XIcon } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<
    { sender: "user" | "bot"; text: string }[]
  >([]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { sender: "user", text: input }]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: "I'm a bot! How can I help you?" },
      ]);
    }, 600);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        aria-label="Open chat"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 bg-[var(--brand-primary)]/70 cursor-pointer hover:border-green-400 hover:-translate-y-1 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition border-2 border-white"
      >
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="12"
            fill="var(--brand-accent)"
            fillOpacity="0.18"
          />
          <path
            d="M7 17v-2a2 2 0 012-2h6a2 2 0 012 2v2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-[var(--surface)] dark:bg-[var(--surface-contrast)] rounded-md shadow-2xl flex flex-col overflow-hidden border border-white/80">
          <div className="flex items-center justify-between px-4 py-2 bg-[var(--brand-primary)] text-[var(--brand-accent)]">
            <span className="font-semibold text-secondary">Chatbot</span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="text-[var(--brand-accent)] hover:text-[var(--brand-secondary)]"
            >
              <XIcon className="text-white/80" />
            </button>
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-80">
            {messages.length === 0 && (
              <div className="text-white text-sm text-center">
                How can I help you?
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-md text-sm max-w-[70%] ${
                    msg.sender === "user"
                      ? "bg-white/80 text-[var(--brand-primary)]"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form
            className="flex border-t border-white/80"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              ref={inputRef}
              className="flex-1 px-3 py-2 outline-none bg-transparent text-white dark:text-[var(--brand-accent)]"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              type="submit"
              className="px-4 text-white font-semibold hover:text-[var(--brand-secondary)]"
              disabled={!input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
