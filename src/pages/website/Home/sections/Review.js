import React from "react";

const Review = () => {
  return (
    <div className="w-full">
      <div className="w-full flex-row space-x-8 border-t mt-6 space-y-2 mb-6">
        <h3 className="font-bold text-2xl mt-6">User Reviews</h3>
        <div>
          <p>4.5 (300+ ratings)</p>
        </div>
      </div>

      <div className="w-full">
        <div className="overflow-x-scroll whitespace-no-wrap">
          <div className="w-400 flex flex-no-wrap space-x-8">
            <div className="w-256 h-167 border overflow-hidden">
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
            <div className="w-256 h-167 border overflow-hidden">
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
            <div className="w-256 h-167 border overflow-hidden">
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
