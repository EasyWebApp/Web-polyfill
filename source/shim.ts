import { Window } from 'happy-dom';
import { ProxyAgent, setGlobalDispatcher } from 'undici';

const window = new Window();

for (const key of [
    'window',
    'XMLSerializer',
    'DOMParser',
    'NodeFilter',
    'Text',
    'Document',
    'document',
    'ShadowRoot',
    'Element',
    'HTMLElement',
    'HTMLUnknownElement'
])
    Reflect.set(globalThis, key, Reflect.get(window, key));

const { HTTP_PROXY } = process.env;

if (HTTP_PROXY) setGlobalDispatcher(new ProxyAgent(HTTP_PROXY));
