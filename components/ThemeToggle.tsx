"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("esc-theme") as Theme | null;
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(readTheme());
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("esc-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  }

  // Anti-FOUC: renderiza placeholder até hidratar (mantém layout)
  if (!mounted) {
    return (
      <div
        aria-hidden
        className={cn("h-10 w-10 rounded-full", className)}
      />
    );
  }

  const Icon = theme === "dark" ? Sun : Moon;
  const label = theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full",
        "border border-[var(--border)] bg-transparent",
        "text-[var(--fg)] transition-colors",
        "hover:bg-[var(--card)] hover:text-[var(--color-orange)]",
        className,
      )}
    >
      <Icon className="h-4 w-4" aria-hidden />
    </button>
  );
}
