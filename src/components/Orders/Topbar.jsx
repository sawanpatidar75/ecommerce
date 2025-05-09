const tabs = ['All', 'In Progress', 'Completed'];

const Topbar = ({ active, onTabChange }) => {
  return (
    <div className="flex space-x-4 border-b mb-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`py-2 px-4 border-b-2 ${
            active === tab ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Topbar;
