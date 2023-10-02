const passport = require('passport');

const LocalStrategy = require('./strategies/local.strategy');
const JwtStrategy = require('./strategies/jwt.strategy');
const GQLLocalStrategy = require('./strategies/local-gql.strategy');

passport.use(LocalStrategy);
passport.use(JwtStrategy);
passport.use(GQLLocalStrategy);
