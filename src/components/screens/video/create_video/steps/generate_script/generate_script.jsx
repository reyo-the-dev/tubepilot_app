import CustomButton from "@/components/ui/custom_button/custom_button";
import CustomInput from "@/components/ui/custom_input/custom_input";
import React, { useEffect, useState } from "react";
import styles from "./generate_script.module.scss";
import CustomBox from "@/components/ui/custom_box/custom_box";
import { CardList, Magic, PencilSquare } from "react-bootstrap-icons";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import { Col, Row } from "react-bootstrap";
import {
  useGenerateScript,
  useGetScriptById,
  useSaveScript,
} from "@/api_hooks/script.hooks";
import { toast } from "react-toastify";
import CustomOptionGroup from "@/components/ui/custom_option_group/custom_option_group";
import { useRouter } from "next/router";

const GenerateScriptStep = ({
  currentStepIndex,
  noOfSteps,
  script,
  setScript,
  values,
  handleNext,
  router,
  projectId,
  setProjectData
}) => {
  const [scriptValues, setScriptvalues] = useState({
    topic: "",
    duration: "10",
    language: "English (US)",
    isDummyData: true,
  });

  const { mutateAsync, isPending } = useGenerateScript();
  const { mutateAsync: saveScriptAsync, isPending: saveScriptisLoading } =
    useSaveScript();

  const generateScript = async () => {
    setScript(null);
    try {
      const res = await mutateAsync({
        ...scriptValues,
      });
      setScript(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  const saveScript = async () => {
    try {
      if (projectId) {
        handleNext()
      } else {
        const res = await saveScriptAsync({
          ...script,
        });

        if (res.success) {
          setScript(res.data.script);
          setProjectData(res.data)
          router.push(
            {
              pathname: router.pathname,
              query: { id: res.data.id },
            },
            undefined,
            { shallow: true },
          );
          handleNext();
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
  };

  return (
    <>
      {!projectId && (
        <CustomBox
          title={"Generate Script"}
          icon={<Magic />}
          right={
            <b>
              Step {currentStepIndex + 1} of {noOfSteps}
            </b>
          }
        >
          <div className={styles.GenerateScriptStep}>
            <Row>
              <Col xs={12} md={6}>
                <CustomInput
                  required
                  label={"Enter a Topic"}
                  placeholder={"e.g. Top 10 armies of the world"}
                  value={scriptValues.topic}
                  onChange={(e, v) => {
                    setScriptvalues((prev) => ({ ...prev, topic: v }));
                  }}
                />
                <br />
              </Col>

              <Col xs={12} md={6}>
                <CustomSelect
                  required
                  placeholder={"Select Duration"}
                  label="Video length"
                  options={[
                    {
                      label: "10 Sec",
                      value: "10",
                      caption: "Testing",
                    },
                    {
                      label: "30 Sec",
                      value: "30",
                      caption: "Fast-paced, High Retention",
                    },
                    {
                      label: "60 Sec",
                      value: "60",
                      caption: "Standard Length for Shorts",
                    },
                    {
                      label: "90 Sec",
                      value: "90",
                      caption: "Detailed Storytelling",
                    },
                    {
                      label: "120 Sec",
                      value: "120",
                      caption: "Extended Content, In-depth",
                    },
                  ]}
                  value={scriptValues.duration}
                  onChange={(e, v) => {
                    setScriptvalues((prev) => ({ ...prev, duration: v }));
                  }}
                />
                <br />
              </Col>

              <Col xs={12} md={6}>
                <CustomSelect
                  required
                  placeholder={"Select Language"}
                  label="Language"
                  options={[
                    {
                      label: "English (US)",
                      value: "English (US)",
                    },
                  ]}
                  value={values.language}
                  disabled
                />
                <br />
              </Col>
            </Row>

            <label className={styles.remember}>
              <input
                type="checkbox"
                value={scriptValues.isDummyData}
                checked={scriptValues.isDummyData}
                onChange={(e) => {
                  setScriptvalues((prev) => ({
                    ...prev,
                    isDummyData: e.target.checked,
                  }));
                }}
              />
              &nbsp;
              <span>Test Data</span>
            </label>

            <br />
            <br />

            <CustomButton onClick={generateScript} isLoading={isPending}>
              Generate Script <Magic />
            </CustomButton>
          </div>
        </CustomBox>
      )}

      {script && (
        <CustomBox title={"Script Preview"} icon={<CardList />} isWhite={false}>
          <CustomBox>
            <p>
              <b>Title: </b>
              <CustomInput value={script.title} />
            </p>
            <br />
            <p>
              <b>Scene Count: </b>
              {script.scenes.length}
            </p>
            <p>
              <b>Duration: </b>
              {script.duration} Secs
            </p>
          </CustomBox>
          <hr />
          {script.scenes.map((script) => {
            return (
              <>
                <CustomBox
                  key={`script_row_${script.scene_number}`}
                  title={`Scene ${script.scene_number}`}
                  icon={<CardList />}
                  leftBorder
                  right={
                    <PencilSquare
                      size={20}
                      color="grey"
                      style={{
                        cursor: "pointer",
                      }}
                    />
                  }
                >
                  <CustomInput
                    value={script.text}
                    label={"Scene Text: "}
                    disabled
                  />
                  <br />

                  <CustomInput
                    value={script.image_prompt}
                    label={"Image Prompt: "}
                    disabled
                  />
                </CustomBox>
                <hr />
              </>
            );
          })}
        </CustomBox>
      )}

      {script && (
        <div>
          <CustomButton onClick={saveScript} isLoading={saveScriptisLoading}>
            Next
          </CustomButton>
        </div>
      )}
    </>
  );
};

export default GenerateScriptStep;
