const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public/'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
app.get('/', (req, res) => res.redirect(`http://localhost:${port}/add_account.html`));

// app.listen(port, function () {
//     console.log('Express-server started on http://localhost:3000/add_account.html');
// });
