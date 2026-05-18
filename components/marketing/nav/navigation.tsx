"use client";

import type * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "./navigation-menu";
import { siteConfig } from "@/configs/site";

interface MenuItem {
    title: string;
    href: string;
}

export default function Navigation() {
    const menuItems: MenuItem[] = [
        {
            title: 'Features',
            href: "#features",
        },
        {
            title: 'Pricing',
            href: "#price",
        },
        {
            title: 'Contact',
            href: "/contact",
        },
    ];

    return (
        <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
                {menuItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                        <NavigationMenuLink asChild>
                            <Link href={item.href} className={navigationMenuTriggerStyle()}>
                                {item.title}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
