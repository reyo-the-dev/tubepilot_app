import React from "react";
import styles from '../../create_slide.module.scss'
import CustomBox from "@/components/ui/custom_box/custom_box";
import { Copy, Sliders2 } from "react-bootstrap-icons";
import { Image } from "react-bootstrap";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { toast } from "react-toastify";
import CustomInput from "@/components/ui/custom_input/custom_input";

const SlidePreviewStep = ({ step, totalSteps, slideData }) => {

  
  

  if (!slideData) {
    return <p>No slideData found</p>;
  }

  return (
    <CustomBox
      title="Script Preview"
      icon={<Sliders2 />}
      right={
        <b>
          Step {step} of {totalSteps}
        </b>
      }
    >
      <CustomTextarea value={slideData.meta.description} rows={10} />

      <CustomButton
        variant={2}
        onClick={async () => {
          await navigator.clipboard.writeText(slideData.meta.description);
          toast.success("Description Copied");
        }}
      >
        <Copy />
      </CustomButton>

      <br />
      <br />

      <CustomInput value={slideData.meta.category} />
      <CustomButton
        variant={2}
        onClick={async () => {
          await navigator.clipboard.writeText(slideData.meta.category);
          toast.success("category Copied");
        }}
      >
        <Copy />
      </CustomButton>
      <br />
      <br />
      <hr />

      <h2>Slides</h2>
      <br />
      <div
      className={styles.preview}
        style={{
          display: "grid",
        
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {slideData.slides.map((slide, slidIdx) => {
          return (
            <div
              key={`slide_${slidIdx}`}
              style={{
                border: "1px solid white",
                textAlign:'center'
              }}
            >
              <Image src={slide.slideUrl} fluid alt={`slide_${slidIdx}`} />
              <p>{slide.index}</p>
            </div>
          );
        })}
      </div>
      <br />

      <CustomButton
        // onClick={() => {
        //   slideData.slides.forEach((slide, index) => {
        //     const link = document.createElement("a");
        //     link.href = slide.slideUrl;
        //     link.download = `slide-${index + 1}.jpg`;
        //     link.click();
        //   });
        // }}
      >
        Download All
      </CustomButton>
    </CustomBox>
  );
};

export default SlidePreviewStep;
