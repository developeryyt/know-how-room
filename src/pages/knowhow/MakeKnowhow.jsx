import { createEditor } from 'slate'
import {Slate, withReact, Editable } from "slate-react";
import {useMemo} from "react";
import i18n from "../../utils/i18n.js";
import {useTranslation} from "react-i18next";


const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

const MakeKnowhow = () => {

    const { t } = useTranslation()
    const editor = useMemo(() => withReact(createEditor()), [])

    return (
        <>
            <div className='text-right'>
                <button
                    onClick={() => {}}
                    type='button'
                >{t("GO BACK")}</button>
            </div>
            <Slate editor={editor} initialValue={initialValue}>
                <Editable />
            </Slate>
        </>
    );
};

export default MakeKnowhow;
