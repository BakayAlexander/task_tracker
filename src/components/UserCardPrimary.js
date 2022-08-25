import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const UserCardPrimary = ({ imageUrl, name, surname, email }) => {
  return (
    <div className="w-4/5 md:w-2/5 flex border border-white/75 px-4 py-2.5 rounded justify-between transition-all duration-[0.4s] md:hover:scale-125">
      <img src={imageUrl} alt="Profile icon" className="cursor-pointer rounded h-20 w-20" />
      <div className="flex flex-col md:mr-5 items-center justify-center">
        <p>{`${name} ${surname}`}</p>
        <p>{email}</p>
      </div>
      <div className="flex items-center">
        <a className="card__mail" href={`mailto:${email}`}>
          <AiOutlineMail className="h-7 w-7" />
        </a>
      </div>
    </div>
  );
};

export default UserCardPrimary;
