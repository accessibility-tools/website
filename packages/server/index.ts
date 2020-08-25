import express from 'express';
import nextApp from '@webchecker/client';

import routes from './src/routes';

let port: any = process.env.PORT || 5000;

async function main() {
  try {
    const app = express();

    await bootstrapClientApp(app);

    app.listen(port, (err) => {
      if (err) throw err;
      console.log(`[ server ] ready on port ${port}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

async function bootstrapClientApp(expressApp) {
  await nextApp.prepare();

  expressApp.get('/api/report', routes.report);
  expressApp.get('*', nextApp.getRequestHandler());
}

main();
