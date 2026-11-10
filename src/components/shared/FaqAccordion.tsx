"use client";

import { useState } from "react";

export type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  id?: string;
  title?: string;
  items: readonly FaqItem[];
};

export default function FaqAccordion({
  id = "faq",
  title = "Frequently Asked Questions",
  items,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section faq-section" id={id}>
      <div className="section-inner reveal">
        <div className="section-head">
          <h2>{title}</h2>
        </div>
        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <h3 className="faq-question-heading">
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="faq-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-toggle" aria-hidden="true">
                      <img src="/qiko-static/assets/icons/chevron-down.svg" alt="" />
                    </span>
                  </button>
                </h3>
                <div className="faq-answer" aria-hidden={!isOpen}>
                  <div className="faq-answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
