import { CardList, PencilSquare } from "react-bootstrap-icons";

const { default: CustomBox } = require("@/components/ui/custom_box/custom_box");
const { default: CustomInput } = require("@/components/ui/custom_input/custom_input");

const ScriptPreview = ({ script, noTitle = false }) => {
    return <CustomBox title={"Script Preview"} icon={<CardList />} isWhite={false}>
        {!noTitle && <>
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
        </>
        }
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
}

export default ScriptPreview