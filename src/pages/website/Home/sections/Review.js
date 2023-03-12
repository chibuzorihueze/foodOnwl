import React from "react";
import { Star } from "../../../../assets/images";

const Review = () => {
  return (
    <div className="w-full">
      <div className="w-full flex-row space-y-4">
        <h3 className="font-bold text-[18px]">User Reviews</h3>
        <div>
          <p>4.5 (300+ ratings)</p>
        </div>
      </div>

      <div className="w-full">
        <div className="overflow-x-scroll whitespace-no-wrap">
          <div className="w-[400px] flex flex-no-wrap">
            <div className="w-[32%] border overflow-hidden">
              <div>
                <h1>Philip Bassey</h1>
                <p>| 29/11/22</p>
              </div>
              <div>
                <p class="whitespace-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            <div className="w-[32%] border overflow-hidden">
              <div>
                <h1>Philip Bassey</h1>
                <p>| 29/11/22</p>
              </div>
              <div>
                <p class="whitespace-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    
                </p>
              </div>
            </div>
            <div className="w-[32%] border overflow-hidden">
              <div>
                <h1>Philip Bassey</h1>
                <p>| 29/11/22</p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
            {/* <!-- Add more boxes as needed --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
