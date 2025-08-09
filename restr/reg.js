import db from  '../dbConfigration/db.js'

export const InsertElement = async (data) => {

        try {
        const element = await db.restrictions.create({
            data:{
                resID: data.id,
                name: data.name,
                managementID:parseInt(data.managementID),
                account:data.account,
                accountName:data.accountName,
                credit: data.credit,
                debit: data.debit,
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
export const getElement = async (id) => {
    try {
        const element = await db.restrictions.findMany({where:{
            resID:id},
            select: {
                id: true ,
                resID: true,
                name: true,
                debit: true,
                credit: true,

                management_rel: {
                    select: {
                        name: true
                    }
                }
            }



        })
        return [true,element]
    }catch (err) {
        console.log(err)
        return  [false, err.message]
    } finally {
        db.$disconnect()
    }
}

export const getElementbyID = async (id) => {
    try {
        const element = await db.restrictions.findMany({where:{
                id: parseInt(id)},
            select: {
                id: true ,
                resID: true,
                name: true,
                debit: true,
                credit: true,
                account:true ,
                accountName:true,
                rest_date: true ,
                management_rel: {
                    select: {
                        id: true,
                        name: true,
                        type:true
                    }
                }
            }
        })
        return [true,element]
    }catch (err) {
        console.log(err)
        return  [false, err.message]
    } finally {
        db.$disconnect()
    }
}

export const deleteElement = async (id) => {
    try {
        const element = await db.restrictions.delete({where:{id:parseInt(id)}})
        return [true, '']
    }catch (err) {
        console.log(err)
        return [false , err.meta.cause]
    }finally {
        db.$disconnect()
    }
}

export const updateElement = async (id , data) => {
    try {
        const element = await db.restrictions.update({
            data:data,
            where:{id: parseInt(id) }
        })
        return [true , element]
    }catch (err) {
        return [false , err]
    }finally {
        db.$disconnect()
    }
}
