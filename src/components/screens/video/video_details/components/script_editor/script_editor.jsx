import React from 'react';
import styles from './script_editor.module.scss';
import CustomBox from "@/components/ui/custom_box/custom_box";
import { JournalText, PencilFill, Magic, Translate } from 'react-bootstrap-icons';

const ScriptEditor = () => {
    return (
        <CustomBox
            title="AI Script Content"
            icon={<JournalText />}
            right={<button className={styles.editBtn}>
                <PencilFill size={12} /> Edit Script
            </button>}
        >
            <div className={styles.scriptBox}>


                <div className={styles.scriptContent}>
                    <p>[Intro Music: Gentle Italian Mandolin]</p>
                    <p>"Welcome to a journey through the heart of the Mediterranean. While Rome and Florence steal the spotlight, the true soul of Italy hides in the quiet corners of the South. Today, we're unveiling 10 hidden gems that will make you fall in love with Italy all over again..."</p>
                    <p>"First on our list is Polignano a Mare, a stunning town perched atop limestone cliffs. Imagine waking up to the sound of turquoise waves crashing beneath your balcony. The narrow white-washed streets lead to breathtaking viewpoints that look like they were pulled straight from a postcard."</p>
                </div>

                <div className={styles.scriptActions}>
                    <button><Magic /> Regenerate Script</button>
                    <button><Translate /> Translate to Italian</button>
                </div>
            </div>
        </CustomBox>
    );
};

export default ScriptEditor;
