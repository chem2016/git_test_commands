# git_test_commands
git checkout -b my_local_branch1 origin/master
git checkout -b my_local_branch1 commit 2

master
| commit 1
| commit 2  ----> I do checkout a branch\
| commit 3                               \
| commit 4                    =            my_local_branch1
                                              | commit a
                                              | commit b
                                             <- merge back to master


master (my_local master)      origin (master)
| commit 1                    commit1
| commit 2                    commit2
| commit 3                    commit3
| commit 4  -push             commit4
| commit 5 
| commit 6 
| commit 7  git rebase -i origin/master

show 
pick 342ksdf commit 5
pick crwr234 commit 6
pick 2408fsd commit 7

-> change it to:
pick 342ksdf commit 5
s crwr234 commit 6
s 2408fsd commit 7

:wq 

git log:                           origin (master)
| commit 1                         commit 1 
| commit 2                         commit 2
| commit 3                         commit 3
| commit 4                         commit 4
| commit 5' (asdfiwerd123) -push   commit 5'



git fetch + git merge = git pull