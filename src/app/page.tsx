"use client";

import {
  IconBrandGithubFilled,
  IconBug,
  IconFileCode,
  IconHeartHandshake,
  IconRocket,
  IconPalette,
  IconAdjustments,
  IconArrowRight,
  IconSun,
  IconMoon,
  IconDeviceDesktop,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Page() {
  const { setTheme } = useTheme();

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center p-4 sm:p-8">
        <div className="flex flex-col items-center text-center gap-12 w-full max-w-2xl">
          <div className="flex items-center gap-3 text-2xl font-bold">
            <div className="font-semibold">Verve</div>
            <span className="font-light">+</span>
            <div className="font-semibold">Next.js</div>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold">Welcome to Verve</h1>
            <p className="text-muted-foreground">
              Your starter kit is ready. Let&apos;s build something great.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4 text-left">
            <Link
              href="https://nextjs.org/docs/app/guides/environment-variables"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group flex flex-col p-5 transition-all duration-300 ease-in-out bg-surface border rounded-lg hover:border-primary/80">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                    <IconAdjustments size={22} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Configure Your Project</h3>
                    <p className="text-sm text-muted-foreground">
                      Add your API keys and environment variables to{" "}
                      <code className="bg-muted px-1 py-0.5 rounded-sm font-semibold">
                        .env.local
                      </code>
                    </p>
                  </div>
                </div>
                <div className="mt-0 max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-8 group-hover:opacity-100 group-hover:mt-4">
                  <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <IconArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
            <div className="group flex flex-col p-5 transition-all duration-300 ease-in-out bg-surface border rounded-lg hover:border-primary/80">
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                  <IconPalette size={22} />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold">Customize Your Theme</h3>
                  <p className="text-sm text-muted-foreground">
                    Modify{" "}
                    <code className="bg-muted px-1 py-0.5 rounded-sm font-semibold">
                      styles/globals.css
                    </code>{" "}
                    to match your brand&apos;s visual identity
                  </p>
                </div>
              </div>
            </div>
            <Link
              href="https://nextjs.org/docs/app/getting-started/layouts-and-pages"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group flex flex-col p-5 transition-all duration-300 ease-in-out bg-surface border rounded-lg hover:border-primary/80">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                    <IconFileCode size={22} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Build Your First Page</h3>
                    <p className="text-sm text-muted-foreground">
                      Start creating pages and components inside the{" "}
                      <code className="bg-muted px-1 py-0.5 rounded-sm font-semibold">
                        app
                      </code>{" "}
                      directory
                    </p>
                  </div>
                </div>
                <div className="mt-0 max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-8 group-hover:opacity-100 group-hover:mt-4">
                  <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <IconArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
            <Link
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group flex flex-col p-5 transition-all duration-300 ease-in-out bg-surface border rounded-lg hover:border-primary/80">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 rounded-lg border border-primary/20 bg-primary/10 p-2 text-primary">
                    <IconRocket size={22} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold">Deploy to Production</h3>
                    <p className="text-sm text-muted-foreground">
                      Ship your application to Vercel for the best performance
                    </p>
                  </div>
                </div>
                <div className="mt-0 max-h-0 opacity-0 transition-all duration-300 ease-in-out group-hover:max-h-8 group-hover:opacity-100 group-hover:mt-4">
                  <div className="flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <IconArrowRight size={16} />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>

      <footer className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 p-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme("light")}
            className="p-2 rounded-md hover:bg-surface hover:text-foreground transition-colors"
            aria-label="Set light theme"
          >
            <IconSun size={16} />
          </button>
          <button
            onClick={() => setTheme("dark")}
            className="p-2 rounded-md hover:bg-surface hover:text-foreground transition-colors"
            aria-label="Set dark theme"
          >
            <IconMoon size={16} />
          </button>
          <button
            onClick={() => setTheme("system")}
            className="p-2 rounded-md hover:bg-surface hover:text-foreground transition-colors"
            aria-label="Set system theme"
          >
            <IconDeviceDesktop size={16} />
          </button>
        </div>

        <div className="hidden sm:block h-4 w-px bg-border"></div>

        <Link
          href="https://github.com/sobbing-cat/verve"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <IconBrandGithubFilled size={16} />
          GitHub Repo
        </Link>
        <Link
          href="https://github.com/sobbing-cat/verve/issues/new?template=bug_report.md"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <IconBug size={16} />
          Report a Bug
        </Link>
        <Link
          href="https://github.com/sobbing-cat/verve/issues/new?template=feature_request.md"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-foreground transition-colors"
        >
          <IconHeartHandshake size={16} />
          Request a Feature
        </Link>
      </footer>
    </div>
  );
}
