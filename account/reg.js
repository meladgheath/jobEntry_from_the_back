import db from '../dbConfigration/db.js'


export const InsertElement =  async  (data) => {
    try {

        const element = await db.accountNumber.create({
            data: {
                name: data.name,
                number: data.number,
                detail: data.detail ,
            }
        })
        return [true , element]
    }catch (err) {
        console.log(err)
        return [false , err.message]
    } finally {
        db.$disconnect()
    }
}

export const getAllElements = async () => {
    try {
        const elements = await db.accountNumber.findMany()
        return [true , elements]
    }catch (err) {
        console.log(err)
        return [false , err.message]
    }finally {
        db.$disconnect()
    }
}
export const deleteElement = async (id) => {
    try {
        const element = await db.accountNumber.delete({
            where:{id:parseInt(id)}
        })
        return [true , element]
    }catch (err) {
        console.log(err)
        return [false , err.message]
    } finally {
        db.$disconnect()
    }
}