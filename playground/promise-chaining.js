require('../src/db/mongoose')
const User = require('../src/models/user')

/*User.findByIdAndUpdate('647709ba6dd0ac97c2d8d63b', { age: 24}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 24})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('647709ba6dd0ac97c2d8d63b' ,2 ).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})