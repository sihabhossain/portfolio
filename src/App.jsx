import Aos from "aos";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return <div className="text-indigo-500">Hello world</div>;
};

export default App;
