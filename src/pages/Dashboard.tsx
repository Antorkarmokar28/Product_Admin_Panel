const Dashboard = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 rounded-xl" />
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 rounded-xl" />
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-40 rounded-xl" />
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
};

export default Dashboard;
