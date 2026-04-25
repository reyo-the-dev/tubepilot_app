import React, { useState, useRef, useEffect, useId } from 'react';
import styles from './custom_multi_select.module.scss';
import { ChevronDown, X } from 'react-bootstrap-icons';
import FONTS from '@/styles/fonts';

const CustomMultiSelect = ({ label, options = [], selectedItems = [], onChange, placeholder = "Select items..." }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const id = useId();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      } 
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    const isSelected = selectedItems.some(item => (item.value || item) === (option.value || option));
    let newSelected;
    
    if (isSelected) {
      newSelected = selectedItems.filter(item => (item.value || item) !== (option.value || option));
    } else {
      newSelected = [...selectedItems, option];
    }
    
    onChange && onChange(newSelected);
  };

  const removeTag = (e, optionToRemove) => {
    e.stopPropagation();
    const newSelected = selectedItems.filter(item => (item.value || item) !== (optionToRemove.value || optionToRemove));
    onChange && onChange(newSelected);
  };

  return (
    <div className={`${styles.CustomMultiSelect} ${FONTS.font2}`} ref={containerRef}>
      {label && <label htmlFor={id}>{label}</label>}
      
      <div 
        id={id}
        className={`${styles.selectBox} ${isOpen ? styles.open : ''}`} 
        onClick={handleToggle}
      >
        <div className={styles.selectedContainer}>
          {selectedItems.length === 0 ? (
            <span className={styles.placeholder}>{placeholder}</span>
          ) : (
            selectedItems.map((item, idx) => (
              <span key={idx} className={styles.tag}>
                {item.label || item}
                <X className={styles.removeIcon} onClick={(e) => removeTag(e, item)} />
              </span>
            ))
          )}
        </div>
        <ChevronDown className={`${styles.chevron} ${isOpen ? styles.rotated : ''}`} />
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.length === 0 ? (
            <div className={styles.noOptions}>No options available</div>
          ) : (
            options.map((option, idx) => {
              const isSelected = selectedItems.some(item => (item.value || item) === (option.value || option));
              return (
                <div 
                  key={idx} 
                  className={`${styles.option} ${isSelected ? styles.selected : ''}`}
                  onClick={() => handleSelect(option)}
                >
                  <div className={`${styles.checkbox} ${isSelected ? styles.checked : ''}`}>
                    {isSelected && <span className={styles.checkmark}></span>}
                  </div>
                  <span>{option.label || option}</span>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default CustomMultiSelect;
