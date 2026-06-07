import { Heart } from "lucide-react";
import { siteConfig, socials } from "@/data/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-black/20 px-4 py-10 backdrop-blur-sm sm:px-0 sm:py-12">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-[400px] rounded-full bg-violet-500/10 blur-[80px]" />

      <div className="section">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-3 text-base text-(--muted)">
            <span className="text-lg font-bold text-(--foreground)">
              <span className="gradient-text">MS</span>
            </span>
            <span>•</span>
            <span>
              © {year} {siteConfig.name}
            </span>
          </div>

          {/* <div className="flex items-center gap-2 text-base font-medium text-(--muted)">
            Built with
            <Heart size={16} className="fill-red-500 text-red-500" />
            Next.js & Tailwind
          </div> */}

          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--muted) transition-all duration-200 hover:scale-110 hover:text-(--accent)"
                aria-label={social.name}
              >
                <social.icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
