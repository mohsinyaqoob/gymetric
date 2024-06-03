import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { DeleteIcon, PlusIcon, TrashIcon } from "lucide-react";

export default function PlanPage() {
  return (
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Weekly Workout Plan</h2>
          <Button size="sm">
            <PlusIcon className="w-4 h-4" />
            Add Day
          </Button>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day, index) => (
            <Collapsible
              key={index}
              className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4"
            >
              <div className="flex items-center justify-between mb-4">
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <h3 className="text-lg font-semibold">{day}</h3>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <ul className="space-y-4">
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Squats</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        3 sets, 12 reps
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Bench Press</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        4 sets, 10 reps
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Deadlifts</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        5 sets, 8 reps
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button size="icon" variant="ghost">
                        <DeleteIcon className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <TrashIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </li>
                </ul>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
  );
}
