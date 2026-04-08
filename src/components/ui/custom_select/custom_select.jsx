import React, { useId, useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import styles from "./custom_select.module.scss";
import { ChevronDown, MicFill } from "react-bootstrap-icons";

const CustomSelect = ({
  label,
  value,
  onChange,
  options = [],
  name,
  required = false,
  placeholder,
  disabled = false,
  onModalClose = ()=>{}
}) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const handleSelect = (opt) => {
    const optValue = opt.value !== undefined ? opt.value : opt;
    if (onChange) {
      onChange({ target: { name, value: optValue } }, optValue);
    }
    setIsOpen(false);
  };

  const selectedOption =
    options.find(
      (opt) => (opt.value !== undefined ? opt.value : opt) === value,
    ) || null;
  const displayLabel = selectedOption
    ? selectedOption.label !== undefined
      ? selectedOption.label
      : selectedOption
    : placeholder || "";

  return (
    <div className={styles.CustomSelect} ref={containerRef}>
      {label && <label htmlFor={id}>{label}</label>}
      <div
        className={`${styles.selectWrapper} ${disabled ? styles.disabled : ""}`}
        onClick={() => !disabled && setIsOpen(true)}
        tabIndex={disabled ? -1 : 0}
      >
        <div className={styles.selectField} id={id}>
          <span
            className={!selectedOption && placeholder ? styles.placeholder : ""}
          >
            {displayLabel}
          </span>
        </div>
        <ChevronDown
          className={`${styles.icon} ${isOpen ? styles.open : ""}`}
        />
      </div>

      <Modal
        show={isOpen}
        onHide={() => {
          onModalClose()
          setIsOpen(false)
        }}
        centered
        contentClassName={styles.customModalContent}
        className={styles.customModal}
        backdropClassName={styles.customBackdrop}
      >
        <Modal.Header closeButton>
          <Modal.Title className={styles.modalTitle}>
            {label || "Select Option"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <div className={styles.optionsList}>
            {options.map((opt, i) => {
              const optValue = opt.value !== undefined ? opt.value : opt;
              const optLabel = opt.label !== undefined ? opt.label : opt;
              const optCaption = opt.caption;
              const right = opt?.right;
              return (
                <div
                  key={i}
                  className={`${styles.optionItem} ${value === optValue ? styles.selected : ""}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelect(opt);
                  }}
                >
                  <div>
                    <div className={styles.optLabel}>{optLabel} </div>
                    {optCaption && (
                      <div className={styles.optCaption}>{optCaption} </div>
                    )}
                  </div>

                  {right && (
                    <div
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation()
                      }}
                    >
                      {right}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CustomSelect;
