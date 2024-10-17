import React, { useState } from 'react';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { FaEarthAmericas } from 'react-icons/fa6';
import { MdOutlineNoteAlt } from 'react-icons/md';
import { RiCustomerService2Line } from 'react-icons/ri';
import { SiKodi } from 'react-icons/si';

const IconsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null); 

  const icons = [
    {
      component: <HiOutlineBuildingOffice2 className="h-11 w-11" />,
      label: 'Pemberitahuan',
    },
    {
      component: <FaEarthAmericas className="h-11 w-11" />,
      label: 'Transportasi',
    },
    {
      component: <MdOutlineNoteAlt className="h-11 w-11" />,
      label: 'Dokumen',
    },
    {
      component: <SiKodi className="h-11 w-11" />,
      label: 'Komoditi',
    },
    {
      component: <RiCustomerService2Line className="h-11 w-11" />,
      label: 'Layanan',
    },
  ];

  return (
    <div className="flex justify-center items-center mb-10">
      <div className="flex space-x-20">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setActiveIndex(index)} 
          >
            {React.cloneElement(icon.component, {
              className: `h-11 w-11 ${activeIndex === index ? 'text-blue-500' : 'text-gray-400'}`,
            })}
            <span className={`text-xs font-medium ${activeIndex === index ? 'text-blue-500' : 'text-gray-500'} mt-2`}>
              {icon.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconsSection;
