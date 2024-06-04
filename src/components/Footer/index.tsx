"use client";

import { HomeIcon, CalendarIcon, DumbbellIcon, UserIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-t px-4 py-3 flex items-center justify-between fixed bottom-0 w-full max-w-md">
      <Button variant="ghost" size="icon" className="rounded-full">
        <HomeIcon className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <CalendarIcon className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <DumbbellIcon className="h-6 w-6" />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <UserIcon className="h-6 w-6" />
      </Button>
    </footer>
  );
}
