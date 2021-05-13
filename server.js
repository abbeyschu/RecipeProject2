// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
    // Tells our session to use cookies

  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Sets up the routes
app.use (express.static(__dirname+"/public"));
app.use(express.json());
app.use (express.urlencoded ({extended:true}));

// Handlebars setting
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    extname:'hbs',
    defaultLayout: 'index',

}));

//Landing page
app.get ('/', (req, res)=>{
    res.render ("main");
})

// Starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  });

