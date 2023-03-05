import express from "express";
// const express = require('express')
const app = express();

// 在这里，调用 express.static() 方法，快速的对外提供静态资源
// app.use('/files', express.static('./*'))
app.use(express.static('D:\\codeAdministration\\gitee\\test\\wordReserve'));

app.listen(8080, () => {
    console.log('express server running at http://127.0.0.1');
});