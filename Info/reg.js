import db from '../dbConfigration/db.js'

export const InsertElement = async (data) => {
    try {
        const element = await db.info_man.create({
            data: {
                name: data.name,
                managementID: parseInt(data.managementID) ,
                department_num: parseInt(data.department_num) ,
                geographic_locations: parseInt(data.geographic_locations)
            }
        })
        return [true , '']
    } catch (err) {
        console.log(err.message)
        return [false , err.message]
    } finally {
        db.$disconnect()
    }
}
export const   getAllElement = async () => {
    try {
        const element = await db.info_man.findMany({
            select:{
                id:true,
                name:true,
                department_num:true,
                geographic_locations:true,
                management:{
                    select:{
                        name:true
                    }
                }
            }
        })
        return [true , element]
    }catch (err){
        console.log(err.message)
        return [false , err.message ]
    } finally {
        db.$disconnect()
    }
}
export const deleteElement = async  (id ) => {
    try{
        const element = await db.info_man.delete({where:{
            id:parseInt(id)
            } })
        return [true , element]
    } catch (err) {
        console.log(err.message)
        return [false , err.message]
    } finally {
        db.$disconnect()
    }
}