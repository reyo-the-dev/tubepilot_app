import CustomBox from "@/components/ui/custom_box/custom_box";
import React from "react";
import {
  CameraVideo,
  CheckCircleFill,
  Easel,
  StarFill,
} from "react-bootstrap-icons";
import styles from "./video_preferences.module.scss";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import { Col, Row } from "react-bootstrap";
import { useSaveAudioVideoPreferences } from "@/api_hooks/project.hooks";
import { toast } from "react-toastify";

const VideoPreferences = ({
  currentStepIndex,
  noOfSteps,
  setVideoPreferences,
  videoPreferences,
}) => {
  const artStyles = [
    {
      name: "Cinematic Realistic",
      prompt: "cinematic, realistic, dramatic lighting, depth of field, 8k",
      useFor: "Motivation, history, facts, documentary",
      img: "cinematic.jpg",
    },
    {
      name: "Dark Cinematic",
      prompt:
        "dark cinematic, volumetric lighting, moody lighting, high contrast shadows, 8k",
      useFor: "Horror, mystery, thriller",
      img: "mystery.jpg",
    },
    {
      name: "Pixar 3D Animated",
      prompt:
        "pixar style, 3d animated movie, colorful lighting, soft shadows, high detail",
      useFor: "Kids stories, fun videos",
      img: "animated.jpg",
    },
    {
      name: "Anime",
      prompt:
        "anime style, detailed illustration, cinematic lighting, vibrant colors",
      useFor: "Stories, adventure, fantasy",
      img: "anime.jpg",
    },

    {
      name: "Storybook Illustration",
      prompt:
        "storybook illustration, watercolor, soft lighting, pastel colors, dreamy",
      useFor: "Bedtime stories, kids stories",
      img: "story book.jpg",
    },
  ];

  const resolutionMap = {
    480: { width: 854, height: 480 },
    720: { width: 1280, height: 720 },
    1080: { width: 1920, height: 1080 },
    1440: { width: 2560, height: 1440 },
  };

  return (
    <>
      <CustomBox
        title={"Choose Art Style"}
        icon={<Easel />}
        right={
          <b>
            Step {currentStepIndex + 1} of {noOfSteps}
          </b>
        }
      >
        <div className={styles.artStyles}>
          <div className={styles.wrap}>
            {artStyles.map((style) => {
              return (
                <div
                  key={style.name}
                  style={{
                    backgroundImage: `url('/art_styles/${style.img}')`,
                  }}
                  className={` ${videoPreferences?.art_style === style.name ? styles.active : ""}

                ${styles.artStyle}`}
                  onClick={() => {
                    setVideoPreferences((prev) => ({
                      ...prev,
                      art_style: style.name,
                    }));
                  }}
                >
                  <CheckCircleFill />
                  {style.name}
                </div>
              );
            })}
          </div>
        </div>
      </CustomBox>

      <CustomBox title={"Video Preferences"} icon={<CameraVideo />}>
        <Row>
          <Col xs={12} md={6}>
            <CustomSelect
              required
              placeholder={"Screen Ratio"}
              label="Screen Ratio"
              options={[
                {
                  label: "16:9",
                  value: "16:9",
                  caption: "Landscape (YouTube, Desktop)",
                },
                {
                  label: "9:16",
                  value: "9:16",
                  caption: "Portrait (Shorts, Reels, TikTok)",
                },
                {
                  label: "1:1",
                  value: "1:1",
                  caption: "Square (Instagram Post)",
                },
                {
                  label: "4:5",
                  value: "4:5",
                  caption: "Instagram Portrait",
                },
              ].map((r) => ({
                ...r,
                right: (
                  <div
                    className={styles.ratio}
                    style={{
                      aspectRatio: r.value.replace(":", " / "),
                    }}
                  />
                ),
              }))}
              value={videoPreferences?.ratio}
              onChange={(e, v) => {
                setVideoPreferences((prev) => ({
                  ...prev,
                  ratio: v,
                }));
              }}
            />
            <br />
          </Col>

          <Col xs={12} md={6}>
            <CustomSelect
              required
              placeholder={"Select Resolution"}
              label="Resolution"
              options={[
                {
                  label: "480p",
                  value: "480",
                  caption: "Low quality • Fast render • Small file",
                },
                {
                  label: "720p",
                  value: "720",
                  caption: "Medium quality • Recommended",
                  right: <StarFill color="yellow" />,
                },
                {
                  label: "1080p",
                  value: "1080",
                  caption: "High quality • Slow render",
                },
                {
                  label: "1440p",
                  value: "1440",
                  caption: "Very high quality",
                },
              ]}
              value={videoPreferences?.resolution}
              onChange={(e, v) => {
                setVideoPreferences((prev) => ({
                  ...prev,
                  resolution: v,
                }));
              }}
            />
          </Col>
        </Row>
      </CustomBox>
    </>
  );
};

export default VideoPreferences;
