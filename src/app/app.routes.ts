import { Routes } from "@angular/router";

export const VALORANT_ROUTES: Routes = [
  { path: "", redirectTo: "schedule", pathMatch: "full" },
  {
    path: "schedule",
    loadChildren: () =>
      import("./features/schedule/schedule.routes").then(
        (m) => m.SCHEDULE_ROUTES
      ),
  },
];
