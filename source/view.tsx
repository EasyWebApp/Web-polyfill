import { DOMRenderer, JsxChildren } from 'dom-renderer';

import { Polyfill } from './Polyfill';

export interface LayoutProps {
    children?: JsxChildren;
}

export const Layout = ({ children }: LayoutProps) => (
    <html>
        <head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

            <title>Web polyfill</title>
            <link rel="icon" href="https://github.com/EasyWebApp.png" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link
                rel="stylesheet"
                href="https://unpkg.com/bootstrap/dist/css/bootstrap-utilities.min.css"
            />
            <link
                rel="stylesheet"
                href="https://unpkg.com/github-markdown-css"
            />
            <link
                rel="stylesheet"
                href="https://unpkg.com/prismjs@1.29.0/themes/prism-okaidia.min.css"
            />
        </head>
        <body class="p-3 markdown-body">
            {children}
            <script src="https://unpkg.com/prismjs@1.29.0/components/prism-core.min.js"></script>
            <script src="https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js"></script>
        </body>
    </html>
);

export interface SavedPolyfill
    extends Pick<Polyfill, 'packageName' | 'sourceMapURLs'> {
    name: string;
}

export interface TableProps {
    data: SavedPolyfill[];
}

const { WAN_ICON, WAN_HOST, LAN_ICON, LAN_HOST } = process.env;

export const Table = ({ data }: TableProps) => (
    <table>
        <thead>
            <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Package</th>
                <th>Source Map</th>
                <th>Network</th>
            </tr>
        </thead>
        <tbody>
            {data.map(({ name, packageName, sourceMapURLs }, index) => (
                <tr>
                    <td>{++index}</td>
                    <td>{name}</td>
                    <td>
                        <a
                            href={`https://www.npmjs.com/package/${packageName}`}
                        >
                            {packageName}
                        </a>
                    </td>
                    <td>{sourceMapURLs[0] ? `✅` : ''}</td>
                    <td>
                        <a href={`${WAN_HOST}/feature/${name}.js`}>
                            {WAN_ICON}
                        </a>{' '}
                        <a href={`${LAN_HOST}/feature/${name}.js`}>
                            {LAN_ICON}
                        </a>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

const renderer = new DOMRenderer();

export const generateHomePage = (
    ReadMe: string,
    polyfills: TableProps['data']
) =>
    renderer.renderToStaticMarkup(
        <Layout>
            <article innerHTML={ReadMe} />

            <h2>All supported polyfills</h2>
            <Table data={polyfills} />
        </Layout>
    );
