export const pages = [
  {
    title: "Dashboard",
    path: "/",
    // icon: icon("ic_analytics"),
  },
  {
    title: "Users",
    path: "/users",
  },
  {
    title: "Images Upload",
    path: "/files",
  },
  {
    title: "Carousel",
    path: "/carousel",
  },
  {
    title: "Search Field",
    path: "/search",
  },
  {
    title: "Text Field",
    path: "/input",
  },
  {
    title: "Select",
    path: "/select",
  },
  {
    title: "Checkbox",
    path: "/checkbox",
  },
  {
    title: "Switch",
    path: "/switch",
  },
  {
    title: "Form",
    path: "/form",
  },
  {
    title: "Confirmation",
    path: "/confirm",
  },
  {
    title: "Parent",
    // path: "/form",
    nested: true,
    subPages: [
      { title: "Child 1", path: "/child1" },
      { title: "Child 2", path: "/child2" },
    ],
  },
];
