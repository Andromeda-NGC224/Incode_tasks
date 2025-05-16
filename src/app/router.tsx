import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="max-w-7xl mx-auto px-4">
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "todo",
        element: <div>TodoListPage</div>,
      },
      {
        path: "kanban",
        element: <div>KanbanPage</div>,
      },
    ],
  },
]);
