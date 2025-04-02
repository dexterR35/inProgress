import React from "react";
import { motion } from "framer-motion";
import Component0 from "./components/Component0";
import Component1 from "./components/Component1";
import Component4 from "./components/Component3";
import ComponentImg from "./components/CompImg";
import Component6 from "./components/Component3";
import Component7 from "./components/Component3";
import Component8 from "./components/Component3";
import Component9 from "./components/Component9";
import Component10 from "./components/Component3";
import CompTop from "./components/CompTop";
// Array with components and their respective grid properties
const components = [
  { Component: Component0, gridClass: "col-start-1 col-span-5 row-1 row-start-1 bg-purple-500" ,},
  { Component: Component9, gridClass: "col-start-1 col-span-5 row-span-1 row-start-2  bg-purple-500" },

  { Component: Component1, gridClass: "col-start-1 col-span-5 row-1 row-start-3 bg-gray-400 " },
//middle
  { Component: Component4, gridClass: "col-start-2 col-span-3 row-start-4 row-span-3  bg-yellow-500 " }, //yellow
  //img
  { Component: ComponentImg, gridClass:"col-start-1 col-span-1 row-start-4 row-span-3  bg-red-500" }, //gray

  { Component: Component6, gridClass: "col-start-5 row-start-4 row-span-3 bg-pink-500" }, // pink

  { Component: Component7, gridClass: "col-start-1 col-span-2 row-span-1 row-start-8 bg-green-500 " },

  { Component: Component8, gridClass: "col-start-1 col-span-5 row-span-1 row-start-9 bg-blue-900 " },

  { Component: Component10, gridClass: "col-start-1 col-span-5 row-span-1 row-start-7  bg-pink-500" },
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
              <div className="grid auto-rows-auto grid-cols-[repeat(5,19.5%)] gap-1">
                {components.map((item, index) => (
                  <div key={index} className={item.gridClass}>
                    <item.Component />
                  </div>
                ))}
              </div>
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
