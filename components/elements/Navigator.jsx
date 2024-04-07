"use client";
import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { FiPlus, FiMusic, FiCompass } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";
import PlayListNav from "./PlayListNav";

const Navigator = () => {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <FiCompass size={24} />,
        label: "둘러보기",
        isActive: pathname === "/explore",
        href: "/explore",
      },
      {
        icon: <FiMusic size={24} />,
        label: "보관함",
        isActive: pathname === "/library",
        href: "/library",
      },
    ];
  }, [pathname]);

  return (
    <div>
      <section className="p-4">
        {routes.map((route) => {
          return (
            <Link key={route.label} href={route.href}>
              <div
                className={cn(
                  "flex flex-row items-center gap-3 text-[16px] hover:bg-neutral-700 rounded-lg p-2",
                  route.isActive && "bg-neutral-800"
                )}
              >
                {route.icon}
                {route.label}
              </div>
            </Link>
          );
        })}
      </section>
      <section className="px-6 py-5">
        <div className="w-full h-[1px] bg-gray-700"></div>
      </section>
      <section className="px-6">
        <div className="flex flex-row items-center justify-center bg-neutral-800 rounded-3xl p-2 gap-2 font-[200] cursor-pointer ">
          <FiPlus size={24} />
          <span>새 재생목록</span>
        </div>
      </section>
      <section>
        <ul className="flex flex-col">
          {dummyPlaylistArray.map((playlist) => {
            return (
              <PlayListNav key={playlist.id} playlist={playlist}></PlayListNav>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Navigator;
