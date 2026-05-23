import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import React from "react";
import { Image } from "react-bootstrap";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import styles from "./slides-summary.module.scss";
import { toast } from "react-toastify";

const SlidesSummaryStep = ({ script, handleBack, handleNext }) => {
  const downloadAllSlides = async () => {
    try {
      const slides = [
        script.script.intro.slideUrl,
        ...script.script.slides
          .filter((slide) => slide.slideUrl)
          .map((slide) => slide.slideUrl),
      ];

      for (let i = 0; i < slides.length; i++) {
        const url = slides[i];

        const response = await fetch(url);
        const blob = await response.blob();

        const blobUrl = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = `slide-${i + 1}.jpg`;

        document.body.appendChild(a);
        a.click();

        a.remove();

        window.URL.revokeObjectURL(blobUrl);

        // optional small delay
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  const copyPostDetails = async () => {
    const hashtags = Array.isArray(script.hashtags)
      ? script.hashtags.join(" ")
      : script.hashtags || "";

    const text = `${script.title}

${script.caption}



━━━━━━━━━━━━━━━
🚀 Follow @briefonix for mind-blowing facts, forgotten history & viral stories every day.
━━━━━━━━━━━━━━━

${hashtags.toLowerCase()}


`;

    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied");
    } catch (err) {
      toast.error("Copy failed");
    }
  };

  return (
    <>
      <CustomBox title={"Slides"}>
        <div className={styles.slideGrid}>
          <Image
            alt={`Slide - Intro`}
            src={script.script.intro.slideUrl}
            width={200}
          />

          {script.script.slides.map((slide, slideIdx) => {
            if (!slide.slideUrl) {
              return null;
            }

            return (
              <Image
                key={`slide_${slideIdx}`}
                alt={`Slide - ${slideIdx}`}
                src={slide.slideUrl}
                width={200}
              />
            );
          })}
        </div>
        <br />
        <CustomButton onClick={downloadAllSlides}>Download All</CustomButton>
      </CustomBox>

      <CustomBox title={"Post Details"}>
        <CustomInput label={"Post Title"} value={script.title} />
        <br />
        <CustomTextarea label={"Post Caption"} value={script.caption} />
        <br />
        <CustomInput label={"Post Hashtags"} value={script.hashtags} />
        <br />
        <CustomButton onClick={copyPostDetails}>Copy</CustomButton>
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
        <CustomButton onClick={handleNext} variant={1}>
          Next <ArrowRight />
        </CustomButton>
      </div>
    </>
  );
};

export default SlidesSummaryStep;
