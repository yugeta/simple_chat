Simple Chat
===
```
Create : 2024-08-10
Author : Yugeta.Koji
```

# Summary
- ポーリングを使わずに、javascriptとPHPでリアルタイムチャットを構築
- Webアプリ制作サンプルとして構築


# Envelopment
- 開発環境は、Dockerのコンテナを実行する事で、立ち上げ可能。
- 同一PCで複数ユーザーを実行したい場合は、別ブラウザまたは、シークレットモードで、複数のウィンドウを立ち上げて実装可能。
- 同一LAN内のエリアであれば、IPアドレス経由で、別PCやスマホなどからでも、同時チャット可能
- Docker起動 : 
  - cd docker
  - docker compose up -d
- ブラウザアクセス
  - http://localhost:8888/


# Deploy
- Linuxサーバー（Ubuntuが望ましい）
- Apache or Nginx ( or Node.js )
- PHP環境


# Author
- Name : Yugeta.Koji
- Company : MYNT, Inc.
- Web : https://myntinc.com/
- Blog : https://blog.myntinc.com/

# Lisence
- MIT
