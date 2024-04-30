const RegisterSchema = require('./register.model')

module.exports = {
    login,
    signUp
}


async function login(reqData){

    const {email, password} = reqData.body

    if(email == null || email == undefined ){
        return {status_code: 0 , message: "Please provide email and password"}
    }

    let user = await RegisterSchema.findOne({email : email})

    if(!user){
        throw {status_code:0, message: 'Customer not found'}
    }

    if(user.password !== password){
        throw {status_code:0, message: "Invalid username and password. Please try again!"}
    }
    return {login: true}
    
}

async function signUp(reqData){
    console.log(reqData.body)
    const {email, password, name} = reqData.body
    if(name == undefined || email == undefined || password == undefined ){
        throw {status_code: 0, message: "All fields are required." }
    }

    let isExist = await RegisterSchema.findOne({email: email})
    console.log(isExist)
    if(isExist){
        throw {status_code: 0, message:"Customer alredy exist. Plese login"}
    }

    let newUser = new RegisterSchema({
        name: name,
        email: email,
        password: password
    })

    await newUser.save()

    return {name : name, register:1}
}