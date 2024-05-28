
export const convert = (num) => {
    const word = num.toString()


    const number = [
        ["واحد","اثنين","ثلاثه","اربعه","خمسه","سته","سبعة","ثمانية","تسعة"],
        ["عشر","عشرين","ثلاثون","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون"],
    ]
    const number_2 = [
        ["مائة","مئتين","ثلاثمائه","أربعمائة","خمسمائه","ستمائه","سبعمائه","ثمانمائه","تسعمائه"],
        ["الف","الفين","ثلاث الالاف","أربع الالاف","خمس الالاف","ست الالاف","سبع الالاف","ثمان الالاف","تسع الالاف"]
    ]


    let str = ""
    const words = Array.from(word)
    let thousand_changer = false
    let million_changer = false
    let billion_changer = false

    if (words.length >= 12) {
        const billion_hundred = words.splice(0,1)
        billion_hundred.forEach((item,index)=> {
            str = str + number_2[index][item - 1] + " "
            billion_changer = true
        })
    }
    if (words.length > 11) {
    const billion_dex = words.splice(0,2)
        billion_dex.reverse().forEach((item , index)=> {
            if (number[index][item -1] !== undefined) {
            str = str + number[index][item -1 ]+ " "
            billion_changer = true
            }
        })
    }
    if (words.length > 10) {
        const billion = words.splice(0,1)
        billion.forEach((item , index)=> {
            if (number[index][item -1] !== undefined) {
            str = str + number[index][item - 1 ] + " "
            billion_changer = true
            }
        })
    }
    if (billion_changer)
        str = str +  " مليار "

    if (words.length > 9 ){
        const million_thousand = words.splice(0, 1)
        million_thousand.forEach((item , index)=> {
            if (number[index][item -1 ] !== undefined) {
            str = str + number[index][item - 1] + " "
            thousand_changer = true
            million_changer = true
            }
        })
    }
    if (thousand_changer){
        str = str + " الالاف "
        thousand_changer = !thousand_changer
    }

    if (words.length > 8){
        const million_hundred = words.splice(0,1)
        million_hundred.forEach((item , index)=> {
            if (number_2[index][item -1 ] !== undefined) {
                str = str + number_2[index][item - 1] + " "
                million_changer = true
            }
        })
    }
    if (words.length > 7) {
        const million_dec = words.splice(0, 2)
        million_dec.reverse().forEach((item , index) => {
            if (number[index][item -1 ] !== undefined) {
                str = str + number[index][item - 1] + " "
                million_changer = true
            }
        })
    }

    if (words.length > 6 ){
        const million = words.splice(0,1)
        million.forEach((item,index)=> {
            str = str + number[index][item - 1 ]+ " "
            million_changer = true
        })
    }

    if (million_changer)
        str = str + " مليون "

    if (words.length > 5) {
        const hundred_thousand = words.splice(0,1)
        hundred_thousand.forEach((item,index)=> {
            if (number_2[index][item-1] !== undefined) {
                str = str + number_2[index][item - 1] + " "
                thousand_changer = true
            }
        })
    }

    if (words.length > 4) {
        const thousands = words.splice(0, 2)

        if (thousands)
            thousands.reverse().forEach((item, index) => {
                if (number_2[index][item-1] !== undefined) {
                    str = str + number[index][item - 1] + " "
                    thousand_changer = true
                }
            })
        if (thousand_changer)
            str = str + " الف "
    }
    const last = words.splice(-2)

    let indexDown = words.length
    if (words)
        words.forEach((item, index) => {
            if (number_2[indexDown -1 ][item - 1 ] !== undefined) {
                str = str + number_2[indexDown - 1][item - 1] + " ";
                indexDown = indexDown - 1
            }
        })
    if (last)
        last.reverse().forEach((item, index) => {
            if (number[index][item - 1])
                str = str + number[index][item - 1]+  " ";
        })


    return str
}

console.log(convert(100522165215))

// export default convert