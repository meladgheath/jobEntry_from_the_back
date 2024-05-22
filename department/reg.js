import db from '../dbConfigration/db.js'
import express from "express";

export const InsertElement =  async  (data) => {
    try {

        const element = await db.department.create({
            data: {
            name: data.name,
            managmentID: data.managementID ,
        },
    })
        return [true , element]
    }catch (err) {
        console.log(err)

        return [false , err.message]
    } finally {
        db.$disconnect()
    }
}
export const getAllElement = async () => {
    try {
        const element = await db.department.findMany({
            select:{
                id:true,
                name:true,

                management:{
                    select:{
                        id:true,
                        name:true
                    }
                }
            }
        })
        return [true , element]
    }catch (err) {
        console.log(err.message)
        return [false , err.message]
    } finally {
        db.$disconnect()
    }
}
export const deleteElement = async (id) => {
    try {
        const element = await db.department.delete({where:{id:parseInt(id)}})
        return [true , element]
    }catch (err ) {
        console.log(err.message)
        return [false , err.message ]
    } finally {
        db.$disconnect()
    }
}