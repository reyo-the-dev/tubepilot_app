import React, { useState, useRef, useEffect } from "react";
import styles from "../create_playlist.module.scss";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import CustomOptionGroup from "@/components/ui/custom_option_group/custom_option_group";
import { CheckCircleFill, PlayFill, PauseFill } from "react-bootstrap-icons";

const VisualsAudioProfile = ({ values, onChangeValue }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current = null;
    } 
  }, [values.voice]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`/voices/${values.voice}.wav`);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

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



  return (
    <div className={styles.formGrid}>
      <div className={styles.artStyles}>
        {artStyles.map((style) => {
          return (
            <div
              key={style.name}
              style={{
                backgroundImage: `url('/art_styles/${style.img}')`,
              }}
              className={` ${values.artStyle === style.name ? styles.active : ""}

                ${styles.artStyle}`}
              onClick={() => {
                onChangeValue("artStyle", style.name);
              }}
            >
              <CheckCircleFill />
              {style.name}
            </div>
          );
        })}
      </div>
      <div className={styles.row2}>
        <CustomSelect
          label="VOICE GENDER"
          options={["Male", "Female"]}
          value={values.voiceGender}
          onChange={(e) => {
            const gender = e.target.value;
            onChangeValue("voiceGender", gender);
            if (gender === "Male") {
              onChangeValue("voice", "Troy");
            } else {
              onChangeValue("voice", "Autumn");
            }
          }}
        />
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <CustomSelect
              label="SELECT VOICE"
              options={
                values.voiceGender === "Male"
                  ? [
                      { label: "Troy", value: "Troy", caption: "Deep Cinematic, Professional" },
                      { label: "Austin", value: "Austin", caption: "Standard Male, Friendly" },
                      { label: "Daniel", value: "Daniel", caption: "Deep, Relaxing, Calm" },
                    ]
                  : [
                      { label: "Autumn", value: "Autumn", caption: "Warm, Professional, Expressive" },
                      { label: "Diana", value: "Diana", caption: "Soft, Sweet, Caring" },
                      { label: "Hannah", value: "Hannah", caption: "Standard Female, Energetic" },
                    ]
              }
              value={values.voice}
              onChange={(e) => onChangeValue("voice", e.target.value)}
            />
          </div>
          <button
            type="button"
            style={{
              height: '42px',
              padding: '0 20px',
              borderRadius: '8px',
              border: 'none',
              background: '#0d6efd',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onClick={togglePlay}
          >
            {isPlaying ? <PauseFill size={20} /> : <PlayFill size={20} />}
          </button>
        </div>
      </div>
      <div className={styles.row2}>
        <CustomSelect
          label="VIDEO LENGTH"
          options={[
            { label: "30 Sec", value: "30 sec (High Retention)", caption: "Fast-paced, High Retention" },
            { label: "60 Sec", value: "60 sec (Standard Short)", caption: "Standard Length for Shorts" },
            { label: "90 Sec", value: "90 sec", caption: "Detailed Storytelling" },
            { label: "120 Sec", value: "120 sec", caption: "Extended Content, In-depth" },
          ]}
          value={values.duration}
          onChange={(e, v) => onChangeValue("duration", v)}
        />
        <CustomSelect
          label="LANGUAGE"
          options={[
            "English (US)",
            "English (UK)",
            "Spanish",
            "French",
            "German",
          ]}
          value={values.language}
          onChange={(e) => onChangeValue("language", e.target.value)}
        />
      </div>
    </div>
  );
};

export default VisualsAudioProfile;
