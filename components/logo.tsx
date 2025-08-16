"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Logo(props: { className?: string; link?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Link
        href={props.link ?? "/"}
        className={cn("flex items-center space-x-2", props.className)}
      >
        <div className="h-[32px] w-[32px] bg-gray-200 animate-pulse rounded" />
      </Link>
    );
  }

  return (
    <Link
      href={props.link ?? "/"}
      className={cn("flex items-center space-x-2", props.className)}
    >
      <Image
        src={
          resolvedTheme === "dark"
            ? "/auspicesai-logo-white.png"
            : "/auspicesai-logo-purple.png"
        }
        alt="AuspicesAI"
        width={120}
        height={32}
        className="h-[32px] w-[32px]"
        priority
      />
    </Link>
  );
}
