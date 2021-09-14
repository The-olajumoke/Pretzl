import React from 'react'

function ResponsiveCheckbox({label,checkboxes}) {
    console.log(checkboxes);
    return (
      <div className="ring h-16 ring-red mb-5">
        <label className="text-xl text-black">{label}</label>

        <div>
          {checkboxes.map((check) => {
           <div className="ring flex">
             <input type="checkbox" name="" id="" />
             <h5 className="text-xl text-black">check</h5>
           </div>;
          })}
        </div>
      </div>
    );
}

export default ResponsiveCheckbox
