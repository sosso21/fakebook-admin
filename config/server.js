module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'Mercure1Venus2Terre3Mars4Jupiter5Saturne6Uranus7Neptune8_Kises_N_Air_Force'),
    },
  },
});
