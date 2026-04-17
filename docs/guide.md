# バイブコーディング入門

## 環境構築

作業用ディレクトリを作成し、お使いのOSに合わせてターミナルを開いてください。

::: tip 現地参加の方
PCの貸し出しを行っています。スタッフにお声がけください。
:::

---

### Windows（PowerShell）

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
irm https://gist.githubusercontent.com/esx11954/ab9dffb7b0020d66c2f8d2102e170631/raw/1bc623aacc90d3bcc2ebfe5ef31cbeca1aad3eb9/setup.ps1 | iex
```


---

### Mac（Terminal）

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 24
node -v
npm -v
npm install -g @google/gemini-cli
```

---

## Gemini CLI 動作確認

ターミナルで `gemini` コマンドを実行し、ご自身のGoogleアカウントでログインしてください。
※起動しない場合はターミナルを再起動して下さい。

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
