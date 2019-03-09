# Adobe Launch Fonts extension

This is an Adobe Launch extension for Adobe Fonts ([formerly Typekit](https://theblog.adobe.com/typekit-is-adobe-fonts/)). It can be used to deploy the Fonts Embed code to your site, or as an example for a Launch extension project.

For more information on Launch, please visit our [product website](http://www.adobe.com/enterprise/cloud-platform/launch.html), and the [user documentation](https://docs.adobelaunch.com/).

For more information on Launch extension development, please visit our [developer documentation](http://developer.adobelaunch.com/). **Note** the [Scaffold tool](https://www.npmjs.com/package/@adobe/reactor-scaffold), the [Extension Sandbox](https://www.npmjs.com/package/@adobe/reactor-sandbox), and the [uploader tool](https://www.npmjs.com/package/@adobe/reactor-uploader) will be helpful in developing your own Launch extension.

## Development Setup
1. Install [node.js](https://nodejs.org/). Make sure you have at least [npm v5.2](https://docs.npmjs.com/getting-started/installing-node#updating-npm) installed.
2. Clone this repository.
3. After navigating into the project directory, launch the sandbox with `npx @adobe/reactor-sandbox`.
4. A server will be started at [http://localhost:3000](http://localhost:3000) (HTTP) and [https://localhost:4000](https://localhost:4000) (HTTPS). For more information and configuration options, see the [@adobe/reactor-sandbox](https://www.npmjs.com/package/@adobe/reactor-sandbox) package on npm.

## Changelog

### 1.0.1:

* Remove package.json
* Change Typekit branding to Adobe Fonts
* Change bootstrap to [spectrum-css](https://github.com/adobe/spectrum-css)
* Update README
