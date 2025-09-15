
import {getElement, InsertElement} from "./reg.js";

export const post_tas = async (req, res) => {
    let data = req.body
    let [result , msg] = await InsertElement(data)
    res.send({success:result ,message:msg})
    res.end()
}

export const getByresID = async (req , res ) => {
    let {id} = req.params
    let [result , data ] = await getElement(id)
    res.send({success:result ,data})
    res.end()
}
/*

export const get_status_in_id = async (req , res ) => {
    let {id} = req.params
    let [result, data ] = await getElementbyStatusAndID(id)
    res.send({success:result ,data})
    res.end()
}
export const get_restr_ID_id = async (req , res ) => {
    let {id} = req.params

    let [result , data ] = await getElementbyID(id)
    res.send({success:result ,data})
    res.end()
}
export const delete_restr = async (req,res) => {
    let {id} = req.params
    console.log(id)
    let [result , msg ] = await deleteElement(id)
    res.send({success: result , message:msg})
    res.end()
}
export const update_restr = async (req,res) => {
    let data = req.body
    let {id} = req.params
    let [result , msg] = await updateElement(id, data)
    res.send ({success:result ,message:msg , data})
    res.end()
}*/
