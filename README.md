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
