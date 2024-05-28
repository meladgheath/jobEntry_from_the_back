import db from  '../dbConfigration/db.js'

export const InsertElement = async (data) => {
try {
    const element = await db.users.create({
        data:{
           name: data.name,
            username: data.username,
            password:data.password,
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
export const getAllElements = async () => {
    try {
        const elements = await db.users.findMany()
        return [true , '' , elements]
    }catch (err) {
        console.log(err)
        return [false, err.message]
    } finally {
        db.$disconnect()
    }
}

export const check = async (data)=> {
    console.log(data)
    console.log((await checkUserName(data.username)))

    if (!(await checkUserName(data.username)))
            return [false , 'UNE']
    const [chkpass , element ] = await checkPassowrd(data.username , data.password)
        if (!(chkpass))
            return [false , 'PSE']
    console.log(element)
        return [true , 'correct' , element]
}
export const checkUserName = async (username) => {

    try {
        const element = await db.users.findMany({
            where :{
                username:username
            }
        })
        return (element && element.length > 0)
    }catch (err) {
        return [false , err.message]
    }finally {
        db.$disconnect()
    }
}
export const checkPassowrd = async (username , password)=> {
    try {
        const element = await db.users.findMany({
            where : {username:username , password:password }
        })
        return [(element && element.length > 0) , element[0]]
    }
    catch (err) {
        return [false , err.message]
    }finally {
        db.$disconnect()
    }
}
