/*January 10, 2024*/
import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";

//import mock data json file
import data from "../../mockData/CourselistCard.json";

const CourseListCard = () => {
  // *NOTE
  //if data is coming from db use useState hook to store the data
  //sample: const [courses, setCourses] = useState([])

  //*NOTE
  //use GET function of axios and use useEffect hook
  /*sample: useEffect(() => {
  loadCourses();

  }, []);
  
    const loadCourses = async () => {
    const result = await axios.get("http://localhost:8080/courses");
    setCourses(result.data);
    }
    */

  //after getting the data display it using map
  //get your react hook where you store the data coming from db
  //sample: courses.map((course, idx) {return(your code here)});

  //*NOTE
  //for now I'll be displaying a data coming from a json format file
  //destructure the data
  const { courselist } = data;

  return (
    <>
      {/* 1/12/2024 UI development and Mobile responsiveness */}
      <div className="">
        <div className="w-[90%] mt-10 flex mx-auto flex-col lg:center-row lg:w-[50%] lg:m-auto lg:mt-5 items-center gap-5">
          {courselist.map((course, idx) => {
            return (
              <div key={idx} className="w-full rounded-md shadow-md">
                <div className="flex px-0 py-0 rounded-md ">
                  <div className="bg-[#BCE8B1] py-1 justify-center text-center text-[.8rem] lg:text-[1rem] w-[30%] lg:w-[20%] lg:p-5 rounded-l-sm lg:rounded-l-md">
                    <p className="lg:font-medium">{course.description}</p>
                  </div>

                  <p
                    className="text-white lg:font-bold text-[.8rem] py-1 lg:py-0 lg:text-[1.2rem] w-full flex justify-center items-center
                   rounded-r-sm lg:rounded-r-md 	bg-[#126912] ">
                    {course.courseTitle}
                  </p>
                </div>
              </div>
            );
          })}

          <div
            type="add"
            className=" h-[10vh] mb-10  flex items-center justify-center w-[50%] lg:w-[50%] cursor-pointer">
            <div className="bg-[#87D275] w-[30%]  flex items-center justify-center h-[5vh] lg:h-[10vh] rounded-l-sm lg:rounded-l-md">
              <span>
                <IoAdd className="text-[2rem] lg:text-[3rem] text-white" />
              </span>
            </div>
            <div className="bg-[#126912] text-white lg:font-bold h-[5vh] lg:h-[10vh] w-full flex items-center justify-center rounded-r-sm  lg:rounded-r-md">
              <span className="text-[.8rem] lg:text-[1.3rem]">
                Add New Course
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseListCard;
/*January 10, 2024*/
