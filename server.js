
const exp = require('express');

const path=require("path")
const app=exp();
app.use(exp.static(path.join(__dirname,"./dist/collegeinsight/")))



const userApi=require("./APIS/list")
app.use('/user',userApi)



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
      if (err) {
          res.status(500).send(err)
      }
  })
})


//handle invalid path
app.use((req, res, next) => {
  res.send({ message: `path ${req.url} is invalid` })
})

//handle errors
app.use((err, req, res, next) => {
  console.log(err)
  res.send({ message: err.message })

})

  //assign port
const port=4000
app.listen(port,()=>console.log(`server is listening on port ${port}`))
