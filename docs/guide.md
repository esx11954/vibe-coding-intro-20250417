# バイブコーディング入門

## 環境構築

作業用ディレクトリを作成し、お使いのOSに合わせてターミナルを開いてください。

::: tip 現地参加の方
PCの貸し出しを行っています。スタッフにお声がけください。
:::

---

### Windows（PowerShell 管理者権限）

**インストール**

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
irm https://gist.githubusercontent.com/esx11954/ab9dffb7b0020d66c2f8d2102e170631/raw/445f636d624fa7dc80775026fbe9a44f0081f8c3/setup.ps1 | iex
```

**アンインストール**

```powershell
irm https://gist.githubusercontent.com/esx11954/87bba43f9fd03ffe5d5c69df6315868c/raw/d24f32021914e175f3c8f925898242cbaab4f3a7/reset.ps1 | iex
```

---

### Mac（Terminal）

**インストール**

```bash
curl -fsSL https://gist.githubusercontent.com/esx11954/ab9dffb7b0020d66c2f8d2102e170631/raw/5a5329be48bd6cd5a4b518959f1ce07d64cfef33/setup.sh | bash
```

**アンインストール**

```bash
curl -fsSL https://gist.githubusercontent.com/esx11954/87bba43f9fd03ffe5d5c69df6315868c/raw/c8905ee129c097a9a72fddeb670348cbb82333af/reset.sh | bash
```

---

## Gemini CLI 動作確認

ターミナルで `gemini` コマンドを実行し、ご自身のGoogleアカウントでログインしてください。

```bash
gemini
```

ログイン後、適当に簡単なプロンプトを入力して動作を確認しましょう。

**入力例：**

```
日本の首都はどこですか？
```

```
簡単な自己紹介文を作って
```
