# Contributor's Guide


-------

The details below will get your system setup to start contributing to Q-C Coders.

#### *Advanced coder setup or TL;DR click [Advance Developer Steps](#advance-developer-steps)* 

## Junior Coders Start Here:

### Setup

*What are these setup instructions doing?*

These instructions will install Git on your machine. Git is just a version control program which will allow you to transfer files from your machine to GitHub and vice versa. Once installed, the Git program can be used by opening Git Bash. The next part is to fork (copy) the existing code on GitHub to your personal GitHub account. This allows you to work with the files without making changes to production code.

1. Install Git from [here](https://git-scm.com/downloads)

    -   If Git is new to you, it's recommended to follow this setup [here](https://youtu.be/J_Clau1bYco)

2. Open Git Bash and navigate to the folder (aka: directory) you wish to save the project to.

3. Open up a new browser or tab and go to the qccoders.github.io repo: 
    [Q-C Coders](https://github.com/qccoders/qccoders.github.io)

4. Click on the "Fork" button
    -   This button is located in the top-right just underneath your picture.
    -   You now have the repository forked under your own GitHub account!

5. After the repository (aka: repo) has been forked, you will be taken to your copy of the Q-C Coders repo at `your_Username_Here/qccoders.github.io`
    -  Make sure to replace `your_Username_Here` with your GitHub username


### Cloning

*What are these cloning instructions doing?*

Cloning is simply putting the code that you previously forked (copied to your own GitHub repo) onto your local machine. 


1. Open Git Bash Shell and navigate to the location you're going to save this project locally.
    -   If you are new to the Git Bash Shell, you can learn the basics [here](https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/command-line-101)
    -   Make a note of where this folder location is. You will use it later.

2. Type or copy: `git clone https://github.com/your_Username_Here/qccoders.github.io.git`
    -   Another way is by going to the qccoders.github.io repo on _your_ Github account and click on the green "Clone or Download" button. This is the same link as the `https://github.com/your_Username_Here/qccoders.github.io.git` above.
	-   This will download the entire qccoders.github.io repo to your folder.

3. Now using Git Bash change directories into the newly created folder on your machine: `cd qccoders.github.io`


### Configuring the Upstream

*What are these upstream instructions doing?*

Upstream is a way of keeping the files on your computer updated with any changes that take place in production. For instance, while you are making changes, someone else makes a pull-request that gets merged...Whoa? Wait! Pull-request? Merge? Let's explain these terms. A pull-request is simply someone requesting to make updates, fixes or changes to the dev server. A merge takes place when one of us accept the those changes onto the server later to be put into production. So, now your computer doesn't have the latest changes, so this is just what upstream does. Every time you use the fetch command (explained below), Git will check to make sure your files are the same as the production server.


1. Using Git Bash navigate to the directory where you previously cloned the new qccoders.github.io directory on your machine.
    -   Remember when this document said *"Make a note of where this location is"*? Yep, that's the location!

2. Add the upstream to the qccoders.github.io `master branch` repository:
	`git remote add upstream https://github.com/qccoders/qccoders.github.io.git`
    -   You can easily check which upsreams you have by: `git remote -v`
    -   Great! You are almost ready to contrubute to Q-C Coders!

3. To keep your local files updated just type: `git fetch upstream`
    **Note: You will want to run this command before you make any pull-request**

### Making Changes - Creating a New Branch

*What's with all these branches?*

Creating a new branch allows you to make changes to code without affecting any of your original branches. This allows the `master branch` and `dev branch` free of any changes. You want to keep these branches an exact replica of what is on production. The `dev branch` will be merged into the `master branch` every so often. So, you will create another branch for each feature/fix/update etc.

1. Make sure you're on the `dev branch`:
	Type in Git Bash: `git status`

	The Git Bash console should read:

    ```shell   
        > On branch dev
		> Your branch is up-to-date with origin/dev
        > nothing to commit, working tree clean
    ```

2. If you are not on `dev branch` or your working directory is not clean, type in Git Bash: `git checkout -b dev origin/dev`
    -   You can then run `git status` again and should see the above.

3. You can now create a branch off of the `dev branch`:
    `git checkout -b branch/name-here`

	**Note:** Branch naming is important. Use a name like
	    `fix/short-fix-description` or `feature/short-feature-description`.

4. Make your changes now and if you ever need to check to see which files have been changed, type into Git Bash `git status`


### Pushing Your Changes to GitHub

*Push, pull, what?*

You will now put the code from your local machine back into your local qccoders.github.io repository. Remember way back when you did that fork and it copied the production code from qccoders.github.io to your personal GitHub repository? Yep, that's where these changes will go. Then, in the next section you will make the pull-request.

1. Add your edited files:
	Add all of the files by `git add *`, or alternatively you can add files individually by `git add 'path_to_filename'`.

2. Commit your edits: `git commit -m <"brief description of the commit">`.
	
3. Push your commits to your GitHub Fork: `git push -u origin branch_name_here`


### Making a Pull Request

1. Now that your edited files have been committed, you will want to create a pull request on your GitHub Page.
    -  By default, all pull-requests should be towards the qccoders.github.io dev repo, `dev branch`.
    
2. Submit a pull-request (aka: PR) from **your** branch to Q-C Coders `dev branch`.
    
3. The title (also called the subject) of your PR should be descriptive of your changes.
    -   In the body of your pull-request include a more detailed summary of the changes you made.
	-  If the pull-request is meant to fix an existing bug/issue, then, at the end of your PR's description, append the keyword `closes` and #xxxx (where xxxx is the issue number). Example: `closes #10`. This tells GitHub to close the existing issue, if the PR is merged.
    
4. Once your PR is **accepted**, you may delete the branch you created to submit it.
	-   This keeps your working fork clean.

	-  You can do this with a press of a button on the GitHub PR interface under Branches. And also, you can delete the local copy of the branch with: `git branch -d branch/to-delete-name`
	
5. After deleting the branch, make sure you make a pull against the production code to keep your local files up to date: `git pull`


### Rejected Pull-Request

*Oh no! My pull-request was rejected, now what?*

If you still have a local copy of the branch you, you can make the requested changes and amend your commit with:

`git commit --amend -m <"brief description of the ammend">`  

This will update your existing commit. When you push it to your fork you will need to do a force push to overwrite your old commit: 

`git push`


## Advance Developer Steps

*A great Git cheat sheet can be found [here](https://services.github.com/on-demand/downloads/github-git-cheat-sheet.pdf)*

1. Fork the qc-coder repo
	
2. Clone the new fork to your machine
	
3. Add the upstream `git remote add upstream https://github.com/qccoders/qccoders.github.io.git`
    -   Maintain upstream by: `git fetch upstream`

4. Verify you're on `dev branch` and create a **new branch** for editing code
    
5. Push changes to GitHub
  
6. Submit a pull request to Q-C Coders `dev branch`
    
7. After your PR is merged, delete the branch and then `git pull` against production