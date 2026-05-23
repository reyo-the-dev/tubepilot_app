import { useGenerateScriptForSlides } from "@/api_hooks/slide/slide.hooks";
import ScriptPreview from "@/components/common/script_preview/script_preview";
import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { ArrowRight, Image, ImageAlt, Images } from "react-bootstrap-icons";

const GenerateScriptStep = ({ handleNext, topic, setTopic, script, setScript , isTest, setIsTest}) => {
  const sample_script = {
    title: "5 Places Humans Should Never Visit",
    script: {
      intro: {
        text: "5 Places Humans Should Never Visit",
        highlights: ["Humans", "Never Visit"],
        image_prompt:
          "Dark cinematic atmosphere, mysterious forbidden locations around the world, dramatic lighting, realistic style, eerie mood, ultra detailed",
      },

      slides: [
        {
          title: "North Sentinel Island",
          text: "One of the most isolated islands on Earth. Outsiders who enter are often attacked immediately.",
          image_prompt:
            "North Sentinel Island aerial view, dense jungle island in dark ocean, mysterious atmosphere, cinematic documentary style",
          highlights: ["isolated", "attacked"],
        },

        {
          title: "Snake Island",
          text: "This island in Brazil is filled with thousands of deadly venomous snakes. The government banned visitors.",
          image_prompt:
            "Dark island covered with snakes, stormy sky, cinematic wildlife horror, ultra realistic",
          highlights: ["deadly", "banned"],
        },

        {
          title: "Chernobyl Reactor 4",
          text: "Radiation levels near the reactor can still kill within minutes in certain areas.",
          image_prompt:
            "Abandoned Chernobyl reactor, radioactive warning signs, foggy atmosphere, cinematic realism",
          highlights: ["Radiation", "kill"],
        },

        {
          title: "The Door To Hell",
          text: "A giant gas crater in Turkmenistan has been burning continuously for over 50 years.",
          image_prompt:
            "Massive fiery crater in desert at night, glowing flames, cinematic aerial shot, hyper realistic",
          highlights: ["burning", "50 years"],
        },

        {
          title: "Death Valley",
          text: "Temperatures here became so extreme that rocks appear to move by themselves.",
          image_prompt:
            "Extreme desert heat waves, cracked earth, moving rocks mystery, cinematic documentary style",
          highlights: ["extreme", "move"],
        },
      ],
    },

    hashtags: [
      "DarkFacts",
      "Mystery",
      "HistoryFacts",
      "CreepyPlaces",
      "HiddenTruth",
    ],
    caption:
      "⚠️ Some places on Earth are so dangerous… humans were warned to never enter.From deadly islands to radioactive zones, these locations still exist today. Which one shocked you the most? 👀 Save this for later & follow for more dark mysteries, hidden history, and cinematic facts.",
  };



  const { mutateAsync, isPending } = useGenerateScriptForSlides();

  const generateScript = async () => {
    setScript(null);

    if (isTest) {
      setScript(sample_script);
    } else {
      const res = await mutateAsync({
        topic,
      });

      setScript(res.data);
    }
  };

  return (
    <>
      <CustomBox title={"Generate Script"}>
        <CustomTextarea
          label={"Topic"}
          placeholder={"Enter Topic/Text"}
          value={topic}
          onChange={(e, v) => {
            setTopic(v);
          }}
        />
        <br />
        <Form.Check
          label="Tast Data?"
          checked={isTest}
          onChange={(e) => {
            setIsTest(e.target.checked);
          }}
        />
        <br />
        <CustomButton onClick={generateScript} isLoading={isPending}>
          Generate Script
        </CustomButton>
      </CustomBox>

      {script && (
        <>
          <CustomBox title={"Post Details"} icon={<Images />}>
            <CustomInput label={"Title"} value={script.title} />
            <br />
            <CustomTextarea label={"Caption"} value={script.caption} />
            <br />
            <CustomInput label={"Hashtags"} value={script.hashtags} />
            <br />
            <CustomInput label={"Category"} value={script.script.intro.category} />
            <br />
            <p>Total Slides : {script.script.slides.length}</p>
          </CustomBox>
          <br />
          <hr />
          <br />

          <CustomBox title={`Intro Slide`} leftBorder>
            <CustomTextarea label={"Text"} value={script.script.intro.text} />
  
            <br />
            <CustomInput
              label={"Highlights"}
              value={script.script.intro.highlights}
            />
            <br />
            <CustomTextarea
              label={"Image Prompt"}
              value={script.script.intro.image_prompt}
            />
          </CustomBox>

          <br />
          <hr />
          <br />

          {script.script.slides.map((slide, slideIndex) => {
            return (
              <CustomBox
                key={`slide+${slideIndex}`}
                title={`Slide ${slideIndex}`}
                leftBorder
                icon={<Image />}
              >
                <CustomInput label={"Title"} value={slide.title} />
                <br />
                <CustomTextarea label={"Text"} value={slide.text} />
                <br />
                <CustomInput label={"Highlights"} value={slide.highlights} />
                <br />
                <CustomTextarea
                  label={"Image Prompt"}
                  value={slide.image_prompt}
                />
              </CustomBox>
            );
          })}

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <CustomButton onClick={handleNext}>
              Next <ArrowRight />
            </CustomButton>
          </div>
        </>
      )}
    </>
  );
};

export default GenerateScriptStep;
