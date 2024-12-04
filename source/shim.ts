import 'dom-renderer/source/polyfill';
import { ProxyAgent, setGlobalDispatcher } from 'undici';

globalThis.self = globalThis.window;

const { HTTP_PROXY } = process.env;

if (HTTP_PROXY) setGlobalDispatcher(new ProxyAgent(HTTP_PROXY));
