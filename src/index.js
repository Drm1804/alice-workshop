const micro = require('micro');

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://alice-dev.vitalets.xyz');
  const {request, session, version} = await micro.json(req);
  const response = {
    text: session.new ? 'Добро пожаловать' : `Вы сказали: ${request.command}`,
    end_session: false
  };
  return {response, session, version};
};
