"use client";
import { useEffect } from "react";

/**
 * ⭐ Global Smooth Scroll Hook
 * - Fixed navbar height offset handle করে
 * - Home button click → instant top
 * - সব anchor link → smooth scroll
 */
export function useSmoothScroll(navbarHeight = 80) {
  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);

      if (!targetEl) return;

      e.preventDefault();

      // Home section এ গেলে top এ scroll
      if (targetId === "home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        const top = targetEl.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({
          top: Math.max(0, top),
          behavior: "smooth",
        });
      }

      // URL hash update (history তে push)
      if (window.history.pushState) {
        window.history.pushState(null, "", href);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [navbarHeight]);
}
