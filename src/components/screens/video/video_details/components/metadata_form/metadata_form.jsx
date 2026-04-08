import React from 'react';
import styles from './metadata_form.module.scss';
import CustomBox from "@/components/ui/custom_box/custom_box";
import CustomInput from "@/components/ui/custom_input/custom_input";
import CustomTextarea from "@/components/ui/custom_textarea/custom_textarea";
import CustomSelect from "@/components/ui/custom_select/custom_select";
import { CardText } from 'react-bootstrap-icons';

const MetadataForm = ({
    title, setTitle,
    description, setDescription,
    privacy, setPrivacy,
    category, setCategory,
    tags, setTags
}) => {
    return (
        <CustomBox
            title="YouTube Metadata"
            icon={<CardText />}
        >
            <div className={styles.metadataBox}>

                <div className={styles.formGrid}>
                    <CustomInput
                        label="VIDEO TITLE"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <CustomTextarea
                        label="DESCRIPTION"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                    />

                    <div className={styles.row2}>
                        <CustomSelect
                            label="PRIVACY"
                            options={["Public", "Unlisted", "Private"]}
                            value={privacy}
                            onChange={(e) => setPrivacy(e.target.value)}
                        />
                        <CustomSelect
                            label="CATEGORY"
                            options={["Travel & Events", "Education", "Entertainment", "Tech"]}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </div>

                    <CustomInput
                        label="TAGS (COMMA SEPARATED)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>
            </div>
        </CustomBox>
    );
};

export default MetadataForm;
