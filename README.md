yarn dev
see all the scripts in package json
pwd terminal what is current directory
cd move to directory in terminal
to run an app, use yarn or npm run command in terminal
to run an app means start the server
package json lists scripts accessibile
Look in node modules.bin - all accessible as binaries
Binary is first, the command in that binary that you're running
"dev": "next dev",
yarn jest --watch --coverage --testPathPattern sum
set up ts node, we scoped it to be sum, change it to match pages2 or index
code . opens up code in terminal or iterm (command line tools)
git init made this folder a git repository
git add --all --> adds all files
git status --> checks what files have been staged
git reset --> unstage all our changes
/\*.log means everything with .log. \* is called a glob
git commit -m init - commiting group of changes and adding a message to that change

got this from repot on github
git remote add origin https://github.com/krstrobe/coding-with-kirk.git
git branch -M main
git push -u origin main

Personal access token - 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

$ means type this into your command line. Dollar sign shouldn't be included

added ssh agent for logging in through github

source ~/.vshrc - loads file in manually

public key encryption - person must create private key so you can decrypt using your private key

Scripts section of package.json is where your commands are - yarn "name of script" yarn run build - reproduce steps that CI is doing but locally

CI is contiunous integration server

With Yarn you can omit run, with NPM you can't

git add --all && git commit -m "progress" && git push - doing all steps at once for staging, commiting, and pushing

node -v (check version of any binary usually) binary is a command line application

--help
