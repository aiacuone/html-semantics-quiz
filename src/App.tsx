import './index.css';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-1 px-4">
          <h1 className="text-xl font-bold text-gray-900 text-center">
            HTML Semantics Quiz
          </h1>
        </div>
      </header>
      <main className="flex-1 flex justify-center items-center">
        <Quiz />
      </main>
    </div>
  );
}

export default App;
