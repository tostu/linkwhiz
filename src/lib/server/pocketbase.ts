import { PUBLIC_POCKETBASE_DOMAIN } from '$env/static/public';
import PocketBase from 'pocketbase';
import type { TypedPocketBase } from '../pocketbase-types';

const pb = new PocketBase(PUBLIC_POCKETBASE_DOMAIN) as TypedPocketBase;

export default pb;
