import {deleteElement, getAllElements, InsertElement, updateElement} from "./reg.js";

export const post_management = async (req,res) => {
    let data = req.body
    let [result , msg] = await InsertElement(data)
    res.send({success:result ,message:msg})
    res.end()
}

export const delete_manangement = async (req,res) => {
    let {id} = req.params
    let [result , msg ] = await deleteElement(id)
    res.send({success: result , message:msg})
    res.end()
}
export const put_management = async (req,res) => {
    let body = req.body
    let {id} = req.params

    let [result , msg ] = await updateElement(id , body)
    res.send({success: result , message: msg})
    res.end()
}
export const get_management = async (req,res) => {
    let [result , data ] = await getAllElements()
    res.send({success: result , data: data})
    res.end()
}