import {InsertElement, getAllElement, deleteElement} from "./reg.js";


export const post_info = async (req, res) => {

    const data = req.body
    const [result , msg ] = await InsertElement(data)
    const d = {success: result , message:msg}
    console.log(d)
    res.send(d)
    res.end()
}
export const get_info = async (req , res ) => {
    const [result , data ] = await getAllElement()
    res.send({success: result , data:data})
    res.end()
}
export const delete_info = async (req , res ) => {
    let {id} = req.params
    console.log(req.params)
    const [result , msg ] = await deleteElement(id)
    res.send({success:result , message : msg})
    res.end()
}