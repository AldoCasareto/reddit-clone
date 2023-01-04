import React from 'react';
import { BsArrowRightCircle, BsChatDots } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import { IoFilterCircleOutline, IoNotificationsOutline, IoVideocamOutline } from 'react-icons/io5';

type Props = {};

const Icons = (props: Props) => {
  return (
    <>
      <div className='flex md:space-x-4 hidden md:block md:flex '>
        <BsArrowRightCircle />
        <IoFilterCircleOutline />
        <IoVideocamOutline />
        <GrAdd />
      </div>
      <>
        <BsChatDots />
        <IoNotificationsOutline />
      </>
    </>
  );
};

export default Icons;
