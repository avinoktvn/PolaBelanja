import { FaHome, FaUser, FaCog } from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
    { name: "Profile", href: "/dashboard/profile", icon: <FaUser /> },
    { name: "Settings", href: "/dashboard/settings", icon: <FaCog /> },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <h1 className="text-2xl font-bold p-4">Dashboard</h1>
      <ul className="flex flex-col gap-2 px-4">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="flex items-center gap-2 p-2 rounded hover:bg-gray-700">
              {item.icon} {item.name}
            </a>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
};

export default Sidebar;
