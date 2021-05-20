const {createBuilder} = require('@angular-devkit/architect');

exports.default = createBuilder(async (_, context) => {

  for (let i = 0; i < 100; i++) {
    context.logger.info(`Line ${i}`);
  }

  return {success: true};
})