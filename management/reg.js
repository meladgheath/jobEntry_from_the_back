import db from  '../dbConfigration/db.js'
export const InsertElement = async (data) => {
try {
    const element = await db.management.create({
        data:{
            name: data.name,
            code: data.code,
            type: data.type
        }
    })
    return [true , element]
}catch (err) {
    console.log(err)
    return  [false, "error "]
}finally {
    db.$disconnect()
}
}
export const deleteElement = async (id) => {
try {
    const element = await db.management.delete({where:{id:parseInt(id)}})
    return [true, '']
}catch (err) {
    console.log(err)
    if (err.meta?.field_name === 'foreign key')
        return  [false , 'FK']
    else
    return [false , err.meta.cause]

}finally {
    db.$disconnect()
}
}
export const updateElement = async (id , data) => {
    try {
        const element = await db.management.update({
            data:{name: data.name},
            where:{id: parseInt(id) }
        })
        return [true , element]
    }catch (err) {
        console.log(err.message)
        return [false , err]
    }finally {
        db.$disconnect()
    }
}
export const getAllElements = async () => {
    try {
        const element = await db.management.findMany({
            select:{
                id:true ,
                name:true,
                code:true
            }
        })
        return [true , element]
    } catch (err) {
        console.log(err)
        return [false , err.message]
    } finally {
        db.$disconnect()
    }
}