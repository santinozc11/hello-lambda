exports.handler = async () => {
  return { statusCode: 200, body: JSON.stringify({ msg: "Hello v2 desde pipeline" }) };
};
