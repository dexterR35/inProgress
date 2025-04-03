// SkillBars.js

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  { name: "JavaScript", level: 90, color: "bg-yellow-500" },
  { name: "React", level: 85, color: "bg-blue-400" },
  { name: "CSS", level: 80, color: "bg-indigo-500" },
  { name: "Node.js", level: 75, color: "bg-green-500" },
  { name: "Firebase", level: 75, color: "bg-green-500" },
];

const SkillBar = ({ skill }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setInView(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    
    <div className="mb-2 flex !flex-row !items-start !justify-start">
      <div className="flex justify-between items-start">
        <p className="text-white text-start mb-1 text-xs font-bold">{skill.name}</p>
      </div>
      <div className=" bg-gray-400 rounded-full w-[70%] h-4 overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : "0%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className={`h-4 ${skill.color} rounded-full shadow-lg`}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="absolute inset-0 flex items-center justify-center text-xs"
        >
          {skill.level}%
        </motion.div>
      </div>
    </div>
  );
};

const SkillBars = () => {
  return (
    <div className="p-2 text-white">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill} />
      ))}
    </div>
  );
};

export default SkillBars;
