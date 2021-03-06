const express = require('express');
const fs = require('fs');

const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash    = require('connect-flash');

const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const session      = require('express-session');

app.set('port', (process.env.API_PORT || 3001));


module.exports = app;