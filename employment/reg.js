import db from '../dbConfigration/db.js'
export const InsertElement = async (employment) => {
    try {
        const element = await db.employment.create({
            data: {
                id: parseInt(employment.id),
                name: employment.name ,
                nationalID: parseInt(employment.nationalID) ,
                img: employment.img
            }
        })
        return [true , '']
    }catch (err) {
        console.log(err.message)
        return [false , err.message]
    }finally {
        db.$disconnect()
    }
}
export const getElement = async (id) => {
    try {
        const element = await db.employment.findMany({
            where:{id:parseInt(id)}
        })

        return [true , element]
    }catch (err) {
        return [false , err.message]
    } finally {
        db.$disconnect()
    }
}
