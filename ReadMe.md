# Web polyfill

An automatic [CDN][1] service for [Web polyfills][2], which is based on [TypeScript][3], [Node.js][4] & [JSDelivr][5].

[![CI & CD](https://github.com/EasyWebApp/Web-polyfill/actions/workflows/main.yml/badge.svg)][6]

## Usage example

1. Find a Web feature in the [Polyfill directory](source/list.ts)
2. Copy the `class` name of the selected polyfill, then write it into a specific Script URL (shown below)
3. the above script will detect whether current environment needs to be patched, then load the polyfill script original from JSDelivr

### Web pages

```html
<head>
    <script src="https://polyfill.web-cell.dev/feature/ResizeObserver.js"></script>
</head>
```

### Web workers

```javascript
self.importScripts('https://polyfill.web-cell.dev/feature/Regenerator.js');
```

## Add more polyfills

1. For **junior engineers**, you can [submit an issue][7] and wait for the maintainer reaction
2. For **senior engineers**, just [edit the Polyfill directory][8], and make a pull request
3. After your pull request reviewd & merged, the polyfills will be updated by GitHub actions automatically

## Host your own mirror

1. Fork this repository
2. Replace original HTTP domain with yours in [GitHub action configuration][9]
3. You can replace [GitHub pages][10] with an **Object Storage service** (AWS S3, etc.)

## Inspired by

1. https://polyfill.io/
2. https://polyfill.dev/

[1]: https://en.wikipedia.org/wiki/Content_delivery_network
[2]: https://remysharp.com/2010/10/08/what-is-a-polyfill
[3]: https://www.typescriptlang.org/
[4]: https://nodejs.org/
[5]: https://www.jsdelivr.com/
[6]: https://github.com/EasyWebApp/Web-polyfill/actions/workflows/main.yml
[7]: https://github.com/EasyWebApp/Web-polyfill/issues/new?assignees=TechQuery&labels=package&template=package.md&title=
[8]: https://github.com/EasyWebApp/Web-polyfill/edit/master/source/list.ts
[9]: https://github.com/EasyWebApp/Web-polyfill/blob/master/.github/workflows/main.yml#L27
[10]: https://pages.github.com/
