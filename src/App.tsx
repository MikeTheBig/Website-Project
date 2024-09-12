
import Sidebar from './Components/Sidebar';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>This is the main content area. The sidebar is positioned to the left.</p>
      </main>
    </div>
  );
};

export default App;