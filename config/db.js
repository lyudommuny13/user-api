const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://muny:Muny1212@cluster0.co29bzr.mongodb.net/expressDB?appName=Cluster0")
.then((res) => {
    console.log("Connect DB Success");
})
.catch((err) => {
    console.log(err);
})

module.exports = mongoose

