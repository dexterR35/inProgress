import profileImage from "../assets/emblem2.png";
import { useDataContext } from "../context/DataProvider";

const CompTop = () => {
  const { userData } = useDataContext();

  if (!userData) {
    return <p>Loading...</p>;
  }

  const fullName = `${userData.name} ${userData.lastName}`;

  return (
    <div className="comp1">
      <div className="relative mb-2">
        <img
          src={profileImage}
          alt="te"
          className="w-[20%] h-full mx-auto absolute object-contain"
        />
        <div className="">

        <div className="text-center grid w-full grid-flow-row grid-cols-[28%_8%_40%] translate-x-[6%] place-content-center items-center">
          <span className="line"></span>
          <p className="text-3xl font-firlest">The </p>
          <span className="line"></span>
        </div>

        <p className="text-[5em] text-center mb-0 font-firlest leading-20">
          Curriculum <span className="text-yellow-600">V</span>itae
        </p>

          <p className="text-lg font-firlest leading-0 text-center py-4 text-gray-800 ">
            **** of {fullName} born at {userData.profile.born}  ****
         
          </p>
          <p className="font-bastliga text-4xl text-end w-full bg-gray-900 py-2 pr-10 text-gray-300">Hocus pocus</p>
    
        </div>
      </div>

      {/* <div className="line mb-2 w-[90%] mx-auto"></div> */}
      <div className="grid grid-cols-6 pb-2">
        <div className="font-franchise text-7xl m-auto">Hello</div>
        <div>
          <p className="text-center text-md">title</p>
          <p className="text-sm/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            ducimus.
          </p>
        </div>
        <div className="font-franchise text-4xl bg-gray-500">Hello</div>
        <div>
          <p className="text-center text-md">title</p>
          <p className="text-sm/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            ducimus.
          </p>
        </div>
        <div className="font-franchise text-2xl col-span-2 bg-gray-500">Hello</div>
      </div>
    </div>
  );
};

export default CompTop;
