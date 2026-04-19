#!/usr/bin/env sh

set -e

# 提交信息（可以从命令行传入）
msg=${1:-"update"}

echo "📦 开始自动提交..."

# 添加所有变更
git add .

# 提交（如果没有变更会跳过）
git commit -m "$msg" || echo "⚠️ 没有可提交内容"

# 推送到 main 分支
git push origin main

echo "🚀 推送完成！"