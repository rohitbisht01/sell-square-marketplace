"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavbarSidebar from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button
      className={cn(
        "bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
        isActive ? "bg-black text-white hover:bg-black hover:text-white" : ""
      )}
      variant={"outline"}
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const NavbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href={"/"} className="pl-6 flex items-center">
        <span className="text-4xl text-center">SellSquare</span>
      </Link>

      <NavbarSidebar
        isOpen={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
        items={NavbarItems}
      />

      <div className="gap-4 items-center hidden lg:flex">
        {NavbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>

      <div className="hidden lg:flex">
        <Button
          variant="secondary"
          className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in">Log in</Link>
        </Button>
        <Button className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg">
          <Link href="/sign-up">Start Selling</Link>
        </Button>
      </div>

      <div className="flex lg:hidden items-center justify-center">
        <Button
          className="size-12 border-transparent bg-white"
          variant="ghost"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
}
