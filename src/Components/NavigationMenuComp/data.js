export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
          },
        ],
      },
    ],
  },
  {
    label: "Settings",
    to: "/settings",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "security",
        to: "security",
        children: [
          {
            label: "login",
            to: "login",
          },
          {
            label: "register",
            to: "register",
          },
        ],
      },
    ],
  },
];

export default menus;
