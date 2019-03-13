import fs from 'fs';
import ncp from 'ncp';

const config = require('./config.json');

const appJson = require('./default/app.default.json');

const sources = '../sources/';
const factory = '../factory/1/';

appJson.expo.name = config.app.name;
appJson.expo.slug = config.app.slug;

ncp.ncp(`${sources}core`, factory, (err) => {
  if (err) throw err;

  fs.writeFile(`${factory}app.json`, JSON.stringify(appJson), (err) => { if (err) throw err; });
});
