"use client";

import { useLayoutEffect } from "react";
import { siteConfig } from "@/lib/site-config";

export function getScrollProgress(scrollY: number, scrollHeight: number, viewportHeight: number) {
  const distance = scrollHeight - viewportHeight;
  return distance > 0 ? Math.min(100, Math.max(0, (scrollY / distance) * 100)) : 0;
}

export function getStaggerDelay(index: number) {
  return index * 160;
}

function noAnim() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches || !siteConfig.revealAnimations;
}

function revealData(el: HTMLElement) {
  if (el.dataset.qShown === "1") return;
  el.dataset.qShown = "1";
  el.style.transitionDelay = `${parseInt(el.dataset.d || "0", 10) || 0}ms`;
  el.style.opacity = "1";
  el.style.transform = "none";
  el.classList.add("in-view");
}

export function useRevealAnimations() {
  useLayoutEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-q-root]");
    if (!root) return;

    const reduced = noAnim();
    const dispose: (() => void)[] = [];
    const observers: IntersectionObserver[] = [];

    const observe = (
      elements: Element[],
      onEntry: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => void,
      threshold = 0.15
    ) => {
      if (!elements.length || reduced) return;
      const observer = new IntersectionObserver(
        (entries) => entries.forEach((entry) => onEntry(entry, observer)),
        { threshold }
      );
      elements.forEach((element) => observer.observe(element));
      observers.push(observer);
    };

    root.querySelectorAll<HTMLElement>("[data-stagger-group]").forEach((group) => {
      group.querySelectorAll<HTMLElement>(".reveal-item").forEach((item, index) => {
        item.style.setProperty("--stagger", `${getStaggerDelay(index)}ms`);
      });
    });

    const reveals = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal], .reveal, .reveal-item")
    );

    const revealIfNear = (node: HTMLElement) => {
      const rect = node.getBoundingClientRect();
      return rect.top < window.innerHeight * 1.15 && rect.bottom > -80;
    };

    reveals.forEach((node) => {
      const dataOnly = node.hasAttribute("data-reveal") && !node.matches(".reveal, .reveal-item");
      if (dataOnly && !node.dataset.qPrimed) {
        node.style.transition =
          "opacity .5s cubic-bezier(.22,1,.36,1),transform .5s cubic-bezier(.22,1,.36,1)";
        node.dataset.qPrimed = "1";
        if (!reduced && node.dataset.qShown !== "1" && !revealIfNear(node)) {
          node.style.opacity = "0.92";
          node.style.transform = "translateY(12px)";
        }
      }
      if (reduced || revealIfNear(node)) {
        if (dataOnly) revealData(node);
        else node.classList.add("in-view");
      }
    });

    observe(reveals, (entry, observer) => {
      const node = entry.target as HTMLElement;
      const dataOnly = node.hasAttribute("data-reveal") && !node.matches(".reveal, .reveal-item");
      if (dataOnly) {
        if (entry.isIntersecting) {
          revealData(node);
          observer.unobserve(node);
        }
      } else if (entry.isIntersecting) {
        node.classList.add("in-view");
        observer.unobserve(node);
      }
    });

    const connectors = Array.from(root.querySelectorAll<HTMLElement>(".steps-connectors"));
    connectors.forEach((connector) => {
      connector.querySelectorAll<SVGGeometryElement>(".connector-path").forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = String(length);
        path.style.strokeDashoffset = String(length);
      });
      if (reduced) connector.classList.add("draw");
    });
    observe(connectors, (entry) => entry.target.classList.toggle("draw", entry.isIntersecting));

    const charts = Array.from(root.querySelectorAll<HTMLElement>(".signal-orbit-graphic"));
    charts.forEach((chart) => {
      if (reduced) chart.classList.add("draw");
    });
    observe(charts, (entry) => entry.target.classList.toggle("draw", entry.isIntersecting), 0.2);

    const labsGraphics = Array.from(root.querySelectorAll<HTMLElement>(".qiko-labs-reveal"));
    labsGraphics.forEach((graphic) => {
      graphic.querySelectorAll<HTMLElement>(".qiko-labs-band").forEach((band, index) => {
        band.style.setProperty("--stagger", `${getStaggerDelay(index)}ms`);
        if (reduced) band.classList.add("in-view");
      });
    });
    observe(labsGraphics, (entry) => {
      entry.target
        .querySelectorAll<HTMLElement>(".qiko-labs-band")
        .forEach((band) => band.classList.toggle("in-view", entry.isIntersecting));
    });

    const header = document.getElementById("site-header");
    const progress = document.getElementById("scroll-progress");
    const updateScroll = () => {
      header?.classList.toggle("scrolled", window.scrollY > 8);
      if (progress) {
        progress.style.width = `${getScrollProgress(
          window.scrollY,
          document.documentElement.scrollHeight,
          window.innerHeight
        )}%`;
      }
    };
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    dispose.push(() => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    });

    if (!reduced && window.matchMedia("(hover: hover)").matches) {
      root.querySelectorAll<HTMLElement>(".hero-visual, .labs-hero-visual").forEach((visual) => {
        // Skip the Labs hero stage carousel — its own slide animation owns transforms.
        if (visual.querySelector(".hero-stage")) return;
        const image = visual.querySelector<HTMLImageElement>("img");
        if (!image) return;
        const move = (event: MouseEvent) => {
          const rect = visual.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          image.style.transform = `perspective(1200px) rotateX(${-3 * y}deg) rotateY(${3 * x}deg)`;
        };
        const leave = () => {
          image.style.transform = "";
        };
        visual.addEventListener("mousemove", move);
        visual.addEventListener("mouseleave", leave);
        dispose.push(() => {
          visual.removeEventListener("mousemove", move);
          visual.removeEventListener("mouseleave", leave);
        });
      });

      root.querySelectorAll<HTMLElement>(".tilt-card").forEach((card) => {
        const move = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty("--mx", `${x * 100}%`);
          card.style.setProperty("--my", `${y * 100}%`);
          card.style.transform = `translateY(-8px) perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg)`;
        };
        const leave = () => {
          card.style.transform = "";
        };
        card.addEventListener("mousemove", move);
        card.addEventListener("mouseleave", leave);
        dispose.push(() => {
          card.removeEventListener("mousemove", move);
          card.removeEventListener("mouseleave", leave);
        });
      });
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
      dispose.forEach((remove) => remove());
    };
  }, []);
}
