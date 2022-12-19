import React from 'react';
import styles from './Notification.module.css'
import PropTypes from 'prop-types';

const Notification = ({message}) => {
    return (
<span className={styles.message}>{message}</span>
    )
}

export default Notification

Notification.propTypes = {
  message: PropTypes.string,
}