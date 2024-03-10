### Usage
```js
import { Logger } from '@ryuux/print'

const logger = new Logger()

logger.log('info', 'your first log with this package')
```

### Configure

```js
const defaultConfig = {
  colors: true,
  timestamp: false,
  level: true
}

const logger = new Logger(defaultConfig)
```

### Colors

| Level  | Color   |
|--------|---------|
| INFO   | Green |
| WARN   | Yellow |
| ERROR  | Red |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/aranda10ss"><img src="https://avatars.githubusercontent.com/u/157998151?v=4?s=" width="100px;" alt="Ryo ϟ"/><br /><sub><b>Ryo ϟ</b></sub></a><br /><a href="https://github.com/aranda10ss/print/commits?author=aranda10ss" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!