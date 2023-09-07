require('../src/db/mongoose')
const Task = require('../src/models/task')
const { count } = require('../src/models/user')

/*Task.findByIdAndDelete('647715d40207cea31e04dd6e').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((results) => {
    console.log(results)
}).catch((e) => {
    console.log(e)
})*/

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('647ed802cf535fcf2bca386e').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})