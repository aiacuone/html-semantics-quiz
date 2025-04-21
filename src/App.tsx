import './index.css';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            HTML Semantics Quiz
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Test your knowledge of semantic HTML elements
          </p>
        </div>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
