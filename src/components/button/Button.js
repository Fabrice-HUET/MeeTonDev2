
import styles from './button.css';
import React from 'react';

export const Button = (props) => {
    const { label, onClick } = props;

    return (
        <div onClick={onClick} className={styles.button} >
            {label}
            <i></i>
        </div>
    );
}; 