import { createEditor, Editor } from 'slate'
import {Slate, withReact, Editable, useSlate} from "slate-react";
import {useMemo} from "react";
import i18n from "../../utils/i18n.js";
import {useTranslation} from "react-i18next";
import Button from "../../components/button/Button";
import {useNavigate} from "react-router-dom";
import tw from "twin.macro";
import SpacingBox from "../../components/layout/SpacingBox";


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
            <SpacingBox>
                <Back>
                   <Button
                       onClick={goBack}
                       type='button'
                       className='inline-block !w-auto rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                   >
                       {t("GO BACK")}
                   </Button>
                </Back>
                <div>
                    <Slate editor={editor} initialValue={initialValue}>
                        {/*<Toolbar>*/}

                        {/*</Toolbar>*/}

                        <Editable />
                    </Slate>
                </div>
            </SpacingBox>
        </>
    );
};

const MarkButton = ({}) => {
    const editor = useSlate()
    return (
        <Button
            active={isMarkActive(editor, format)}
            onMouseDown={event => {
                event.preventDefault()
                toggleMark(editor, format)
            }}
        >
            {/*<Icon>{icon}</Icon>*/}
        </Button>
    )
}

const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
        Editor.removeMark(editor, format)
    } else {
        Editor.addMark(editor, format, true)
    }
}

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
}

export default MakeKnowhow;
