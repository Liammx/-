// let a =  [4,54,48,59,68,59,55,47,99,36,99,85,49,9,9,94,85]
// let b = [4,87,98,55,698,99,63,99,58,9,9,4,4,4,4]

// let birxil = []

// for( let i = 0; i < a.length; i++) {
//     // console.log(a[i])
//     for (let k = 0; k < b.length; k++) {
//         if(a[i] === b[k]) {
//             birxil.push(a[i])
//         }
//     }
// }

// console.log(birxil);

let names = ["Alisa" , "Anisa" , "Ilhom" , "Jahongir" , "Javohir" , "Jasur" , "Samir" , "Kamola" , "Dilnoz", "Rano", "Lalitto", "Lola", "Dilbar", "Diyora" , "Shaxrizoda" , "Sarvinoz" , "Shaxina" , "Sitora"]
let users = [
    {
        names:"Alisa",
        money:3000,
        gender:"female"
    },
    {
        names:"Anisa",
        money:500,
        gender:"female"
    },
    {
        names:"Jahongir",
        money:1000,
        gender:"male"
    },
    {
        names:"Javohir",
        money:2000,
        gender:"male"
    },
    {
        names:"Jasur",
        money:2500,
        gender:"male"
    },
    {
        names:"Samir",
        money:1500,
        gender:"male"
    },
    {
        names:"Kamola",
        money:2500,
        gender:"female"
    },
    {
        names:"Dilnoz",
        money:5200,
        gender:"female"
    },
    {
        names:"Rano",
        money:1800,
        gender:"female"
    },
]

let genders = {
    male:0,
    female:0
}
let total = 0



    for( let i = 0; i < users.length; i++) {
        console.log(users[i])
        if( users[i].gender === 'female' ) {
            genders.female = ++ genders.female
        } else {
            genders.male = ++ genders.male
        }
    total+= users[i].money
    }
    console.log(genders)
    console.log(total)



