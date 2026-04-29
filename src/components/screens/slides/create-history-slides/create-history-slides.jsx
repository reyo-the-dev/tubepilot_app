import CustomBox from "@/components/ui/custom_box/custom_box";
import React, { useState } from "react";
import styles from "./create-history-slides.module.scss";
import CustomButton from "@/components/ui/custom_button/custom_button";
import { toast } from "react-toastify";
import axios from "axios";
import { Calendar2Month } from "react-bootstrap-icons";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import { Image, Modal } from "react-bootstrap";
import {
  useGenerateImageForSlide,
  useGenerateSlidesForEvents,
} from "@/api_hooks/histoy.hooks";

const CreateHistorySlides = () => {
  const [events, setEvents] = useState(null);

  const fetchHistory = async () => {
    try {
      const res = await axios.get("https://history.muffinlabs.com/date");

      const eventsRes = res.data.data.Events.map((e) => ({
        ...e,
        imagePrompt: e.text,
        id: Math.random(),
      }));

      setEvents(eventsRes);
    } catch (error) {
      console.log(error);
      toast.error("Error...");
    }
  };

  const [selectedEvents, setSelectedEvents] = useState([]);

  const [currentStep, setCurrentStep] = useState(1);

  const { mutateAsync: generateImageForSlideAsync, isPending } =
    useGenerateImageForSlide();
  const {
    mutateAsync: generateSlidesForEventsAsync,
    isPending: generateSlidesForEventsIsPending,
  } = useGenerateSlidesForEvents();

  const generateImageForEvent = async (evnt, index) => {
    try {
      const res = await generateImageForSlideAsync(evnt);
      setSelectedEvents((prev) => {
        const out = [...prev];
        out[index].imageUrl = res.imageUrl;
        return out;
      });
    } catch (error) {
      console.log(error);
      toast.error("Image generation error");
    }
  };

  const [showPreview, setShowPreview] = useState(null);

  const generateSlidesForEvents = async (eventTogen, index, isIntro) => {
    try {
      const res = await generateSlidesForEventsAsync({
        event: eventTogen,
        isIntro,
      });
      setShowPreview(res.data.publicUrl);
      if (!isIntro) {
        setSelectedEvents((prev) => {
          const out = [...prev];
          out[index].slideImageUrl = res.data.publicUrl;
          return out;
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Image generation error");
    }
  };

  return (
    <>
      <Modal
        show={showPreview}
        onHide={() => {
          setShowPreview(null);
        }}
      >
        <Modal.Header closeButton>Preview</Modal.Header>
        <Image src={showPreview} alt="preview" fluid />
      </Modal>
      <div className={styles.main}>
        <CustomBox title={"Create History Slide"}>
          {!events && (
            <CustomButton onClick={fetchHistory}>Fetch History</CustomButton>
          )}

          {events && (
            <div>
              <p>
                Selected: {selectedEvents.length} / {events.length}
              </p>
              <br />
              <div className={styles.headBtns}>
                <CustomButton
                  variant={2}
                  onClick={() => {
                    setCurrentStep((prev) => prev - 1);
                  }}
                  disabled={currentStep === 1}
                >
                  Back
                </CustomButton>
                {currentStep !== 2 && (
                  <CustomButton
                    onClick={() => {
                      setCurrentStep((prev) => prev + 1);
                    }}
                  >
                    Next
                  </CustomButton>
                )}
              </div>
            </div>
          )}
        </CustomBox>
      </div>

      {events &&
        currentStep === 1 &&
        events.map((event, eventIdx) => {
          const isSelected = selectedEvents.some((e) => e.id === event.id);

          return (
            <CustomBox
              key={`event_${eventIdx}`}
              title={event.year}
              icon={<Calendar2Month />}
              leftBorder={isSelected}
            >
              <p>{event.text}</p>
              <br />

              <CustomButton
                onClick={() => {
                  if (isSelected) {
                    setSelectedEvents((prev) =>
                      prev.filter((pse) => pse.id !== event.id),
                    );
                  } else {
                    setSelectedEvents((prev) => [...prev, event]);
                  }
                }}
              >
                {isSelected ? "Remove" : "Select"}
              </CustomButton>
            </CustomBox>
          );
        })}

      {selectedEvents && currentStep === 2 && (
        <div>
          {selectedEvents.map((selectedEvent, selectedEventIdx) => {
            const isSelected = selectedEvents.some(
              (e) => e.id === selectedEvent.id,
            );

            return (
              <CustomBox
                key={`selectedEvent${selectedEvent.id}`}
                title={selectedEvent.year}
                icon={<Calendar2Month />}
                leftBorder={isSelected}
              >
                <CustomTextarea value={selectedEvent.text} label={"Text"} />
                <br />
                <CustomInput
                  value={selectedEventIdx.imagePropmt}
                  label={"Highlights"}
                  onChange={(e, v) => {
                    setSelectedEvents((prev) => {
                      const out = [...prev];
                      out[selectedEventIdx].highlights = v;
                      return out;
                    });
                  }}
                />
                <br />
                <CustomTextarea
                  value={selectedEvent.imagePrompt}
                  label={"Image Prompt"}
                  onChange={(e, v) => {
                    setSelectedEvents((prev) => {
                      const out = [...prev];
                      out[selectedEventIdx].imagePrompt = v;
                      return out;
                    });
                  }}
                />
                <br />
                <div className={styles.images}>
                  {selectedEvent.imageUrl && (
                    <Image src={selectedEvent.imageUrl} fluid alt="xx" />
                  )}
                  {selectedEvent.slideImageUrl && (
                    <Image src={selectedEvent.slideImageUrl} fluid alt="xx" />
                  )}
                </div>
                <br />
                <br />
                <div className={styles.btns}>
                  <CustomButton
                    onClick={async () => {
                      await generateImageForEvent(
                        selectedEvent,
                        selectedEventIdx,
                      );
                    }}
                    isLoading={isPending}
                  >
                    Generate Image
                  </CustomButton>

                  <CustomButton
                    onClick={async () => {
                      await generateSlidesForEvents(
                        selectedEvent,
                        selectedEventIdx,
                      );
                    }}
                    isLoading={generateSlidesForEventsIsPending}
                  >
                    Generate Slide
                  </CustomButton>
                  {selectedEvent.imageUrl && (
                    <CustomButton
                      onClick={async () => {
                        await generateSlidesForEvents(
                          selectedEvent,
                          selectedEventIdx,true
                        );
                      }}
                      isLoading={generateSlidesForEventsIsPending}
                    >
                      Generate Intro
                    </CustomButton>
                  )}
                </div>
              </CustomBox>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CreateHistorySlides;
