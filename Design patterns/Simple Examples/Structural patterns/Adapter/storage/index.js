import LocalStorageAdapter from './local-storage-adapter';

const storage = new LocalStorageAdapter(localStorage);

storage
    .setItem('foo', 'bar')
    .then();