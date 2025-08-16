import { buttonVariants } from "@/components/ui/button";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground max-w-md">
            Concerned about AI tools such as code generating models being used to breach your security? We research current and future threats created by AI technologies to build defensive solutions that keep you protected.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-2">
              <Link
                href="https://linkedin.com/company/auspicesai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-xl text-foreground hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-2xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-200"
              >
                <LinkedInLogoIcon className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/auspicesai"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center h-9 w-9 rounded-xl text-foreground hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-2xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-200"
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AuspicesAI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
