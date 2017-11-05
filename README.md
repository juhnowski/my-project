Quick Start

Install node.

  lein new dogfort my-project
  cd my-project
  lein npm install
  lein build
then in another terminal

  cd my-project
  node main.js
For easy development install supervisor

  npm install supervisor -g

  cd my-project
  supervisor main.js
Supervisor will restart the node.process whenever you make changes.

Links
-----
https://github.com/whamtet/dogfort
