import React from "react";
import parentStyles from "../../create_series.module.scss";
import styles from "./slide_design.module.scss";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomButton from "@/components/ui/custom_button/custom_button";
import {
  Palette,
  ArrowLeft,
  ArrowRight,
  EyeFill,
  CheckCircleFill,
  Easel,
  Type,
} from "react-bootstrap-icons";
import SlideStyles from "@/data/dummySlideStyles";

const SlideDesign = ({
  values,
  onChangeValue,
  handleBack,
  handleNext,
  step,
  totalSteps,
}) => {
  const fonts = [
    { label: "Inter (Sans-Serif)", value: "Inter" },
    { label: "Roboto (Global)", value: "Roboto" },
    { label: "Montserrat (Modern)", value: "Montserrat" },
    { label: "Playfair Display (Elegant)", value: "Playfair" },
    { label: "Georgia (Classic)", value: "Georgia" },
  ];

  const fontWeights = [
    { label: "Normal (400)", value: "400" },
    { label: "Bold (700)", value: "700" },
    { label: "Extra Bold (800)", value: "800" },
    { label: "Black (900)", value: "900" },
  ];

  const SlidePreview = () => {
    const selectedStyleConfig =
      SlideStyles.find((s) => s.name === values.style) || SlideStyles[0];

    // Map values to renderer props
    const renderProps = {
      text: values.previewText || selectedStyleConfig.defaultStyle.text,
      highlights:
        values.previewHighlights || selectedStyleConfig.defaultStyle.highlights,
      fontColor: values.color,
      highlightColor: values.highlightColor,
      bgImg: selectedStyleConfig.defaultStyle.bgImg,
      logoUrl: values.logo || selectedStyleConfig.defaultStyle.logoUrl,
      isUpperCase: true,
      ratio: values.ratio,
      textSize: values.textSize,
      font: values.font,
      fontWeight: values.fontWeight,
    };

    const htmlContent = selectedStyleConfig.renderSlide(renderProps);

    return (
      <div className={styles.mockupContainer}>
        <div
          className={styles.iframeWrapper}
          style={{ aspectRatio: values.ratio.replace(":", " / ") }}
        >
          <iframe
            key={`${values.style}-${values.color}-${values.highlightColor}-${values.ratio}-${values.textSize}-${values.font}-${values.fontWeight}-${values.previewText}-${values.previewHighlights.join(",")}`}
            srcDoc={htmlContent}
            title="Slide Preview"
            className={styles.previewIframe}
          />
        </div>
        <p className={styles.hint}>Mockup Preview ({values.ratio} Ratio)</p>
      </div>
    );
  };

  const ratioOptions = [
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
  }));

  return (
    <div className={styles.designLayout}>
      <div className={styles.designCol}>
        <CustomBox
          title="Choose Slide Style"
          icon={<Easel />}
          right={
            <b>
              Step {step} of {totalSteps}
            </b>
          }
        >
          <div className={styles.slideStyles}>
            <div className={styles.stylesWrap}>
              {SlideStyles.map((style) => (
                <div
                  key={style.name}
                  className={`${styles.styleCard} ${values.style === style.name ? styles.active : ""}`}
                  onClick={() => onChangeValue("style", style.name)}
                >
                  <div className={styles.styleCardIframeWrapper}>
                    <iframe
                      srcDoc={style.renderSlide({
                        ...style.defaultStyle,
                        ratio: values.ratio,
                        textSize: values.textSize,
                        font: values.font,
                        fontWeight: values.fontWeight,
                      })}
                      title={style.name}
                      scrolling="no"
                    />
                  </div>
                  <div className={styles.styleCardOverlay}>
                    <CheckCircleFill className={styles.checkIcon} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CustomBox>

        <CustomBox title="Preview Content" icon={<Type />}>
          <div className={parentStyles.formGrid}>
            <CustomInput
              label="PREVIEW TEXT"
              placeholder="Enter the text you want to see in the preview..."
              value={values.previewText}
              onChange={(e, v) => onChangeValue("previewText", v)}
              multiline={true}
              rows={3}
            />
            <CustomInput
              label="HIGHLIGHTS (COMMA SEPARATED)"
              placeholder="e.g. executives, psychopath, prisoners"
              value={values.previewHighlights.join(", ")}
              onChange={(e, v) =>
                onChangeValue(
                  "previewHighlights",
                  v.split(",").map((s) => s.trim()),
                )
              }
            />
          </div>
        </CustomBox>

        <CustomBox title="Branding & Typography" icon={<Palette />}>
          <div className={parentStyles.formGrid}>
            <div className={parentStyles.row2}>
              <div className={styles.row}>
                <CustomInput
                  label="TEXT COLOR"
                  type="color"
                  value={values.color}
                  onChange={(e, v) => onChangeValue("color", v)}
                />
                <CustomInput
                  label="HIGHLIGHT COLOR"
                  type="color"
                  value={values.highlightColor}
                  onChange={(e, v) => onChangeValue("highlightColor", v)}
                />
              </div>
              <CustomSelect
                label="IMAGE RATIO"
                options={ratioOptions}
                value={values.ratio}
                onChange={(e, v) => onChangeValue("ratio", v)}
              />
            </div>

            <div className={parentStyles.row2}>
              <CustomSelect
                label="TEXT FONT"
                options={fonts}
                value={values.font}
                onChange={(e, v) => onChangeValue("font", v)}
              />
              <CustomSelect
                label="FONT WEIGHT"
                options={fontWeights}
                value={values.fontWeight}
                onChange={(e, v) => onChangeValue("fontWeight", v)}
              />
            </div>

            <div className={parentStyles.row2}>
              <CustomSelect
                label="TEXT SIZE"
                options={["Small", "Medium", "Large", "Adaptive"]}
                value={values.textSize}
                onChange={(e, v) => onChangeValue("textSize", v)}
              />
              <CustomInput
                label="LOGO URL (OPTIONAL)"
                placeholder="https://example.com/logo.png"
                value={values.logo}
                onChange={(e, v) => onChangeValue("logo", v)}
              />
            </div>
          </div>
        </CustomBox>

        <div className={parentStyles.footerActions}>
          <CustomButton onClick={handleBack} variant={2}>
            <ArrowLeft /> Back
          </CustomButton>
          <CustomButton onClick={handleNext}>
            Next Step <ArrowRight />
          </CustomButton>
        </div>
      </div>

      <div className={styles.previewCol}>
        <CustomBox title="Slide Preview" icon={<EyeFill />}>
          <SlidePreview />
        </CustomBox>
      </div>
    </div>
  );
};

export default SlideDesign;
