const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const port = 3000;

// Set up Handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        // Add any data you want to pass to the template
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login',
        // Add any data you want to pass to the template
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
