import CustomBox from "@/components/ui/custom_box/custom_box";
import React, { useEffect, useRef, useState } from "react";
import {
  CameraVideo,
  CheckCircleFill,
  PauseCircle,
  Play,
  PlayBtnFill,
  PlayCircle,
  VolumeUp,
} from "react-bootstrap-icons";
import styles from "./video_preferences.module.scss";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import { Col, Row } from "react-bootstrap";
import CustomInput from "@/components/ui/custom_input/custom_input";

const AudioPreferences = ({ audioPreferences, setAudioPreferences }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      audioRef.current = null;
    }
  }, [audioPreferences?.voice]);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = (voice) => {
    if (!audioRef.current) {
      audioRef.current = new Audio(`/voices/${voice}.wav`);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(voice);
    }
  };

  const voices = {
    Male: [
      {
        label: "Troy",
        value: "Troy",
        caption: "Deep Cinematic, Professional",
      },
      {
        label: "Austin",
        value: "Austin",
        caption: "Standard Male, Friendly",
      },
      {
        label: "Daniel",
        value: "Daniel",
        caption: "Deep, Relaxing, Calm",
      },
    ],

    Female: [
      {
        label: "Autumn",
        value: "Autumn",
        caption: "Warm, Professional, Expressive",
      },
      {
        label: "Diana",
        value: "Diana",
        caption: "Soft, Sweet, Caring",
      },
      {
        label: "Hannah",
        value: "Hannah",
        caption: "Standard Female, Energetic",
      },
    ],
  };

  const backgroundMusics = [
    {
      label: "None",
      value: "None",
      caption: "No background music",
      noPlaybtn: true,
    },
    {
      label: "Upload Music",
      value: "Custom",
      caption: "Upload your custom background music",
      noPlaybtn: true,
    },
    {
      label: "Cinematic",
      value: "cinematic",
      caption: "Epic cinematic background music",
    },
    {
      label: "Motivational",
      value: "motivational",
      caption: "Inspirational motivational music",
    },
    {
      label: "Scary",
      value: "scary",
      caption: "Dark horror background music",
    },
    {
      label: "Happy",
      value: "happy",
      caption: "Happy upbeat background music",
    },
    {
      label: "Documentary",
      value: "documentary",
      caption: "Calm documentary style music",
    },
    {
      label: "Action",
      value: "action",
      caption: "Fast action background music",
    },
  ];

  const musics = [
    {
      label: "Music 1",
      value: "music1.mp3",
      caption: "Fast action background music",
    },
    {
      label: "Music 2",
      value: "music2.mp3",
      caption: "Calm documentary style music",
    },
  ];

  return (
    <>
      <CustomBox title={"Audio Preferences"} icon={<VolumeUp />}>
        <Row>
          <Col>
            <CustomSelect
              label="Choose Gender"
              options={["Male", "Female"]}
              value={audioPreferences?.gender}
              onChange={(e, v) => {
                setAudioPreferences((prev) => ({
                  ...prev,
                  gender: v,
                  voice: null,
                }));
              }}
            />
          </Col>

          <Col>
            <CustomSelect
              label="Choose Voice"
              options={
                audioPreferences?.gender
                  ? voices[audioPreferences?.gender].map((v) => ({
                      ...v,
                      right:
                        !v.noPlaybtn &&
                        (isPlaying == v.value ? (
                          <PauseCircle
                            size={24}
                            onClick={() => {
                              togglePlay(v.value);
                            }}
                          />
                        ) : (
                          <PlayCircle
                            size={24}
                            onClick={() => {
                              togglePlay(v.value);
                            }}
                          />
                        )),
                    }))
                  : []
              }
              value={audioPreferences?.voice}
              onChange={(e, v) => {
                setAudioPreferences((prev) => ({ ...prev, voice: v }));
              }}
              onModalClose={togglePlay}
            />
          </Col>
        </Row>
        <br />

        <Row>
          <Col xs={12} lg={6}>
            <CustomSelect
              label="Background Music Genre"
              options={backgroundMusics}
              value={audioPreferences?.bgm_genre}
              onChange={(e, v) =>
                setAudioPreferences((prev) => ({ ...prev, bgm_genre: v }))
              }
            />
            <br />
          </Col>

          {audioPreferences?.bgm_genre == "Custom" && (
            <Col>
              <CustomInput type="file" label={"Select Music"} />
            </Col>
          )}

          {audioPreferences?.bgm_genre != "Custom" &&
            audioPreferences?.bgm_genre != "None" && (
              <Col>
                <CustomSelect
                  label="Select Music"
                  options={musics.map((v) => ({
                    ...v,
                    right: !v.noPlaybtn && (
                      <PlayCircle
                        size={24}
                        onClick={() => {
                          alert();
                        }}
                      />
                    ),
                  }))}
                  value={audioPreferences?.music}
                  onChange={(e, v) =>
                    setAudioPreferences((prev) => ({ ...prev, music: v }))
                  }
                />
              </Col>
            )}
        </Row>
      </CustomBox>
    </>
  );
};

export default AudioPreferences;
