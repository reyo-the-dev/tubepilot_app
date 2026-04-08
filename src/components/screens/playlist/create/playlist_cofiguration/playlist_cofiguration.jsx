import styles from "../create_playlist.module.scss";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import CustomSelect from "@/components/ui/custom_select/custom_select";

const PlaylistCofiguration = ({
  values,
  onChangeValue,
}) => {


  const topicsAndNiche = [
    { label: "Custom Topic", value: "Custom Topic" },
    {
      label: "Motivation",
      value: "Motivation",
      caption: "inspiring, emotional, powerful",
    },
    {
      label: "Bedtime Stories",
      value: "Bedtime Stories",
      caption: "calm, magical, soft, comforting",
    },
    {
      label: "Scary Stories",
      value: "Scary Stories",
      caption: "dark, suspenseful, scary, mysterious",
    },
    {
      label: "Historical Facts",
      value: "Historical Facts",
      caption: "dramatic, documentary, cinematic narration",
    },
    {
      label: "Space & Science",
      value: "Space & Science",
      caption: "curious, mysterious, documentary",
    },
    {
      label: "Mystery",
      value: "Mystery",
      caption: "suspense, curiosity, mysterious",
    },
    {
      label: "Adventure Stories",
      value: "Adventure Stories",
      caption: "exciting, epic, inspiring",
    },
    { label: "Life Lessons", value: "Life Lessons" },
    {
      label: "Kids Stories",
      value: "Kids Stories",
      caption: "fun, playful, colorful",
    },
    { label: "Success Stories", value: "Success Stories" },
    { label: "Future & AI", value: "Future & AI" },
    { label: "War & History", value: "War & History" },
    { label: "Nature Stories", value: "Nature Stories" },
  ];

  return (
    <div className={styles.formGrid}>
      <CustomInput
        label="PLAYLIST NAME"
        placeholder="e.g. Daily Motivation Shorts"
        value={values.name}
        onChange={(e, v) => onChangeValue("name", v)}
      />
      <CustomTextarea
        label="DESCRIPTION"
        placeholder="Describe the overarching theme of this playlist..."
        rows={3}
        value={values.description}
        onChange={(e, v) => onChangeValue("description", v)}
      />
      <CustomSelect
        label="TOPIC / NICHE"
        options={topicsAndNiche}
        value={values.topic}
        onChange={(e, v) => onChangeValue("topic", v)}
      />
      {values.topic === "Custom Topic" && (
        <CustomInput
          label="Custom Topic"
          placeholder="e.g. Daily Motivation Shorts"
          value={values.customTopic}
          onChange={(e, v) => onChangeValue("customTopic", v)}
        />
      )}
    </div>
  );
};

export default PlaylistCofiguration;
