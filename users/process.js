import {check, deleteElement, getAllElements, InsertElement} from "./reg.js";



export const post_users = async (req,res) => {
    let data = req.body

    let [result , msg] = await InsertElement(data)
    res.send({success:result ,message:msg})
    res.end()
}
export const login = async (req,res)=>{
    let data = req.body
    let [result , msg, info ] = await check(data)
    res.send({success: result , message : msg , data: info })
    res.end()
}
export const get_users = async (req,res) => {
    const data = req.body
    let [result, msg , info ] = await getAllElements(data)
    res.send({success:result ,message:msg, data: info})
    res.end()
}
export const delete_user = async (req,res) => {
    const id = req.params.id
    const  [result, msg] = await deleteElement(id)
    res.send({success:result ,message:msg})
    res.end()
}