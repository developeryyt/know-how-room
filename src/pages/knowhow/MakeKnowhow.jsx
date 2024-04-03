import { createEditor } from 'slate'
import {Slate, withReact, Editable } from "slate-react";
import {useMemo} from "react";
import i18n from "../../utils/i18n.js";
import {useTranslation} from "react-i18next";
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";
import tw from "twin.macro";
import SpacingBox from "../../components/layout/SpacingBox.jsx";


const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

const MakeKnowhow = () => {

    const { t } = useTranslation()
    const editor = useMemo(() => withReact(createEditor()), [])
    const navigate = useNavigate()




    const goBack = () => {
        navigate(-1)
    }

    const Back = tw.div`text-right`

    return (
        <>
            <SpacingBox classes={{ paddingTop: '20px'}}>
                <Back>
                   <Button
                       onClick={goBack}
                       type='button'
                       className='inline-block !w-auto rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                   >
                       {t("GO BACK")}
                   </Button>
                </Back>
                <SpacingBox classes='py-20'>
                    <Slate editor={editor} initialValue={initialValue}>
                        <Editable />
                    </Slate>
                </SpacingBox>
            </SpacingBox>
        </>
    );
};

export default MakeKnowhow;
