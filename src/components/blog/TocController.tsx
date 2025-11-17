"use client";

import { useEffect } from "react";

export default function TocController() {
  useEffect(() => {
    const headings: NodeListOf<HTMLElement> =
      document.querySelectorAll("[id]");

    const tocLinks: NodeListOf<HTMLAnchorElement> =
      document.querySelectorAll(".toc-link");

    function onScroll() {
      let activeId: string = "";

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const visible = rect.top <= 150 && rect.bottom >= 150;

        if (visible) {
          activeId = heading.id;
        }
      });

      tocLinks.forEach((link) => {
        const id = link.getAttribute("data-id");
        if (id === activeId) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <style jsx global>{`
      .toc-link {
        position: relative;
        padding-left: 12px;
        transition: color 0.2s ease;
      }

      .toc-link::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        height: 25%;
        background: transparent;
        border-radius: 2px;
        transition: background 0.2s ease;
      }

      .toc-link.active {
        color: #22C55E;
        font-weight: 600;
      }

      .toc-link.active::before {
        background: #22C55E;
      }
    `}</style>
  );
}
