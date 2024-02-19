const express=require('express');
const app = express ();
const dbconnect=require('./db.js')
app.use(express.json());
dbconnect();

app.use('/api/auth',require('./Routes/auth'))









const port =process.env.PORT || 3000;
app.listen(port, () => {
  console.log("http://127.0.0.1:3000/");
});