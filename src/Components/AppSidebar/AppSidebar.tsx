import {
  ChartNoAxesColumnIncreasing,
  CircleDollarSign,
  CircleQuestionMark,
  Home,
  LogOut,
  MessageSquare,
  StickyNote,
  User,
  X,
} from "lucide-react";

interface AppSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const AppSidebar: React.FC<AppSidebarProps> = ({ isOpen = true, onClose }) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <Home className="w-5 h-5" />,
      active: false,
      disabled: true,
    },
    {
      name: "Orders",
      icon: <StickyNote className="w-5 h-5" />,
      active: true,
      disabled: false,
    },
    {
      name: "Clients",
      icon: <User className="w-5 h-5" />,
      active: false,
      disabled: true,
    },
    {
      name: "Statistics",
      icon: <ChartNoAxesColumnIncreasing className="w-5 h-5" />,
      active: false,
      disabled: true,
    },
    {
      name: "Finance",
      icon: <CircleDollarSign className="w-5 h-5" />,
      active: false,
      disabled: true,
    },
    {
      name: "FAQ",
      icon: <CircleQuestionMark className="w-5 h-5" />,
      active: false,
      disabled: true,
    },
    {
      name: "Support",
      icon: <MessageSquare className="w-5 h-5" />,
      active: false,
      disabled: true,
    },
    {
      name: "Log Out",
      icon: <LogOut className="w-5 h-5" />,
      active: false,
      disabled: true,
    },
  ];

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 lg:z-auto
        w-64 bg-white h-screen border-r border-gray-200 flex flex-col
        transform transition-transform duration-300 ease-in-out lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">U</span>
              </div>
              <span className="font-semibold text-gray-900">Untlip</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-1 rounded-md hover:bg-gray-100"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  item.active
                    ? "bg-blue-900 text-white"
                    : item.disabled
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                disabled={item.disabled}
                style={item.disabled ? { cursor: "not-allowed" } : {}}
              >
                {item.icon}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

        <div className="p-4">
          <div className="bg-linear-to-r from-blue-900 to-blue-600 rounded-lg p-4 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-semibold text-sm mb-1">Upgrade</h3>
              <p className="text-xs opacity-90 mb-3">your plan →</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;
