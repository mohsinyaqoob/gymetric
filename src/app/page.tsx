/**
 * v0 by Vercel.
 * @see https://v0.dev/t/TyrJiTQezQB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";
import { BarChartIcon } from "lucide-react";

export default function Component() {
  const [todayWorkout, setTodayWorkout] = useState({
    name: "Chest & Triceps",
    date: "Monday, June 5",
    items: [
      {
        name: "Bench Press",
        sets: 3,
        reps: 10,
        weight: 185,
      },
      {
        name: "Tricep Extensions",
        sets: 3,
        reps: 12,
        weight: 50,
      },
    ],
  });
  const [scheduleData, setScheduleData] = useState([
    {
      day: "Monday",
      items: [
        {
          name: "Chest & Triceps",
          duration: 60,
        },
        {
          name: "Abs",
          duration: 30,
        },
      ],
    },
    {
      day: "Tuesday",
      items: [
        {
          name: "Back & Biceps",
          duration: 60,
        },
      ],
    },
    {
      day: "Wednesday",
      items: [
        {
          name: "Legs",
          duration: 90,
        },
      ],
    },
  ]);
  const [maxData, setMaxData] = useState([
    {
      name: "Bench Press",
      max: 225,
    },
    {
      name: "Deadlift",
      max: 315,
    },
    {
      name: "Squat",
      max: 275,
    },
  ]);
  const [weightData, setWeightData] = useState([
    {
      name: "Bench Press",
      weight: 185,
      change: 10,
      changeDirection: "up",
    },
    {
      name: "Deadlift",
      weight: 315,
      change: 20,
      changeDirection: "up",
    },
    {
      name: "Squat",
      weight: 275,
      change: 15,
      changeDirection: "up",
    },
  ]);
  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-950">
      <main className="flex-1 px-4 py-4">
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Todays Workout</h2>
          <Card>
            <CardHeader className="p-4">
              <h3 className="text-md font-semibold">Push Day 1</h3>
            </CardHeader>
            <CardContent className="p-0">
              <Table className="compact">
                <TableHeader>
                  <TableRow>
                    <TableHead>Workout</TableHead>
                    <TableHead>Last Lift</TableHead>
                    <TableHead>1RM</TableHead>
                    <TableHead>Progress</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Bench Press</TableCell>
                    <TableCell>225 lbs</TableCell>
                    <TableCell>
                      40 lbs
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <BarChartIcon className="h-4 w-4" />
                        <span className="sr-only">1 Rep Max</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Squats</TableCell>
                    <TableCell>315 lbs</TableCell>
                    <TableCell>
                      45 lbs
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <BarChartIcon className="h-4 w-4" />
                        <span className="sr-only">1 Rep Max</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deadlifts</TableCell>
                    <TableCell>405 lbs</TableCell>
                    <TableCell>
                      45 lbs
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <BarChartIcon className="h-4 w-4" />
                        <span className="sr-only">1 Rep Max</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pull-ups</TableCell>
                    <TableCell>+50 lbs</TableCell>
                    <TableCell>
                      45 lbs
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <BarChartIcon className="h-4 w-4" />
                        <span className="sr-only">1 Rep Max</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Shoulder Press
                    </TableCell>
                    <TableCell>135 lbs</TableCell>
                    <TableCell>
                      45 lbs
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full"
                      >
                        <BarChartIcon className="h-4 w-4" />
                        <span className="sr-only">1 Rep Max</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>
        
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">1-Rep Max Tracking</h2>
          <Card>
            <CardHeader></CardHeader>
            <CardContent className="grid gap-4">
              {maxData.map((max, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DumbbellIcon className="h-5 w-5" />
                    <span className="font-medium">{max.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span>1-Rep Max:</span>
                    <span className="font-medium">{max.max} lbs</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
        <section className="mb-8">
          <h2 className="text-lg font-bold mb-4">Weight Tracking</h2>
          <Card>
            <CardContent className="grid gap-4">
              {weightData.map((weight, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DumbbellIcon className="h-5 w-5" />
                    <span className="font-medium">{weight.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <span>{weight.weight} lbs</span>
                    <Separator orientation="vertical" className="h-4" />
                    <ArrowUp01Icon
                      className={`h-4 w-4 ${
                        weight.changeDirection === "up"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    />
                    <span>{weight.change} lbs</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

function ArrowUp01Icon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
      <rect x="15" y="4" width="4" height="6" ry="2" />
      <path d="M17 20v-6h-2" />
      <path d="M15 20h4" />
    </svg>
  );
}

function ArrowUpIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DumbbellIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
