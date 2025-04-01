import React from 'react';
import { motion } from 'framer-motion';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
// Access global data

const App = () => {

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">React App with Context and Data</h1>
      
      <div className="grid grid-cols-3 grid-rows-6 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Component1 />
          <Component2 />
          <Component3 />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
