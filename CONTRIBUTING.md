# Contributor's Guide


-------

The details below will get your system setup to start contributing to Q-C Coders.

#### *Advanced coder setup or TL;DR click [Advance Developer Steps](#advance-developer-steps)* 

## Junior Coders Start Here:

### Setup

*What are these setup instructions doing?*

These instructions will install Git on your machine. Git is just a version control program which will allow you to transfer files from your machine to GitHub and vice versa. Once installed, the Git program can be used by opening Git Bash. The next part is forking (copying) the existing code on GitHub to your local GitHub account. This allows you to work with the files without making changes to production code.


    1. Install Git from [here](https://git-scm.com/downloads)
        -   If Git is new to you, it's recommended to follow this setup [here](https://youtu.be/J_Clau1bYco)
	2. Open Git Bash and navigate to the folder you wish to save the project to.
	3. Open up a new browser or tab and go to the qc-coders repo: 
        [Q-C Coders](https://github.com/QC-Coders/qc-coders.github.io)
	4. Click on the "Fork" button
        -   You now have the repo forked under your own GitHub account.
	5. After the repository has been forked, you will be taken to your copy of 
        the Q-C Coders repo at `your_Username_Here/qc-coders.github.io`
        -  Make sure to replace `your_Username_Here` with your GitHub username


### Cloning

*What are these cloning instructions doing?*

Cloning is simply putting the code that you previously forked (copied to your own GitHub repo) onto your local machine. 


	1. Open Git Bash Shell and navigate to the location you're going to save this project locally.
        -   Make a note of where this location is as you will use it later.
    2. Type or copy: `git clone https://github.com/yourUsernameHere/qc-coders.github.io.git'
	   -   This will download the entire qc-coders repo to your projects directory.


### Configuring the Upstream

*What are these upstream instructions doing?*

Upstream is a way of keeping the files on your computer updated with any changes that take place in production. For instance, while you are making changes, someone else make a pull-request that gets merged...Whoa? Wait! Pull-request? Merge? Let's explain these terms. A pull-request is simply someone requesting to push updates, fixes or changes to the production server. A merge takes place when one of us accept the those changes. So, now your computer doesn't have the latest changes, so this is just what upstream does. Every time you use the upstream command (explained later), Git will check to make sure your files are the same as production.


	1. Using Git Bash navigate to the directory where you previously cloned 
    the new qc-coders directory on your machine.
        -   Remember when this document said 'Make a note of where this location is'? Yep, that's the location!
	2. Add the upstream to the qc-coders production repo:
		`git remote add upstream https://github.com/QC-Coders/qc-coders.github.io.git`
		
        -   Great! You are almost ready to contrubute to qc-coders!


### Maintaining your Fork

*Didn't I already do this?*<br/>

Remember, a long time ago when you forked the production repo and then cloned it. (Essentially, putting qc-coders into your own GitHub and then making a copy of the code on your computer). Then we setup that upstream so you can get the latest and greatest changes. Well, this is what you will need to do **every** time you wish to keep that code updated. Oh, you thought it was going to do this automatically? Nope! (Guess, you have another project to add to your list to make this happen!) The term used for all of this is called: rebasing. Yes, another terrible name.

So each time you want to update your code base or (*most importantly*) before making a pull-request, follow these steps below:


	1. Make sure you are on the `staging branch`
		
        -   Note: If you have used Git/GitHub before you may have seen the
         word `master` used. `Master` is for your own projects. 
         When you fork/clone a project, your code will reside on the `staging branch`.

		Type in Git Bash:
        `git status`
		
		The Git Bash console should read:
		
		```
        > On branch staging
		> Your branch is up-to-date with 'origin/staging'
		```

		If you are **not** on staging, you can get on the staging branch by typing:**
		`git checkout staging`

	1. Peform the rebase
		`git pull --rebase upstream staging`
	2. Update your GitHub repo with this new rebase
		`git push origin staging --force`


### Changes Branch & Making Changes

*What's a branch?*

A changes branch is a way of making changes without affecting your `staging branch`. You want to keep your `staging branch` should remain an exact replica of what is on production. So, you will create another branch for each feature/fix/update etc. This allows your `staging branch` to stay 'clean' and free from any changes.

	1. Make sure you're on the staging branch:
	Type in Git Bash:

    `git status`

	The Git Bash console should read:
        ```
        > On branch staging`
		> Your branch is up-to-date with 'origin/staging'
		```

	2. If you are not on staging or your working directory is not clean, type in Git Bash:
		`git checkout staging`
	3. Create a branch off of `staging` with git:
		`git checkout -B branch/name-here`

		**Note:** Branch naming is important. Use a name like
	    `fix/short-fix-description` or `feature/short-feature-description`.

    4. Make your changes now and if you ever need to check to see which files
     have been changed type into Git Bash `git status`



### Pushing Your Changes to GitHub

*Push, pull, what?*

You will now put the code from your local machine back into your local qc-coders repository? Remember way back when you did that fork and it copied the production code from qc-coders to your personal GitHub repository? Yep, that's where your changes will go.

	1. Add your edited files:
		Indivudually add files by `git add 'path to filename'`, or alternatively you can add **all**
         of your edited files by `git add *`.
	2. Commit your edits: `git commit -m <"brief description of the commit">`.
	3. Push your commits to your GitHub Fork: `git push -u origin branch_name_here`


### Making a Pull Request

	1. Now that your edited files have been committed, you will be prompted to create a pull request on your GitHub Page.
    	-  By default, all pull-requests should be towards the qc-coders dev repo, `dev branch`.
    2. Submit a pull-request from **your** branch to qc-coders `dev branch`.
    3. The title (also called the subject) of your PR should be descriptive of your changes.
        -   In the body of your pull-request include a more detailed summary of the changes you made.
    	-  If the pull-request is meant to fix an existing bug/issue, then, at the end of your PR's description, append the keyword `closes` and #xxxx (where xxxx is the issue number). Example: `closes #10`. This tells GitHub to close the existing issue, if the PR is merged.
    4. Once your PR is **accepted**, you may delete the branch you created to submit it.
	
        -   This keeps your working fork clean.

	You can do this with a press of a button on the GitHub PR interface.
     And also, you can delete the local copy of the branch with: `git branch -D branch/to-delete-name`
	
	5. After deleting the branch, make sure you rebase against the production code to keep your `staging branch`
     up to date: `git pull --rebase upstream staging`


### Rejected Pull-Request

*Oh no! My pull-request was rejected, now what?*

If you still have a local copy of the branch you, you can make the requested changes and amend your commit with:

`git commit --amend -m <"brief description of the ammend">`  

This will update your existing
commit. When you push it to your fork you will need to do a force push to overwrite your old commit:
`git push --force`

## Advance Developer Steps

	1. Fork the qc-coder repo</li>
	2. Clone the new fork to your machine</li>
	3. Add the upstream `git remote add upstream https://github.com/QC-Coders/qc-coders.github.io.git`
        -   Maintain upstream by: `git pull --rebase upstream staging`

	4. Verify you're on `staging branch` and create a new branch for editing code
    5. Push changes to GitHub
    6. Submit a pull request to qc-coders `dev branch`
    7. After your PR is merged, delete the branch and then rebase against production




