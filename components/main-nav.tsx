"use client"

import * as React from "react"
import Link from "next/link"
import { Example } from "@/types"

import { examples } from "@/data/examples"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function MainNav() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="space-x-1">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "h-9")}
            >
              Overview
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "h-9")}
            >
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="h-9">
            Examples
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[640px] ">
              {examples.map((example) => (
                <ListItem key={example.title} example={example} />
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(navigationMenuTriggerStyle(), "h-9")}
            >
              Playground
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { example: Example }
>(({ className, example, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none items-start space-x-4 space-y-1 rounded-md p-3 leading-none no-underline outline-none ",
            "transition-colors hover:bg-neutral-5 focus:bg-neutral-6 dark:hover:bg-neutralDark-5 dark:focus:bg-neutralDark-6",
            className
          )}
          {...props}
        >
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-md text-white"
            )}
            style={{
              background: example.color,
            }}
          >
            <example.icon />
          </div>
          <div className="grid flex-1 gap-1">
            <div className="text-sm font-medium leading-none">
              {example.title}
            </div>
            <p className="dark:text-neutraldark-11 line-clamp-2 text-sm leading-snug text-neutral-11">
              {example.description}
            </p>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
