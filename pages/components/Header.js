import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import Link from "next/link";
import { useRouter } from "next/router";

/* Icon imports */
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

export default function Header() {
  const router = useRouter()
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Link href="/"><a><HeaderItem title="HOME" Icon={HomeIcon} /></a></Link>
        <Link href="/?genre=fetchTrending"><a><HeaderItem title="TRENDING" Icon={LightningBoltIcon} /></a></Link>
        <Link href="/"><a><HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} /></a></Link>
        <Link href="/"><a><HeaderItem title="COLLECTIONS" Icon={CollectionIcon} /></a></Link>
        <Link href="/"><a><HeaderItem title="SEARCH" Icon={SearchIcon} /></a></Link>
        <Link href="/"><a><HeaderItem title="ACCOUNT" Icon={UserIcon} /></a></Link>
      </div>
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
          />
        </a>
      </Link>
    </header>
  );
}
