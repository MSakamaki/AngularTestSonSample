 protoractorを使用したテスト
====

### directory

```sh
e2e/
├── README.md             # このファイル
├── components            # 画面コンポーネント(element & use case action)
│   └── login
│       └── login.po.js
├── functional_test       # 機能テスト (画面単位)
│   └── login
│       └── login.spec.js
└── acceptance_test       # 受け入れテスト (シナリオ単位)
    └── UsecaseName
        └── usecasename.spec.js
```