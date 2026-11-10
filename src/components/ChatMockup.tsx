const MESSAGES = [
  {
    type: "user" as const,
    text: "Hi Alex, I'm looking for a villa in Provence for a family reunion next summer. We'll be 12 people.",
  },
  {
    type: "ai" as const,
    name: "Alex.AI",
    text: "Lovely! Provence is perfect for family gatherings. A few questions to find your ideal property:",
  },
  {
    type: "ai" as const,
    name: "Alex.AI",
    text: "Do you prefer the Luberon valley, or closer to the coast near Saint-Rémy?",
  },
  {
    type: "user" as const,
    text: "Luberon sounds magical. We have toddlers so a fenced pool is essential.",
  },
  {
    type: "ai" as const,
    name: "Alex.AI",
    text: "For the Luberon with child-safe pools, I'd start with Mas de Bonnieux or Domaine des Oliviers. Shall I compare chef and concierge options?",
  },
];

export default function ChatMockup() {
  return (
    <div className="chat-mock" aria-hidden="true">
      <div className="chat-mock-window">
        <div className="chat-mock-header">
          <span className="chat-mock-avatar">A</span>
          <div>
            <p className="chat-mock-name">Alex.AI</p>
            <p className="chat-mock-status">French Villa Expert · Online</p>
          </div>
        </div>
        <div className="chat-mock-messages">
          {MESSAGES.map((msg, index) => (
            <div
              key={`${msg.type}-${index}`}
              className={`chat-mock-bubble chat-mock-bubble--${msg.type}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {msg.type === "ai" ? <span className="chat-mock-label">{msg.name}</span> : null}
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-mock-input">
          <span>Type your message...</span>
          <span className="chat-mock-send" aria-hidden="true">
            →
          </span>
        </div>
      </div>
    </div>
  );
}
