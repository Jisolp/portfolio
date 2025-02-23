import React from "react";

const Skills = () => {
  return (
    <section className="p-6 xs:p-10 h-auto bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Languages Category */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-2xl font-semibold mb-2">Languages</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Python</li>
            <li>JavaScript</li>
            <li>C/C++</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Frameworks Category */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-2xl font-semibold mb-2">Frameworks</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>React</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Express</li>
            {/* <li>TensorFlow</li> */}
          </ul>
        </div>

        {/* Other Tools Category */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-2xl font-semibold mb-2">Other Tools</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Git</li>
            {/* <li>Docker</li> */}
            <li>AWS</li>
            {/* <li>Postman</li> */}
            <li>Linux/Unix</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
