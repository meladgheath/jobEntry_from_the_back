import db from  '../dbConfigration/db.js'

export const InsertElement = async (data) => {

        try {
        const element = await db.store.create({
            data:{
                serailNumber: data.id,
                name: data.name,
                code:data.code,
                managementID:parseInt(data.managementID),
                imp_date: data.date
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
