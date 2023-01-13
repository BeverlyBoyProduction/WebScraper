// dataset.js
import { Dataset, Configuration } from 'crawlee';
import { ApifyClient } from 'apify-client';
import { writeFileSync } from 'fs';

Configuration.getGlobalConfig().set('purgeOnStart', false);

const { items } = await Dataset.getData();

const apifyClient = new ApifyClient({
    token: 'apify_api_tFYzflVYA5YuUbvzihuSLChI8FEPsU1ZmW2B', // Paste your API token here.
});

console.log('Creating a new dataset on the Apify platform');
const remoteDataset = await apifyClient.datasets().getOrCreate();
const datasetClient = apifyClient.dataset(remoteDataset.id);

console.log('Uploading dataset items to the newly created dataset');
await datasetClient.pushItems(items);

console.log('Downloading an Excel file and saving it to disk');
const xlsx = await datasetClient.downloadItems('xlsx');
writeFileSync('dataset.xlsx', xlsx);