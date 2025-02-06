import React from 'react';

function Assignment() {
  return (
    <section id="assignment" className="my-8 px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center">Assignment</h2>
      <div className="mt-4">
        <h3 className="text-xl md:text-2xl font-semibold">Machine Learning</h3>
        <p className="text-sm md:text-base">A branch of artificial intelligence that enables systems to learn and improve from experience without explicit programming.</p>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">Artificial Intelligence (AI)</h3>
        <p className="text-sm md:text-base">The simulation of human intelligence in machines programmed to think, learn, and make decisions.</p>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">Supervised Data/Model</h3>
        <p className="text-sm md:text-base">A machine learning method where the model is trained on labeled data to predict outcomes.</p>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">Unsupervised</h3>
        <p className="text-sm md:text-base">A machine learning method where the model identifies patterns or structures in unlabeled data.</p>

        <h3 className="text-xl md:text-2xl font-semibold mt-4">Deep Learning</h3>
        <p className="text-sm md:text-base">A subset of machine learning that uses neural networks with many layers to analyze data and solve complex problems.</p>
      </div>
      
      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Problem-Solving Task</h2>
        <h3 className="text-xl md:text-2xl font-semibold mt-4">Fixing an Infinite Loop in a React UseEffect Hook</h3>
        <p className="text-sm md:text-base">
          You are given a React component that fetches data from an API when it loads. However, the application is stuck in an infinite loop due to a misuse of the <code>useEffect</code> hook.
          Your task is to:
        </p>
        <ol className="list-decimal ml-6 md:ml-8 mt-2 text-sm md:text-base">
          <li>Identify the issue causing the infinite loop.</li>
          <li>Debug and isolate the problem.</li>
          <li>Fix the error and test the component.</li>
          <li>Document the entire procedure, including how you identified the bug and how you fixed it.</li>
        </ol>
        
        <h3 className="text-xl md:text-2xl font-semibold mt-4">Example Code:</h3>
        <pre className="bg-gray-100 p-4 md:p-6 rounded-md mt-2 overflow-x-auto">
          <code className="text-sm md:text-base">
            {`import React, { useState, useEffect } from 'react';

            function DataFetcher() {
              const [data, setData] = useState(null);
              const [count, setCount] = useState(0);

              useEffect(() => {
                fetch('https://api.example.com/data')
                  .then(response => response.json())
                  .then(data => setData(data));
              }, [count]); // Potential issue here

              return (
                <div>
                  <button onClick={() => setCount(count + 1)}>Fetch Data Again</button>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
              );
            }

            export default DataFetcher;`}
          </code>
        </pre>
      </div>
    </section>
  );
}

export default Assignment;
