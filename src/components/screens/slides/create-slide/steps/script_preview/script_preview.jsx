import React, { useEffect } from "react";
import parentStyles from "../../create_slide.module.scss";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { Sliders2, ArrowRight, Magic } from "react-bootstrap-icons";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import { Image } from "react-bootstrap";
import { useGenerateSlideForScript } from "@/api_hooks/news.hooks";
import { toast } from "react-toastify";

const ScriptPreviewStep = ({
  values,
  onChangeValue,
  handleNext,
  step,
  totalSteps,
  scriptData,
  setScriptData,
  setSlideData,
  slideData,
  isDummy,
}) => {
  const slidesDatatemp = {
    success: true,
    slides: [
      {
        index: 1,
        slideUrl:
          "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/slides/8c6467e4-a646-4701-947c-f310cf5676af/slide_1.png",
      },
      {
        index: 2,
        slideUrl:
          "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/slides/8c6467e4-a646-4701-947c-f310cf5676af/slide_2.png",
      },
      {
        index: 3,
        slideUrl:
          "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/slides/8c6467e4-a646-4701-947c-f310cf5676af/slide_3.png",
      },
      {
        index: 4,
        slideUrl:
          "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/slides/8c6467e4-a646-4701-947c-f310cf5676af/slide_4.png",
      },
      {
        index: 5,
        slideUrl:
          "https://ujkcelfopwalsjonkndn.supabase.co/storage/v1/object/public/project_files/slides/8c6467e4-a646-4701-947c-f310cf5676af/slide_5.png",
      },
    ],
    meta: {
      slideCount: 5,
      type: "news_carousel",
      source: "news",
      article_id: "219cbfa47ce282aa4a3b9ca152245eac",
      link: "https://www.cnn.com/2026/04/24/us/video/berman-cohan-maroney-satoshi-bitcoin-cnc",
      description:
        "Why is the identity of Bitcoin's founder one of the biggest mysteries in finance? The new documentary \"Finding Satoshi\" aims to find out. CNN News Central's John Berman speaks with the two men leading the hunt, Investigative Journalist William Cohan and Quest Research & Investigations private investigator Tyler Maroney.",
      title:
        "New documentary seeks to uncover the identity of Bitcoin’s founder",
      keywords: null,
      category: [
        "environment",
        "technology",
        "world",
        "top",
        "health",
        "education",
        "business",
        "entertainment",
        "tourism",
        "science",
        "sports",
        "politics",
      ],
      image_url:
        "https://media.cnn.com/api/v1/images/stellar/prod/bitcoin-april24.jpg?c=original",
      source_name: "Cnn",
      source_url: "https://edition.cnn.com",
      source_icon: "https://n.bytvi.com/cnn.png",
    },
    imageCost: 0,
  };

  const { isPending, mutateAsync } = useGenerateSlideForScript();

  const handleGenerate = async () => {
    try {
      let res = slidesDatatemp;
      res = await mutateAsync({
        ...scriptData,
        isDummy,
      });

      setSlideData(res);
    } catch (error) {
      console.log(error);
      toast.error("Error..");
    }
  };

  useEffect(() => {
    if (slideData) {
      handleNext();
    }
  }, [slideData]);

  if (!scriptData) {
    return <p>No script found</p>;
  }

  return (
    <CustomBox
      title="Slide Data"
      icon={<Sliders2 />}
      right={
        <b>
          Step {step} of {totalSteps}
        </b>
      }
    >
      <div className={parentStyles.formGrid}>
        <CustomInput value={scriptData.script.topic} label={"Title"} />
        <CustomTextarea value={scriptData.meta.description} label={"Caption"} />
        <p>Source : {scriptData.meta.source_name}</p>
        <p>Source Url : {scriptData.meta.source_url}</p>
        {/* <p>Categoty : {scriptData.meta.category.split('')}</p> */}
        {scriptData.meta.keywords && (
          <p>Keywords : {scriptData.meta.keywords.join(", ")}</p>
        )}

        <Image height={200} src={scriptData.meta.image_url} />

        <br />

        <h2>Slides</h2>

        <div>
          {scriptData.script.slides.map((slide, slideIdx) => {
            return (
              <div key={`slide_${slideIdx}`}>
                <CustomTextarea value={slide.text} label={"Slide Text"} />
                <br />
                <CustomInput value={slide.highlights} label={"Highlights"} />
                <br />
                <CustomTextarea
                  value={slide.image_prompt}
                  label={"Image Prompt"}
                />
                <br />

                <hr />
              </div>
            );
          })}
        </div>

        <div className={parentStyles.footerActions}>
          <div /> {/* Spacer */}
          <CustomButton onClick={handleGenerate} isLoading={isPending}>
            Generate Slides <Magic />
          </CustomButton>
        </div>
      </div>
    </CustomBox>
  );
};

export default ScriptPreviewStep;
