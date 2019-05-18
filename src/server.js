const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, '../dist');
app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile('index.html', {
        root: publicPath
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));