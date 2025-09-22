
export const convert = (num) => {
const word = num.toString()


const number = [
    ["واحد","اثنين","ثلاثه","اربعه","خمسه","سته","سبعة","ثمانية","تسعة"],
    ["عشر","عشرون","ثلاثون","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون"],
    ["أحد" , "اثنا"]
]
    const number_2 = [
        ["مائة","مائتين","ثلاثمائه","أربعمائة","خمسمائه","ستمائه","سبعمائه","ثمانمائه","تسعمائه"],
        ["الف","الفين","ثلاث الالاف","أربع الالاف","خمس الالاف","ست الالاف","سبع الالاف","ثمان الالاف","تسع الالاف"]
    ]
    const number_3 = [
        ["مليون","مليونان","ثلاث ملايين","أربعة ملايين","خمسة ملايين","ستة ملايين","سبعة ملايين","ثمان ملايين","تسع ملايين"]
    ]

    let str = ""
    const words = Array.from(word)
    let twoDigitsInMilloinToggal = true
    let milloinchanger = 0 ;
    let andMillion = false

let hunderMillionschanger = false ;
if (words.length > 8 ){
    const hunderMillion = words.splice(0,1)
    hunderMillion.forEach((item,index)=> {
        if (number_2[index][item-1] !== undefined) {
            str = str + number_2[index][item - 1] + " "
            hunderMillionschanger = true
             }
        andMillion =true
    })
}
let otherword = ""
if (words.length > 7) {
        const tenMillion = words.splice(0, 1)
        tenMillion.forEach((item,index )=> {

            if(number[index+1][item-1] !== undefined)
            otherword = otherword + number[index+1][item - 1]+" "
            else
                twoDigitsInMilloinToggal = false

            if (index+1 === 1 && item-1 === 0)
                twoDigitsInMilloinToggal = true
            else
                twoDigitsInMilloinToggal = false

            console.log("the two dig " + twoDigitsInMilloinToggal)
            milloinchanger++;
        })
    andMillion = true
    }
    if (words.length > 6 ){
        const million = words.splice(0,1)
        million.forEach((item,index)=> {
            if(number[index][item-1])
                // if (milloinchanger === 0)
                if (twoDigitsInMilloinToggal)
                    otherword = number[index+2][item-1 ] +" " + otherword
            else
            otherword =  number[index][item - 1 ]+ " " + otherword

        })
        andMillion = true
          }
    console.log(str)
    console.log("other word "+otherword)
    if (otherword.length > 0 )
    str = str +  " و " + otherword
    if (andMillion)
    str = str + " مليون "

    let changer = 0
    if (words.length > 5) {
        const hundred_thousand = words.splice(0,1)
        hundred_thousand.forEach((item,index)=> {
            if (number_2[index][item-1] !== undefined) {
                str = str + number_2[index][item - 1] + " "
                changer++
            }
        })
    }

    if (words.length > 4) {
        const thousands = words.splice(0, 2)

        if (thousands)
            thousands.reverse().forEach((item, index) => {
                if (number_2[index][item-1] !== undefined) {
                    str = str + number[index][item - 1] + " "
                    changer++
                }
            })
        if (changer != 0)
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
    if (last){
        last.reverse().forEach((item, index) => {
            if (number[index][item - 1]) {

                if (str.length>0 && number[index][item - 1] !== number[1][0])
                    str = str + " و "

                str = str + number[index][item - 1] + " ";
            }
        })
    }   
    return str
}
// export default convert