import React from "react";

const SubMenu = () => {
  return (
    <>
      <div className="border-t-2">
        <div className="flex justify-between items-center pt-8">
          <h4 className="mr-8">Menu</h4>
          <input
            type="text"
            placeholder="Search menu..."
            className="w-[364px] h-[40px] bg-[#f6f6f6] px-4 rounded"
          />
        </div>
      </div>
    </>
  );
};

export default SubMenu;
