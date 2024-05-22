import {deleteElement, getAllElement, InsertElement} from "./reg.js";


export const post_department = async  (req , res) => {
    const data = req.body
    const [result , msg ] = await InsertElement(data)
    res.send({success:result , message :msg})
    res.end()
}
export const get_department = async (req, res ) => {
    const [result , data ] = await getAllElement()
    res.send({success: result , data : data})
    res.end()
}
export const delete_department = async (req , res ) => {
    let {id} = req.params
    console.log(id)
    const [result , msg ] = await deleteElement(id)
    res.send({success: result , message : msg})
    res.end()
}