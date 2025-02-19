# Web polyfill

An automatic [CDN][1] service for [Web polyfills][2], which is based on [TypeScript][3], [Node.js][4] & [UnPkg][5].

[![CI & CD](https://github.com/EasyWebApp/Web-polyfill/actions/workflows/main.yml/badge.svg)][6]

## Usage example

1. Find a Web feature in the [Polyfill directory][7]
2. Copy the `class` name of the selected polyfill, then write it into a specific Script URL (shown below)
3. the above script will detect whether current environment needs to be patched, then load the polyfill script original from UnPkg

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

1. For **junior engineers**, you can [submit an issue][8] and wait for the maintainer reaction
2. For **senior engineers**, just [edit the Polyfill files][7], and make a pull request
3. After your pull request reviewd & merged, the polyfills will be updated by [GitHub actions][9] automatically

## Host your own mirror

1. Fork [this repository][10]
2. Replace original **HTTP domain** with yours in [GitHub action configuration][11]
3. You can replace [GitHub pages][12] with an **Object Storage service** (AWS S3, etc.)

### China mainland

Thanks for [KaiYuanShe][13]'s donation, we get a fast local mirror for China mainland:

> https://polyfill.kaiyuanshe.cn/

### Custom examples

Edit `.env` content to fit your situation:

```ini
WAN_ICON=🇺🇦
WAN_HOST=https://polyfill.example.ua
LAN_ICON=🇷🇺
LAN_HOST=https://polyfill.example.ru
```

or

```ini
WAN_ICON=🇰🇷
WAN_HOST=https://polyfill.example.kr
LAN_ICON=🇰🇵
LAN_HOST=https://polyfill.example.kp
```

## Inspired by

1. https://polyfill.io/
2. https://polyfiller.kaiyuanshe.cn/

[1]: https://en.wikipedia.org/wiki/Content_delivery_network
[2]: https://remysharp.com/2010/10/08/what-is-a-polyfill
[3]: https://www.typescriptlang.org/
[4]: https://nodejs.org/
[5]: https://unpkg.com/
[6]: https://github.com/EasyWebApp/Web-polyfill/actions/workflows/main.yml
[7]: https://github.dev/EasyWebApp/Web-polyfill/tree/master/source/list
[8]: https://github.com/EasyWebApp/Web-polyfill/issues/new?assignees=TechQuery&labels=package&template=package.yml
[9]: https://github.com/features/actions
[10]: https://github.com/EasyWebApp/Web-polyfill
[11]: https://github.com/EasyWebApp/Web-polyfill/blob/master/.github/workflows/main.yml#L31
[12]: https://pages.github.com/
[13]: https://kaiyuanshe.cn/
