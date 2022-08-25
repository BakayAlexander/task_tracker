import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';

import styles from './userCard.module.css';

const UserCard = ({ imageUrl, name, surname, email }) => {
  return (
    <div className={styles.userCardContainer}>
      <img
        className={styles.userCardImage}
        src={imageUrl}
        alt='Profile icon'
      />
      <div className={styles.userCardInfo}>
        <p>{`${name} ${surname}`}</p>
        <p>{email}</p>
      </div>
      <div className={styles.userCardMail}>
        <a
          className={styles.userCardMailButton}
          href={`mailto:${email}`}
        >
          <AiOutlineMail className='h-7 w-7' />
        </a>
      </div>
    </div>
  );
};

export default UserCard;
