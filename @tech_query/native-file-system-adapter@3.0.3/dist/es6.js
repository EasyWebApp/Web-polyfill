
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

      var $parcel$global =
        typeof globalThis !== 'undefined'
          ? globalThis
          : typeof self !== 'undefined'
          ? self
          : typeof window !== 'undefined'
          ? window
          : typeof global !== 'undefined'
          ? global
          : {};
  
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire6d18"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire6d18"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("dnVHC", function(module, exports) {
module.exports = import("./downloader.1eafb193.js").then(()=>parcelRequire("kY1Ah"));

});

parcelRegister("avxPz", function(module, exports) {
module.exports = import("./sandbox.1e9739d1.js").then(()=>parcelRequire("4Oi9K"));

});

parcelRegister("kfdAE", function(module, exports) {

$parcel$export(module.exports, "default", () => $ebcfc017887e50b3$export$2e2bcd8739ae039);
const $ebcfc017887e50b3$var$config = {
    ReadableStream: globalThis.ReadableStream,
    WritableStream: globalThis.WritableStream,
    TransformStream: globalThis.TransformStream,
    DOMException: globalThis.DOMException,
    Blob: globalThis.Blob,
    File: globalThis.File
};
var $ebcfc017887e50b3$export$2e2bcd8739ae039 = $ebcfc017887e50b3$var$config;

});

parcelRegister("kNkHD", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "FileSystemDirectoryHandle", () => $f2387162918c5f58$export$80c69d2381792bb3);
$parcel$export(module.exports, "default", () => $f2387162918c5f58$export$2e2bcd8739ae039);

var $pPxqM = parcelRequire("pPxqM");

var $gHoWX = parcelRequire("gHoWX");
const { GONE: $f2387162918c5f58$var$GONE, MOD_ERR: $f2387162918c5f58$var$MOD_ERR } = (0, $gHoWX.errors);
const $f2387162918c5f58$var$kAdapter = Symbol("adapter");



class $f2387162918c5f58$export$80c69d2381792bb3 extends (0, $pPxqM.default) {
    /** @type {FileSystemDirectoryHandle} */ [$f2387162918c5f58$var$kAdapter];
    constructor(adapter){
        super(adapter);
        this[$f2387162918c5f58$var$kAdapter] = adapter;
    }
    /**
   * @param {string} name Name of the directory
   * @param {object} [options]
   * @param {boolean} [options.create] create the directory if don't exist
   * @returns {Promise<FileSystemDirectoryHandle>}
   */ async getDirectoryHandle(name, options = {}) {
        if (name === "") throw new TypeError(`Name can't be an empty string.`);
        if (name === "." || name === ".." || name.includes("/")) throw new TypeError(`Name contains invalid characters.`);
        options.create = !!options.create;
        const handle = await this[$f2387162918c5f58$var$kAdapter].getDirectoryHandle(name, options);
        return new $f2387162918c5f58$export$80c69d2381792bb3(handle);
    }
    /** @returns {AsyncGenerator<[string, FileSystemHandle | FileSystemDirectoryHandle]>} */ async *entries() {
        const { FileSystemFileHandle: FileSystemFileHandle } = await Promise.resolve((parcelRequire("iz0Bl")));
        for await (const [_, entry] of this[$f2387162918c5f58$var$kAdapter].entries())yield [
            entry.name,
            entry.kind === "file" ? new FileSystemFileHandle(entry) : new $f2387162918c5f58$export$80c69d2381792bb3(entry)
        ];
    }
    /** @deprecated use .entries() instead */ async *getEntries() {
        const { FileSystemFileHandle: FileSystemFileHandle } = await Promise.resolve((parcelRequire("iz0Bl")));
        console.warn("deprecated, use .entries() instead");
        for await (let entry of this[$f2387162918c5f58$var$kAdapter].entries())yield entry.kind === "file" ? new FileSystemFileHandle(entry) : new $f2387162918c5f58$export$80c69d2381792bb3(entry);
    }
    /**
   * @param {string} name Name of the file
   * @param {object} [options]
   * @param {boolean} [options.create] create the file if don't exist
   */ async getFileHandle(name, options = {}) {
        const { FileSystemFileHandle: FileSystemFileHandle } = await Promise.resolve((parcelRequire("iz0Bl")));
        if (name === "") throw new TypeError(`Name can't be an empty string.`);
        if (name === "." || name === ".." || name.includes("/")) throw new TypeError(`Name contains invalid characters.`);
        options.create = !!options.create;
        const handle = await this[$f2387162918c5f58$var$kAdapter].getFileHandle(name, options);
        return new FileSystemFileHandle(handle);
    }
    /**
   * @param {string} name
   * @param {object} [options]
   * @param {boolean} [options.recursive]
   */ async removeEntry(name, options = {}) {
        if (name === "") throw new TypeError(`Name can't be an empty string.`);
        if (name === "." || name === ".." || name.includes("/")) throw new TypeError(`Name contains invalid characters.`);
        options.recursive = !!options.recursive // cuz node's fs.rm require boolean
        ;
        return this[$f2387162918c5f58$var$kAdapter].removeEntry(name, options);
    }
    async resolve(possibleDescendant) {
        if (await possibleDescendant.isSameEntry(this)) return [];
        const openSet = [
            {
                handle: this,
                path: []
            }
        ];
        while(openSet.length){
            let { handle: current, path: path } = openSet.pop();
            for await (const entry of current.values()){
                if (await entry.isSameEntry(possibleDescendant)) return [
                    ...path,
                    entry.name
                ];
                if (entry.kind === "directory") openSet.push({
                    handle: entry,
                    path: [
                        ...path,
                        entry.name
                    ]
                });
            }
        }
        return null;
    }
    async *keys() {
        for await (const [name] of this[$f2387162918c5f58$var$kAdapter].entries())yield name;
    }
    async *values() {
        for await (const [_, entry] of this)yield entry;
    }
    [Symbol.asyncIterator]() {
        return this.entries();
    }
}
Object.defineProperty($f2387162918c5f58$export$80c69d2381792bb3.prototype, Symbol.toStringTag, {
    value: "FileSystemDirectoryHandle",
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties($f2387162918c5f58$export$80c69d2381792bb3.prototype, {
    getDirectoryHandle: {
        enumerable: true
    },
    entries: {
        enumerable: true
    },
    getFileHandle: {
        enumerable: true
    },
    removeEntry: {
        enumerable: true
    }
});
if (globalThis.FileSystemDirectoryHandle) {
    const proto = globalThis.FileSystemDirectoryHandle.prototype;
    proto.resolve = async function resolve(possibleDescendant) {
        if (await possibleDescendant.isSameEntry(this)) return [];
        const openSet = [
            {
                handle: this,
                path: []
            }
        ];
        while(openSet.length){
            let { handle: current, path: path } = openSet.pop();
            for await (const entry of current.values()){
                if (await entry.isSameEntry(possibleDescendant)) return [
                    ...path,
                    entry.name
                ];
                if (entry.kind === "directory") openSet.push({
                    handle: entry,
                    path: [
                        ...path,
                        entry.name
                    ]
                });
            }
        }
        return null;
    };
    // Safari allows us operate on deleted files,
    // so we need to check if they still exist.
    // Hope to remove this one day.
    async function ensureDoActuallyStillExist(handle) {
        const root = await navigator.storage.getDirectory();
        const path = await root.resolve(handle);
        if (path === null) throw new DOMException(...$f2387162918c5f58$var$GONE);
    }
    const entries = proto.entries;
    proto.entries = async function*() {
        await ensureDoActuallyStillExist(this);
        yield* entries.call(this);
    };
    proto[Symbol.asyncIterator] = async function*() {
        yield* this.entries();
    };
    const removeEntry = proto.removeEntry;
    proto.removeEntry = async function(name, options = {}) {
        return removeEntry.call(this, name, options).catch(async (err)=>{
            const unknown = err instanceof DOMException && err.name === "UnknownError";
            if (unknown && !options.recursive) {
                const empty = (await entries.call(this).next()).done;
                if (!empty) throw new DOMException(...$f2387162918c5f58$var$MOD_ERR);
            }
            throw err;
        });
    };
}
var $f2387162918c5f58$export$2e2bcd8739ae039 = $f2387162918c5f58$export$80c69d2381792bb3;

});
parcelRegister("pPxqM", function(module, exports) {

$parcel$export(module.exports, "default", () => $04da505427c183ab$export$2e2bcd8739ae039);
const $04da505427c183ab$var$kAdapter = Symbol("adapter");
/**
 * @typedef {Object} FileSystemHandlePermissionDescriptor
 * @property {('read'|'readwrite')} [mode='read']
 */ class $04da505427c183ab$export$90d155f9f7c2d644 {
    /** @type {FileSystemHandle} */ [$04da505427c183ab$var$kAdapter];
    /** @type {string} */ name;
    /** @type {('file'|'directory')} */ kind;
    /** @param {FileSystemHandle & {writable}} adapter */ constructor(adapter){
        this.kind = adapter.kind;
        this.name = adapter.name;
        this[$04da505427c183ab$var$kAdapter] = adapter;
    }
    /** @param {FileSystemHandlePermissionDescriptor} descriptor */ async queryPermission(descriptor = {}) {
        const { mode: mode = "read" } = descriptor;
        const handle = this[$04da505427c183ab$var$kAdapter];
        if (handle.queryPermission) return handle.queryPermission({
            mode: mode
        });
        if (mode === "read") return "granted";
        else if (mode === "readwrite") return handle.writable ? "granted" : "denied";
        else throw new TypeError(`Mode ${mode} must be 'read' or 'readwrite'`);
    }
    async requestPermission({ mode: mode = "read" } = {}) {
        const handle = this[$04da505427c183ab$var$kAdapter];
        if (handle.requestPermission) return handle.requestPermission({
            mode: mode
        });
        if (mode === "read") return "granted";
        else if (mode === "readwrite") return handle.writable ? "granted" : "denied";
        else throw new TypeError(`Mode ${mode} must be 'read' or 'readwrite'`);
    }
    /**
   * Attempts to remove the entry represented by handle from the underlying file system.
   *
   * @param {object} options
   * @param {boolean} [options.recursive=false]
   */ async remove(options = {}) {
        await this[$04da505427c183ab$var$kAdapter].remove(options);
    }
    /**
   * @param {FileSystemHandle} other
   */ async isSameEntry(other) {
        if (this === other) return true;
        if (!other || typeof other !== "object" || this.kind !== other.kind || !other[$04da505427c183ab$var$kAdapter]) return false;
        return this[$04da505427c183ab$var$kAdapter].isSameEntry(other[$04da505427c183ab$var$kAdapter]);
    }
}
Object.defineProperty($04da505427c183ab$export$90d155f9f7c2d644.prototype, Symbol.toStringTag, {
    value: "FileSystemHandle",
    writable: false,
    enumerable: false,
    configurable: true
});
// Safari safari doesn't support writable streams yet.
if (globalThis.FileSystemHandle) globalThis.FileSystemHandle.prototype.queryPermission ??= function(descriptor) {
    return "granted";
};
var $04da505427c183ab$export$2e2bcd8739ae039 = $04da505427c183ab$export$90d155f9f7c2d644;

});

parcelRegister("gHoWX", function(module, exports) {

$parcel$export(module.exports, "errors", () => $c2840401bfd64960$export$30f3b02011db23c0);
$parcel$export(module.exports, "config", () => $c2840401bfd64960$export$e506a1d27d1eaa20);
$parcel$export(module.exports, "fromDataTransfer", () => $c2840401bfd64960$export$34af8373a76882c2);
$parcel$export(module.exports, "getDirHandlesFromInput", () => $c2840401bfd64960$export$7d17e35d81e093f2);
$parcel$export(module.exports, "getFileHandlesFromInput", () => $c2840401bfd64960$export$45ac616e835cfe89);
const $c2840401bfd64960$export$30f3b02011db23c0 = {
    INVALID: [
        "seeking position failed.",
        "InvalidStateError"
    ],
    GONE: [
        "A requested file or directory could not be found at the time an operation was processed.",
        "NotFoundError"
    ],
    MISMATCH: [
        "The path supplied exists, but was not an entry of requested type.",
        "TypeMismatchError"
    ],
    MOD_ERR: [
        "The object can not be modified in this way.",
        "InvalidModificationError"
    ],
    SYNTAX: (m)=>[
            `Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. ${m}`,
            "SyntaxError"
        ],
    SECURITY: [
        "It was determined that certain files are unsafe for access within a Web application, or that too many calls are being made on file resources.",
        "SecurityError"
    ],
    DISALLOWED: [
        "The request is not allowed by the user agent or the platform in the current context.",
        "NotAllowedError"
    ]
};
const $c2840401bfd64960$export$e506a1d27d1eaa20 = {
    writable: globalThis.WritableStream
};



async function $c2840401bfd64960$export$34af8373a76882c2(entries) {
    console.warn("deprecated fromDataTransfer - use `dt.items[0].getAsFileSystemHandle()` instead");
    const [memory, sandbox, fs] = await Promise.all([
        (parcelRequire("7P0af")),
        (parcelRequire("avxPz")),
        Promise.resolve((parcelRequire("kNkHD")))
    ]);
    const folder = new memory.FolderHandle("", false);
    folder._entries = entries.map((entry)=>entry.isFile ? new sandbox.FileHandle(entry, false) : new sandbox.FolderHandle(entry, false));
    return new fs.FileSystemDirectoryHandle(folder);
}


async function $c2840401bfd64960$export$7d17e35d81e093f2(input) {
    const { FolderHandle: FolderHandle, FileHandle: FileHandle } = await (parcelRequire("7P0af"));
    const { FileSystemDirectoryHandle: FileSystemDirectoryHandle } = await Promise.resolve((parcelRequire("kNkHD")));
    const files = Array.from(input.files);
    const rootName = files[0].webkitRelativePath.split("/", 1)[0];
    const root = new FolderHandle(rootName, false);
    files.forEach((file)=>{
        const path = file.webkitRelativePath.split("/");
        path.shift();
        const name = path.pop();
        const dir = path.reduce((dir, path)=>{
            if (!dir._entries[path]) dir._entries[path] = new FolderHandle(path, false);
            return dir._entries[path];
        }, root);
        dir._entries[name] = new FileHandle(file.name, file, false);
    });
    return new FileSystemDirectoryHandle(root);
}


async function $c2840401bfd64960$export$45ac616e835cfe89(input) {
    const { FileHandle: FileHandle } = await (parcelRequire("7P0af"));
    const { FileSystemFileHandle: FileSystemFileHandle } = await Promise.resolve((parcelRequire("iz0Bl")));
    return Array.from(input.files).map((file)=>new FileSystemFileHandle(new FileHandle(file.name, file, false)));
}

});
parcelRegister("7P0af", function(module, exports) {
module.exports = import("./memory.c7fc522d.js").then(()=>parcelRequire("6KLAJ"));

});

parcelRegister("iz0Bl", function(module, exports) {

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "FileSystemFileHandle", () => $d83bf6496e8d63a6$export$db2751aad7d8e0f3);
$parcel$export(module.exports, "default", () => $d83bf6496e8d63a6$export$2e2bcd8739ae039);

var $pPxqM = parcelRequire("pPxqM");

var $6H5Ie = parcelRequire("6H5Ie");
parcelRequire("cKEn5");
const $d83bf6496e8d63a6$var$kAdapter = Symbol("adapter");
class $d83bf6496e8d63a6$export$db2751aad7d8e0f3 extends (0, $pPxqM.default) {
    /** @type {FileSystemFileHandle} */ [$d83bf6496e8d63a6$var$kAdapter];
    constructor(adapter){
        super(adapter);
        this[$d83bf6496e8d63a6$var$kAdapter] = adapter;
    }
    /**
   * @param  {Object} [options={}]
   * @param  {boolean} [options.keepExistingData]
   * @returns {Promise<FileSystemWritableFileStream>}
   */ async createWritable(options = {}) {
        return new (0, $6H5Ie.default)(await this[$d83bf6496e8d63a6$var$kAdapter].createWritable(options));
    }
    /**
   * @returns {Promise<File>}
   */ async getFile() {
        return this[$d83bf6496e8d63a6$var$kAdapter].getFile();
    }
}
Object.defineProperty($d83bf6496e8d63a6$export$db2751aad7d8e0f3.prototype, Symbol.toStringTag, {
    value: "FileSystemFileHandle",
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties($d83bf6496e8d63a6$export$db2751aad7d8e0f3.prototype, {
    createWritable: {
        enumerable: true
    },
    getFile: {
        enumerable: true
    }
});
var $d83bf6496e8d63a6$export$2e2bcd8739ae039 = $d83bf6496e8d63a6$export$db2751aad7d8e0f3;

});
parcelRegister("6H5Ie", function(module, exports) {

$parcel$export(module.exports, "default", () => $4dfb309940096288$export$2e2bcd8739ae039);

var $kfdAE = parcelRequire("kfdAE");
const { WritableStream: $4dfb309940096288$var$WritableStream } = (0, $kfdAE.default);
class $4dfb309940096288$export$fea83bdfcd3f94c extends $4dfb309940096288$var$WritableStream {
    constructor(writer){
        super(writer);
        // Stupid Safari hack to extend native classes
        // https://bugs.webkit.org/show_bug.cgi?id=226201
        Object.setPrototypeOf(this, $4dfb309940096288$export$fea83bdfcd3f94c.prototype);
        /** @private */ this._closed = false;
    }
    async close() {
        this._closed = true;
        const w = this.getWriter();
        const p = w.close();
        w.releaseLock();
        return p;
    // return super.close ? super.close() : this.getWriter().close()
    }
    /** @param {number} position */ seek(position) {
        return this.write({
            type: "seek",
            position: position
        });
    }
    /** @param {number} size */ truncate(size) {
        return this.write({
            type: "truncate",
            size: size
        });
    }
    // The write(data) method steps are:
    write(data) {
        if (this._closed) return Promise.reject(new TypeError("Cannot write to a CLOSED writable stream"));
        // 1. Let writer be the result of getting a writer for this.
        const writer = this.getWriter();
        // 2. Let result be the result of writing a chunk to writer given data.
        const result = writer.write(data);
        // 3. Release writer.
        writer.releaseLock();
        // 4. Return result.
        return result;
    }
}
Object.defineProperty($4dfb309940096288$export$fea83bdfcd3f94c.prototype, Symbol.toStringTag, {
    value: "FileSystemWritableFileStream",
    writable: false,
    enumerable: false,
    configurable: true
});
Object.defineProperties($4dfb309940096288$export$fea83bdfcd3f94c.prototype, {
    close: {
        enumerable: true
    },
    seek: {
        enumerable: true
    },
    truncate: {
        enumerable: true
    },
    write: {
        enumerable: true
    }
});
// Safari safari doesn't support writable streams yet.
if (globalThis.FileSystemFileHandle && !globalThis.FileSystemFileHandle.prototype.createWritable && !globalThis.FileSystemWritableFileStream) globalThis.FileSystemWritableFileStream = $4dfb309940096288$export$fea83bdfcd3f94c;
var $4dfb309940096288$export$2e2bcd8739ae039 = $4dfb309940096288$export$fea83bdfcd3f94c;

});

parcelRegister("cKEn5", function(module, exports) {

var $gHoWX = parcelRequire("gHoWX");
const { INVALID: $948918d3153fc042$var$INVALID, SYNTAX: $948918d3153fc042$var$SYNTAX, GONE: $948918d3153fc042$var$GONE } = (0, $gHoWX.errors);
// Safari doesn't support async createWritable streams yet.
if (globalThis.FileSystemFileHandle && !globalThis.FileSystemFileHandle.prototype.createWritable) {
    const wm = new WeakMap();
    let workerUrl;
    // Worker code that should be inlined (can't use any external functions)
    const code = ()=>{
        let fileHandle, handle;
        onmessage = async (evt)=>{
            const port = evt.ports[0];
            const cmd = evt.data;
            switch(cmd.type){
                case "open":
                    const file = cmd.name;
                    let dir = await navigator.storage.getDirectory();
                    for (const folder of cmd.path)dir = await dir.getDirectoryHandle(folder);
                    fileHandle = await dir.getFileHandle(file);
                    handle = await fileHandle.createSyncAccessHandle();
                    break;
                case "write":
                    handle.write(cmd.data, {
                        at: cmd.position
                    });
                    handle.flush();
                    break;
                case "truncate":
                    handle.truncate(cmd.size);
                    break;
                case "abort":
                case "close":
                    handle.close();
                    break;
            }
            port.postMessage(0);
        };
    };
    globalThis.FileSystemFileHandle.prototype.createWritable = async function(options) {
        // Safari only support writing data in a worker with sync access handle.
        if (!workerUrl) {
            const stringCode = `(${code.toString()})()`;
            const blob = new Blob([
                stringCode
            ], {
                type: "text/javascript"
            });
            workerUrl = URL.createObjectURL(blob);
        }
        const worker = new Worker(workerUrl, {
            type: "module"
        });
        let position = 0;
        const textEncoder = new TextEncoder();
        let size = await this.getFile().then((file)=>file.size);
        const send = (message)=>new Promise((resolve, reject)=>{
                const mc = new MessageChannel();
                mc.port1.onmessage = (evt)=>{
                    if (evt.data instanceof Error) reject(evt.data);
                    else resolve(evt.data);
                    mc.port1.close();
                    mc.port2.close();
                    mc.port1.onmessage = null;
                };
                worker.postMessage(message, [
                    mc.port2
                ]);
            });
        // Safari also don't support transferable file system handles.
        // So we need to pass the path to the worker. This is a bit hacky and ugly.
        const root = await navigator.storage.getDirectory();
        const parent = await wm.get(this);
        const path = await root.resolve(parent);
        // Should likely never happen, but just in case...
        if (path === null) throw new DOMException(...$948918d3153fc042$var$GONE);
        let controller;
        await send({
            type: "open",
            path: path,
            name: this.name
        });
        if (options?.keepExistingData === false) {
            await send({
                type: "truncate",
                size: 0
            });
            size = 0;
        }
        const ws = new FileSystemWritableFileStream({
            start: (ctrl)=>{
                controller = ctrl;
            },
            async write (chunk) {
                const isPlainObject = chunk?.constructor === Object;
                if (isPlainObject) chunk = {
                    ...chunk
                };
                else chunk = {
                    type: "write",
                    data: chunk,
                    position: position
                };
                if (chunk.type === "write") {
                    if (!("data" in chunk)) {
                        await send({
                            type: "close"
                        });
                        throw new DOMException(...$948918d3153fc042$var$SYNTAX("write requires a data argument"));
                    }
                    chunk.position ??= position;
                    if (typeof chunk.data === "string") chunk.data = textEncoder.encode(chunk.data);
                    else if (chunk.data instanceof ArrayBuffer) chunk.data = new Uint8Array(chunk.data);
                    else if (!(chunk.data instanceof Uint8Array) && ArrayBuffer.isView(chunk.data)) chunk.data = new Uint8Array(chunk.data.buffer, chunk.data.byteOffset, chunk.data.byteLength);
                    else if (!(chunk.data instanceof Uint8Array)) {
                        const ab = await new Response(chunk.data).arrayBuffer();
                        chunk.data = new Uint8Array(ab);
                    }
                    if (Number.isInteger(chunk.position) && chunk.position >= 0) position = chunk.position;
                    position += chunk.data.byteLength;
                    size += chunk.data.byteLength;
                } else if (chunk.type === "seek") {
                    if (Number.isInteger(chunk.position) && chunk.position >= 0) {
                        if (size < chunk.position) throw new DOMException(...$948918d3153fc042$var$INVALID);
                        console.log("seeking", chunk);
                        position = chunk.position;
                        return; // Don't need to enqueue seek...
                    } else {
                        await send({
                            type: "close"
                        });
                        throw new DOMException(...$948918d3153fc042$var$SYNTAX("seek requires a position argument"));
                    }
                } else if (chunk.type === "truncate") {
                    if (Number.isInteger(chunk.size) && chunk.size >= 0) {
                        size = chunk.size;
                        if (position > size) position = size;
                    } else {
                        await send({
                            type: "close"
                        });
                        throw new DOMException(...$948918d3153fc042$var$SYNTAX("truncate requires a size argument"));
                    }
                }
                await send(chunk);
            },
            async close () {
                await send({
                    type: "close"
                });
                worker.terminate();
            },
            async abort (reason) {
                await send({
                    type: "abort",
                    reason: reason
                });
                worker.terminate();
            }
        });
        return ws;
    };
    const orig = FileSystemDirectoryHandle.prototype.getFileHandle;
    FileSystemDirectoryHandle.prototype.getFileHandle = async function(...args) {
        const handle = await orig.call(this, ...args);
        wm.set(handle, this);
        return handle;
    };
}

});




/** @typedef {import('./FileSystemDirectoryHandle.js').default} FileSystemDirectoryHandle */ const $6017c4a984ddc820$var$native = globalThis.showDirectoryPicker;

/**
 * @param {Object} [options]
 * @param {boolean} [options._preferPolyfill] If you rather want to use the polyfill instead of the native
 * @returns {Promise<FileSystemDirectoryHandle>}
 */ async function $6017c4a984ddc820$export$6030ffa7b5d2eb28(options = {}) {
    if ($6017c4a984ddc820$var$native && !options._preferPolyfill) return $6017c4a984ddc820$var$native(options);
    const input = document.createElement("input");
    input.type = "file";
    input.webkitdirectory = true;
    // Fallback to multiple files input for iOS Safari
    input.multiple = true;
    // See https://stackoverflow.com/questions/47664777/javascript-file-input-onchange-not-working-ios-safari-only
    input.style.position = "fixed";
    input.style.top = "-100000px";
    input.style.left = "-100000px";
    document.body.appendChild(input);
    // Lazy load while the user is choosing the directory
    const p = Promise.resolve((parcelRequire("gHoWX")));
    await new Promise((resolve)=>{
        input.addEventListener("change", resolve);
        input.click();
    });
    return p.then((mod)=>mod.getDirHandlesFromInput(input));
}
var $6017c4a984ddc820$export$2e2bcd8739ae039 = $6017c4a984ddc820$export$6030ffa7b5d2eb28;


/** @typedef {import('./FileSystemFileHandle.js').default} FileSystemFileHandle */ const $6f53f97151c576e6$var$def = {
    accepts: []
};
const $6f53f97151c576e6$var$native = globalThis.showOpenFilePicker;

/**
 * @param {Object} [options]
 * @param {boolean} [options.multiple] If you want to allow more than one file
 * @param {boolean} [options.excludeAcceptAllOption=false] Prevent user for selecting any
 * @param {Object[]} [options.accepts] Files you want to accept
 * @param {boolean} [options._preferPolyfill] If you rather want to use the polyfill instead of the native
 * @returns {Promise<FileSystemFileHandle[]>}
 */ async function $6f53f97151c576e6$export$9a17f2258b27c445(options = {}) {
    const opts = {
        ...$6f53f97151c576e6$var$def,
        ...options
    };
    if ($6f53f97151c576e6$var$native && !options._preferPolyfill) return $6f53f97151c576e6$var$native(opts);
    const input = document.createElement("input");
    input.type = "file";
    input.multiple = opts.multiple;
    input.accept = (opts.accepts || []).map((e)=>[
            ...(e.extensions || []).map((e)=>"." + e),
            ...e.mimeTypes || []
        ]).flat().join(",");
    // See https://stackoverflow.com/questions/47664777/javascript-file-input-onchange-not-working-ios-safari-only
    Object.assign(input.style, {
        position: "fixed",
        top: "-100000px",
        left: "-100000px"
    });
    document.body.appendChild(input);
    // Lazy load while the user is choosing the directory
    const p = Promise.resolve((parcelRequire("gHoWX")));
    await new Promise((resolve)=>{
        input.addEventListener("change", resolve, {
            once: true
        });
        input.click();
    });
    input.remove();
    return p.then((m)=>m.getFileHandlesFromInput(input));
}
var $6f53f97151c576e6$export$2e2bcd8739ae039 = $6f53f97151c576e6$export$9a17f2258b27c445;


/** @typedef {import('./FileSystemFileHandle.js').default} FileSystemFileHandle */ const $09d2b46eea00e394$var$native = globalThis.showSaveFilePicker;


/**
 * @param {Object} [options]
 * @param {boolean} [options.excludeAcceptAllOption=false] Prevent user for selecting any
 * @param {Object[]} [options.types] Files you want to accept
 * @param {string} [options.suggestedName] the name to fall back to when using polyfill
 * @param {string} [options._name] the name to fall back to when using polyfill
 * @param {boolean} [options._preferPolyfill] If you rather want to use the polyfill instead of the native
 * @return {Promise<FileSystemFileHandle>}
 */ async function $09d2b46eea00e394$export$f8b17fb0c2d91989(options = {}) {
    if ($09d2b46eea00e394$var$native && !options._preferPolyfill) return $09d2b46eea00e394$var$native(options);
    if (options._name) {
        console.warn("deprecated _name, spec now have `suggestedName`");
        options.suggestedName = options._name;
    }
    const { FileSystemFileHandle: FileSystemFileHandle } = await Promise.resolve((parcelRequire("iz0Bl")));
    const { FileHandle: FileHandle } = await (parcelRequire("dnVHC"));
    return new FileSystemFileHandle(new FileHandle(options.suggestedName));
}
var $09d2b46eea00e394$export$2e2bcd8739ae039 = $09d2b46eea00e394$export$f8b17fb0c2d91989;


/** @typedef {import('./FileSystemDirectoryHandle.js').default} FileSystemDirectoryHandle */ 


if (globalThis.DataTransferItem && !DataTransferItem.prototype.getAsFileSystemHandle) DataTransferItem.prototype.getAsFileSystemHandle = async function() {
    const entry = this.webkitGetAsEntry();
    const [{ FileHandle: FileHandle, FolderHandle: FolderHandle }, { FileSystemDirectoryHandle: FileSystemDirectoryHandle }, { FileSystemFileHandle: FileSystemFileHandle }] = await Promise.all([
        (parcelRequire("avxPz")),
        Promise.resolve((parcelRequire("kNkHD"))),
        Promise.resolve((parcelRequire("iz0Bl")))
    ]);
    return entry.isFile ? new FileSystemFileHandle(new FileHandle(entry, false)) : new FileSystemDirectoryHandle(new FolderHandle(entry, false));
};

/**
 * @param {object=} driver
 * @return {Promise<FileSystemDirectoryHandle>}
 */ async function $0bace2c8e23f0c18$var$getOriginPrivateDirectory(driver, options = {}) {
    if (!driver) return globalThis.navigator?.storage?.getDirectory() || globalThis.getOriginPrivateDirectory();
    const { FileSystemDirectoryHandle: FileSystemDirectoryHandle } = await Promise.resolve((parcelRequire("kNkHD")));
    const module = await driver;
    const sandbox = await (module.default ? module.default(options) : module(options));
    return new FileSystemDirectoryHandle(sandbox);
}
var $0bace2c8e23f0c18$export$2e2bcd8739ae039 = $0bace2c8e23f0c18$var$getOriginPrivateDirectory;



var $6H5Ie = parcelRequire("6H5Ie");

var $kNkHD = parcelRequire("kNkHD");

var $iz0Bl = parcelRequire("iz0Bl");

var $pPxqM = parcelRequire("pPxqM");


var $f2387162918c5f58$export$2e2bcd8739ae039 = parcelRequire("kNkHD").default;
var $d83bf6496e8d63a6$export$2e2bcd8739ae039 = parcelRequire("iz0Bl").default;
var $04da505427c183ab$export$2e2bcd8739ae039 = parcelRequire("pPxqM").default;
var $4dfb309940096288$export$2e2bcd8739ae039 = parcelRequire("6H5Ie").default;
export {$f2387162918c5f58$export$2e2bcd8739ae039 as FileSystemDirectoryHandle, $d83bf6496e8d63a6$export$2e2bcd8739ae039 as FileSystemFileHandle, $04da505427c183ab$export$2e2bcd8739ae039 as FileSystemHandle, $4dfb309940096288$export$2e2bcd8739ae039 as FileSystemWritableFileStream, $0bace2c8e23f0c18$export$2e2bcd8739ae039 as getOriginPrivateDirectory, $6017c4a984ddc820$export$2e2bcd8739ae039 as showDirectoryPicker, $6f53f97151c576e6$export$2e2bcd8739ae039 as showOpenFilePicker, $09d2b46eea00e394$export$2e2bcd8739ae039 as showSaveFilePicker};
//# sourceMappingURL=es6.js.map
