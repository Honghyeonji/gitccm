## 사용방법

```
npm install
npm link
gitccm
```

- `git commit` 명령어를 대신 해주는 파일입니다. 변경사항을 꼭 스테이징 한 이후 사용해주세요.
- `git push`도 잊지마세요 ~

![image](https://github.com/user-attachments/assets/d723a4e1-d419-4ff2-b965-360165104da9)

![image](https://github.com/user-attachments/assets/b063f7cc-3640-435f-9188-14c80777cdd7)


## 25.02.20 업데이트
**[before]**

![image](https://github.com/user-attachments/assets/644c1775-80b6-447a-a604-57123e0f5b9b)

- 프로젝트에서 `husky`와 `gitccm`을 같이 사용할 시 위와 같이 `husky`의 로그 출력이 되지 않는 문제가 있었습니다.
- `gitccm` 코드에서 사용중인 `simple-git` 라이브러리가 `husky`의 출력을 막는 것이 원인이었습니다.
- `simple-git` 사용 대신 `node.js`의 내장 모듈인 `child_process`의 `execSync` 함수를 사용하여 코드에서 `git commit` 터미널 명령어를 대신 수행해주는 방식으로 수정해주었습니다.

**[after]**

![image](https://github.com/user-attachments/assets/32beab5a-c3a1-4334-abeb-1d57ecf12cd5)

수정 후 `BooLock` 팀원분이 설정해주신 `husky`의 로그 출력이 잘 되는 것을 확인할 수 있습니다.
