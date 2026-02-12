import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary pt-12 md:pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="헤어그래피 홈">
              <Image
                src="/images/logo.png"
                alt="Hairgraphy"
                width={140}
                height={36}
                className="h-8 w-auto brightness-0 invert mb-4"
                sizes="140px"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed">
              헤어 디자이너를 위한
              <br />
              올인원 앱
            </p>
            {/* Social icons */}
            <div className="flex gap-4 mt-6">
              {/* Instagram */}
              <a
                href="#"
                className="text-white/40 hover:text-coral transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                className="text-white/40 hover:text-coral transition-colors"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* KakaoTalk */}
              <a
                href="#"
                className="text-white/40 hover:text-coral transition-colors"
                aria-label="KakaoTalk"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M12 3c-5.523 0-10 3.582-10 8 0 2.844 1.888 5.343 4.736 6.756-.208.784-1.336 4.612-1.38 4.912 0 0-.027.219.116.303.143.084.311.035.311.035.41-.057 4.748-3.12 5.5-3.654.572.084 1.16.128 1.76.128 5.522 0 10-3.582 10-8s-4.478-8-10-8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link groups */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="text-white font-semibold mb-4 text-sm">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/40 hover:text-white/70 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-sm">
            &copy; 2026 Hairgraphy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
