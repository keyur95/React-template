import Iconify from "../../components/Iconify";

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: "dashboard",
    path: "/dashboard/app",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Connect Server",
    path: "/dashboard/addserver",
    icon: getIcon("eva:pie-chart-2-fill"),
  },
  {
    title: "Server List",
    path: "/dashboard/servers",
    icon: getIcon("eva:people-fill"),
  },

  // {
  //   title: "login",
  //   path: "/login",
  //   icon: getIcon("eva:lock-fill"),
  // },
  // {
  //   title: "register",
  //   path: "/register",
  //   icon: getIcon("eva:person-add-fill"),
  // },
  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: getIcon("eva:alert-triangle-fill"),
  // },
];

export default navConfig;
