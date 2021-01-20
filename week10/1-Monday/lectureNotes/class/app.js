let db = require('./models')
//we have to access the model file( in this case its user)


// db.user.findAll()
// .then(records =>{
//     console.log(records);
//     records.forEach(record =>{
//         console.log(record.id, record.fisrtName, record.lastName);
//     })
// })

// db.user.update({} ,{})
// db.user.update({ id:2},{where:{id:7}})
// .then(updatedRecord =>{
//     console.log(updatedRecord);
// })
// db.user.destroy({where:{id:12}})
// .then(numOfRowsDeleted =>{
//     if(numOfRowsDeleted >= 1){
//         console.log(`${numOfRowsDeleted} rows have been deleted from database`);
//     }

// })

db.blogs.findAll({
    where:{userID: 2},
    include: [{
        model: db.user,
        require: true,
    }]
})
.then(records => {
    //these return an arrray of objects
    records.forEach(blog =>{
        console.log(blog.title, blog.user.fisrtName, blog.user.lastName);
    })
})
// db.user.findByPk(1)
// .then(user =>{
//     console.log(user.fisrtName, user.lastName);
// })

// db.user.findAll({where:{lastName: 'Meyers'}})
// .then(records =>{
//     //this will be an array of objects.....
//     console.log(records[0].fisrtName, records[0].lastName);
// })

// db.user.create({
//     fisrtName: 'Andrea',
//     lastName:'Meyer',
//     email:'andrea@dc.com'
// })

// db.user.create({
//     fisrtName:'Joe',
//     lastName:"Stocks",
//     email:'joe@dc.com'
// })

// db.user.create({
//     fisrtName:'Adam',
//     lastName:"MacKinnon",
//     email:'Adam@dc.com'
// })
// db.user.create({
//     fisrtName:'Cedael',
//     lastName:'White',
//     email:'Cedal@dc.com'
// })