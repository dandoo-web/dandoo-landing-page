import { useState, useEffect } from "react";

const About = () => {
  const info = [
    ["Designs", "vintage-font"],
    ["Develops", "anton-font"],
    ["Ships", ""],
  ];
  const [count, setcount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcount((prev) => {
        if (prev == 2) {
          return 0;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[90%] my-[10vh] mx-auto">
      <p className="text-center font-medium pb-5">[ ABOUT US ]</p>
      <div className="flex justify-center items-center">
        <div className="text-9xl">
          <h1 className="text-center translate tracking-tight calsans-font uppercase">
            Dandoo
          </h1>
          <h1
            className={`text-center tracking-tight uppercase ${info[count][1]} `}
          >
            {info[count][0]}
          </h1>
          <h1 className="text-center translate tracking-tight uppercase calsans-font ">
            Websites
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
