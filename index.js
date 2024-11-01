#!/usr/bin/env node

const inquirer = require("inquirer");
const simpleGit = require("simple-git");
const git = simpleGit();
const prompt = inquirer.createPromptModule();

const commitList = [
  { name: "✨ feat: - 새로운 기능 추가", value: "✨ feat: " },
  { name: "🐛 fix: - 버그 수정", value: "🐛 fix: " },
  { name: "💄 design: - ui/ux 디자인 변경(css)", value: "💄 design: " },
  { name: "🎨 style: - 코드의 형식 및 스타일 개선", value: "🎨 style: " },
  { name: "🔨 refactor: - 코드 리팩토링", value: "🔨 refactor: " },
  { name: "☔️ test: - 테스트 추가 및 테스트 리팩토링", value: "☔️ test: " },
  { name: "📝 docs: - 문서 수정", value: "📝 docs: " },
  { name: "🙀 chore: - 빌딩 및 패키지 매니저 설정 및 자잘한 스크립트 수정", value: "🙀 chore: " },
  { name: "💬 comment: - 주석 추가", value: "💬 comment: " },
  { name: "🚚 rename: - 파일 혹은 폴더명 수정 및 구조 변경", value: "🚚 rename: " },
  { name: "🔥 remove: - 파일 삭제하는 작업만 수행", value: "🔥 remove: " },
  { name: "🚨 !HOTFIX!: - 긴급 수정", value: "🚨 !HOTFIX!: " },
  { name: "🎸 etc: - 기타", value: "🎸 etc: " },
];

const runCommand = async () => {
  const { type } = await prompt([
    {
      type: "list",
      name: "type",
      message: "Choose commit type:",
      choices: commitList,
    },
  ]);

  const { msg } = await prompt([
    {
      type: "input",
      name: "msg",
      message: `Enter your commit message: ${type}`,
      validate: (input) => (input ? true : "Commit message cannot be empty."),
    },
  ]);

  const commitMsg = `${type}${msg}`;

  try {
    await git.commit(commitMsg);
    console.log(`Successfully committed with message: "${commitMsg}"`);
  } catch (error) {
    console.error("Failed to commit:", error.message);
  }
};

runCommand();
