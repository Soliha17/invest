import { useState } from "react";

export const useSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((prevOpen) => !prevOpen);
  return { sidebarOpen, toggleSidebar };
};
