import express from 'express';
import nextApp from '@webchecker/client';

import routes from './src/routes';

const { PORT } = process.env;

async function main() {
  try {
    const app = express();

    await bootstrapClientApp(app);

    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`[ server ] ready on port ${PORT}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

async function bootstrapClientApp(expressApp) {
  await nextApp.prepare();

  expressApp.get('/report', routes.report);
  expressApp.get('*', nextApp.getRequestHandler());
}

main();
