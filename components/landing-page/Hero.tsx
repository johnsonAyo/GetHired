"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { HeroMaskStyle } from "@/utils/utils";

type HeroProps = {
  heading: string;
  subheading: string;
  ctaText: string;
  ctaLink: string;
  ctaText2?: string;
  ctaLink2?: string;
  imgLight: string;
  imgDark: string;
};

export default function Hero({
  heading,
  subheading,
  ctaText,
  ctaLink,
  ctaText2,
  ctaLink2,
  imgLight,
  imgDark,
}: HeroProps) {
  return (
    <div className="flex flex-col gap-5 w-full items-center text-center px-4 py-3 lg:px-20 xl:px-40 2xl:px-80">
      <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.1]">
        {heading}
      </h1>
      <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
        {subheading}
      </p>
      <div className="flex items-center gap-5">
        <Link href={ctaLink}>
          <Button>{ctaText}</Button>
        </Link>

        {ctaLink2 && (
          <Link href={ctaLink2}>
            <Button variant="outline">{ctaText2}</Button>
          </Link>
        )}
      </div>

      <div>
        <Image
          className="rounded-xl border border-border drop-shadow-xl mt-8 dark:hidden"
          src={imgLight}
          style={HeroMaskStyle}
          height={1200}
          width={1200}
          alt="Snapshot of the GetHired Job Board"
          priority
        />
        <Image
          className="rounded-xl border border-border drop-shadow-xl mt-8 hidden dark:block"
          src={imgDark}
          style={HeroMaskStyle}
          height={1200}
          width={1200}
          alt="Snapshot of the GetHired Job Board"
          priority
        />
      </div>
    </div>
  );
}
