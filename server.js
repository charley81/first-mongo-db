const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use('/api/blogs', require('./routes/routes-blog'))

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
