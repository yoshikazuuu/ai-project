import Link from "next/link";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./ui/mode-toggle";
import { SiGithub } from "react-icons/si";
import { Button } from "./ui/button";
import { MainNav } from "./main-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <Link
              href="https://github.com/yoshikazuuu/ai-project"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="ghost" size="icon">
                <SiGithub />
              </Button>
              <span className="sr-only">GitHub</span>
            </Link>

            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
