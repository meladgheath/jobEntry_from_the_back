import {getElement, InsertElement} from "./reg.js";


export const post_employment =  async (req , res ) => {

    let data = req.body
    const [result , msg ] = await InsertElement(data)

    res.send({success: result , message:msg})
    res.end()
}

export const get_employment_id = async (req , res ) => {
    let {id} = req.params

    console.log('here the id ', id )

    const [result , d ] = await getElement(id)

    const data = d.map(row => ({
        id:row.id ,
        name: row.name ,
        nationalID: row.nationalID.toString(),
        img: row.img

    }))

    res.send({success: result , data : data})
    res.end()
}