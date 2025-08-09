import {deleteElement, getAllElements, getOneElement, InsertElement} from "./reg.js";



export const post_account = async  (req , res) => {
    const data = req.body
    const [result , msg ] = await InsertElement(data)
    res.send({success:result , message :msg})
    res.end()
}
export const get_account = async  (req , res) => {
    const [result , data ] = await getAllElements()
    res.send({success:result , data: data})
    res.end()
}
export const getOne_account = async  (req , res) => {
     let {id} = req.params
    const [result , data ] = await getOneElement(id)
    res.send({success:result , data})
    res.end()
}
export const delete_account_id = async (req, res) => {
    let {id} = req.params
    const [result , msg ] = await deleteElement(id)
    res.send({success: result , message : msg})
    res.end()
}
