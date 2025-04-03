import React from "react";
import { motion } from "framer-motion";
import CompTop from "./components/CompTop";
import CompMiddle from "./components/CompMiddle";



// Array with components and their respective grid properties
const components = [
  { Component: CompMiddle, gridClass: "col-start-1 col-span-5 row-1 row-start-1 bg-purple-500" ,},
  // { Component: Component1, gridClass: "col-start-1 col-span-5 row-1 row-start-3 bg-gray-400 " },
];

const App = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="wrap bg-after relative max-w-[1000px] h-[1400px] m-auto p-5 pt-2">
          <div className="container pt-4 px-8">
             <CompTop />
            <div className="border-10 border-gray-800 p-2">
           
           
              <CompMiddle />
           
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
<p className="text-3xl">
 
</p>;
export default App;
