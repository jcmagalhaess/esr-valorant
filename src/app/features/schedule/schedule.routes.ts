import { Routes } from "@angular/router";

export const SCHEDULE_ROUTES: Routes = [
    {
      path: "",
      loadComponent: () =>
        import("./schedule.component").then((c) => c.ScheduleComponent),
      children: [
        { path: "", redirectTo: "all", pathMatch: "full" },
        {
          path: ":filter",
          loadComponent: () =>
            import(
              "./components/schedule-matches/components/view-matches/view-matches.component"
            ).then((c) => c.ViewMatchesComponent),
        },
      ],
    },
  ];
