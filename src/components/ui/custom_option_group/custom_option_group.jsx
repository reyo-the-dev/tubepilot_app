import React from 'react';
import styles from './custom_option_group.module.scss';

const CustomOptionGroup = ({ label, options, selectedValue, onChange, columns = 2 }) => {
  return (
    <div className={styles.CustomOptionGroup}>
      {label && <label className={styles.groupLabel}>{label}</label>}
      <div className={styles.optionsContainer} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {options.map((opt, i) => (
          <button
            key={i}
            type="button"
            className={`${styles.optionBtn} ${selectedValue === opt.value ? styles.selected : ''}`}
            onClick={(e) => {
              e.preventDefault();
              onChange && onChange(opt.value);
            }}
          >
            {opt.icon && <span className={styles.icon}>{opt.icon}</span>}
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CustomOptionGroup;
