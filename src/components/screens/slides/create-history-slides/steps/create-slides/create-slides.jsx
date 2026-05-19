import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomButton from "@/components/ui/custom_button/custom_button";
import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Images,
} from "react-bootstrap-icons";
import styles from "./create-slides.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import { Image } from "react-bootstrap";
import {
  useGenerateImageForSlide,
  useGenerateSlide,
} from "@/api_hooks/slide/slide.hooks";

const CreateSlides = ({ handleNext, handleBack, script, setScript }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState("intro");

  const isIntro = currentSlideIndex === "intro";

  const currentSlide = isIntro
    ? script.script.intro
    : script.script.slides[currentSlideIndex];

  const [imageUrl, setImageUrl] = useState(null);

  const updateSlideData = (field, value) => {
    setScript((prev) => {
      const out = { ...prev };
      if (isIntro) {
        out.script.intro[field] = value;
      } else {
        out.script.slides[currentSlideIndex][field] = value;
      }

      return out;
    });
  };

  const { mutateAsync, isPending } = useGenerateImageForSlide();
  const { mutateAsync: generateSlideAsync, isPending: generateSlideIsPending } =
    useGenerateSlide();

  const generateImageForSlide = async (imagePrompt) => {
    setImageUrl(null);
    const imageRes = await mutateAsync({
      imagePrompt,
    });

    updateSlideData("imageUrl", imageRes?.data?.output?.image_url);
  };

  const generateSlide = async () => {
    const res = await generateSlideAsync({
      slideData: currentSlide,
      isIntro,
    });

    

    updateSlideData("slideUrl", res.data.publicUrl);
  };

  return (
    <div className={styles.CreateSlides}>
      <CustomBox title={"Slides"} icon={<Images />}>
        <div className={styles.slideSelector}>
          <div
            className={isIntro ? styles.active : ""}
            onClick={() => {
              setCurrentSlideIndex("intro");
            }}
          >
            Intro
          </div>

          {script.script.slides.map((slide, slideIdx) => {
            return (
              <div
                key={`slide_${slideIdx}`}
                className={slideIdx === currentSlideIndex ? styles.active : ""}
                onClick={() => {
                  setCurrentSlideIndex(slideIdx);
                }}
              >
                Slide {slideIdx + 1}
              </div>
            );
          })}
        </div>
      </CustomBox>

      <CustomBox title={`Slide ${isIntro ? "Intro" : currentSlideIndex + 1}`}>
        <div className={styles.slidePreview}>
          <div
            className={styles.arrows}
            onClick={() => {
              const isFirst = currentSlideIndex === 0;

              if (isIntro) {
                return;
              }

              if (isFirst) {
                setCurrentSlideIndex("intro");
              } else {
                setCurrentSlideIndex((prev) => prev - 1);
              }
            }}
          >
            <ChevronLeft />
          </div>
          <div className={styles.slide}>
            <Image src={currentSlide.slideUrl} fluid alt="image" 
            
            />
          </div>
          <div
            className={styles.arrows}
            onClick={() => {
              const isLast =
                script.script.slides.length === currentSlideIndex + 1;

              if (isLast) {
                return;
              }
              if (isIntro) {
                setCurrentSlideIndex(0);
              } else {
                setCurrentSlideIndex((prev) => prev + 1);
              }
            }}
          >
            <ChevronRight />
          </div>
        </div>
        <CustomTextarea
          value={currentSlide.image_prompt}
          label={"Image Prompt"}
          onChange={(e, v) => {
            updateSlideData("image_prompt", v);
          }}
        />
        <br />
        <div className={styles.btns}>
          <CustomButton
            onClick={async () => {
              await generateImageForSlide(currentSlide.image_prompt);
            }}
            
          >
            Generate Image {isPending ? '(Loading..)' : ''}
          </CustomButton>
          <CustomButton
            onClick={generateSlide}
            isLoading={generateSlideIsPending}
          >
            Generate Slide
          </CustomButton>
        </div>
        <br />

        <br />
        <div className={styles.imagePreview}>
          <Image src={currentSlide.imageUrl} fluid alt="image" />
          <br />
          <br />
          <CustomInput
            value={currentSlide.imageUrl}
            onChange={(e, v) => {
              updateSlideData("imageUrl", v);
            }}
          />
        </div>
        <hr />

        <br />
        {!isIntro && (
          <CustomInput
            value={currentSlide.title}
            label={"Title"}
            onChange={(e, v) => {
              updateSlideData("title", v);
            }}
          />
        )}

        <br />
        <CustomTextarea
          value={currentSlide.text}
          label={"Text"}
          onChange={(e, v) => {
            updateSlideData("text", v);
          }}
        />
        <br />
        <CustomInput
          value={currentSlide.sub_title}
          label={"Subtitle"}
          onChange={(e, v) => {
            updateSlideData("sub_title", v);
          }}
        />
        <br />
        <CustomInput
          value={currentSlide.highlights}
          label={"Highlights"}
          onChange={(e, v) => {
            updateSlideData("highlights", v);
          }}
        />
        <hr />
        <CustomButton>Download Slide</CustomButton>
      </CustomBox>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <CustomButton onClick={handleBack} variant={2}>
          <ArrowLeft /> Back
        </CustomButton>
        <CustomButton onClick={handleNext}>
          Next <ArrowRight />
        </CustomButton>
      </div>
    </div>
  );
};

export default CreateSlides;
