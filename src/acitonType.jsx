const WRITETODO = "WRITETODO"
const SAVETODO = "SAVETODO"
const REMOVETODO = "REMOVETODO"

export const writeHandler = (val) => ({ type: WRITETODO, nextValue: val })
export const saveHandler = () => ({ type: SAVETODO })
export const removeHandler = () => ({type: REMOVETODO})




