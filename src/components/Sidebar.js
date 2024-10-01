import React, { useState } from 'react';
import { Archive, FileAudio2, FileOutput, Files, FileType2, Folder, Headphones, Image, ChevronDown, ChevronUp } from 'lucide-react';

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const menuItems = [
    {
      id: 1,
      name: "Menu One",
      icon: <FileType2 />,
      subItems: [
        {
          name: "Submenu 1.1",
          subItems: [
            { name: "Submenu 1.1.1" },
            { name: "Submenu 1.1.2" }
          ]
        },
        { name: "Submenu 1.2" }
      ]
    },
    { id: 2, name: "Menu Two", icon: <Files /> },
    { id: 3, name: "Menu Three", icon: <FileAudio2 /> },
    {
      id: 4,
      name: "Menu Four",
      icon: <Archive />,
      subItems: [
        {
          name: "Submenu 4.1",
          subItems: [
            { name: "Submenu 4.1.1" },
            { name: "Submenu 4.1.2" }
          ]
        },
        { name: "Submenu 4.2" }
      ]
    },
    { id: 5, name: "Menu Five", icon: <Folder /> },
    { id: 6, name: "Menu Six", icon: <FileOutput /> },
    { id: 7, name: "Menu Seven", icon: <Headphones /> },
    { id: 8, name: "Menu Eight", icon: <Image /> }
  ];

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderMenuItems = (items, parentId = '', pixel = 0) => {
    return (
      <ul className={`pl-${parentId ? '8' : '0'} mt-2 space-y-2`}>
        {items.map((item, index) => {
          const itemId = `${parentId}-${index}`;
          const hasSubItems = item.subItems && item.subItems.length > 0;
          return (
            <li key={itemId}>
              <div
                className="flex items-center justify-between p-2 rounded-lg hover:bg-blue-100 cursor-pointer"
                onClick={() => hasSubItems && toggleDropdown(itemId)}
              >
                <div className="flex items-center gap-3">
                  {item.icon && <div className="w-5 h-5 text-blue-400">{item.icon}</div>}
                  <span>{item.name}</span>
                </div>
                <span className='bg-blue-400 rounded-full'>
                  {hasSubItems && (
                    openDropdowns[itemId] ? <ChevronUp color='white' /> : <ChevronDown color='white' />
                  )}
                </span>
              </div>
              {hasSubItems && openDropdowns[itemId] && (
                <div>
                  {renderMenuItems(item.subItems, itemId, itemId+1)}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <aside className="w-64 bg-white h-full shadow-lg p-4">
      <h1 className="text-2xl font-bold mb-8">UI Frontend</h1>
      {renderMenuItems(menuItems)}
    </aside>
  );
};

export default Sidebar;
