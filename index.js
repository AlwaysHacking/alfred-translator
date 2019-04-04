const alfy = require('alfy');
const { google } = require('translation.js');

(async () => {
  const input = alfy.input.replace(/(\r\n|\n|\r)/gm, ' ');
  const data = await google.translate(input);

  if (!data.result) {
    alfy.error(new Error(`API request failed`));
    return;
  }

  const result = data.result.join('');
  const link = data.link;

  const output = [
    {
      title: result,
      arg: link,
      text: {
        copy: result,
        largetype: result,
      }
    }
  ];

  alfy.output(output);
})();
