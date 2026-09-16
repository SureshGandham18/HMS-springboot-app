import { Avatar, Text } from "@mantine/core";
import {
  IconCalendarCheck,
  IconHeartbeat,
  IconLayoutGrid,
  IconMoodHeart,
  IconStethoscope,
  IconVaccine,
} from "@tabler/icons-react";
import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: <IconLayoutGrid size={20} stroke={1.5} />,
  },
  {
    name: "Doctors",
    url: "/doctors",
    icon: <IconStethoscope size={20} stroke={1.5} />,
  },
  {
    name: "Patients",
    url: "/patients",
    icon: <IconMoodHeart size={20} stroke={1.5} />,
  },
  {
    name: "Appointments",
    url: "/appointments",
    icon: <IconCalendarCheck size={20} stroke={1.5} />,
  },
  {
    name: "Pharmacy",
    url: "/pharmacy",
    icon: <IconVaccine size={20} stroke={1.5} />,
  },
];
const Sidebar = () => {
  return (
    <div className="flex">
      <div className="w-64"></div>
    <div className="w-64 fixed h-screen overflow-y-auto hide-scrollbar bg-dark flex flex-col items-center gap-7">
      <div className="fixed z-[500] py-3 px-5 bg-dark flex items-center gap-1 text-primary-400">
        <IconHeartbeat size={40} stroke={2.5} />
        <span className="font-heading font-semibold text-3xl">Pulse</span>
      </div>
      <div className="flex flex-col gap-5 w-full px-3">
        <div className="flex flex-col items-center mt-20">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <Avatar
              variant="filled"
              src="avatar.jpg"
              alt="Profile"
              size={120}
              radius={90}
            />
          </div>
          <span className="font-medium text-light">Suresh</span>
          <Text c="dimmed" className="text-light" size="xs">
            Admin
          </Text>
        </div>
        <div className="flex flex-col gap-1">
          {links.map((link) => {
            return (
              <NavLink
                to={link.url}
                key={link.url}
                className={({ isActive }) =>
                  `flex items-center gap-3 w-full t px-4 py-5 mb-1 rounded-lg font-medium ${isActive ? "bg-primary-400" : "hover:bg-gray-100 text-light hover:text-dark"}`
                }
              >
                {link.icon}
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
