
import express from "express";
import "./lib/db";
//import countryRoutes from "./routes/country";
import apiRoutes from "./routes/api";

process.env.TZ = 'Asia/Shanghai'; // 设置为中国上海时区
const app = express()
const port = process.env.PORT || 3333

//1.post提交json、urlencoded数据解析
app.use(express.urlencoded({ extended: false, limit: '64mb' }))
app.use(express.json({ limit: '64mb' }))
app.use(express.raw({ type: "application/vnd.custom-type" }))
app.use(express.text({ type: "text/html" }))

app.all('*', (req, res, next) => {
  console.log(`${req.headers.origin}试图访问!`)
  const allowOrigin = [
    'https://ai-1301963391.cos-website.ap-shanghai.myqcloud.com',
    'http://192.168.137.1:1002',
    'http://localhost:1002',
  ]
  // eslint-disable-next-line no-console
  console.log(`${req.headers.origin}试图访问`)
  if (allowOrigin.includes(req.headers.origin || ''))
    res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Headers', 'authorization, Content-Type')
  res.header('Access-Control-Allow-Methods', '*')
  next()
})

// app.get("/", async (req, res) => {
//   res.json({ message: "Please visit /countries to view all the countries" });
// });

app.use("/api", apiRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
