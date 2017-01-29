# Contributor's Guide


-------

The details below will get your system setup to start contributing to Q-C Coders.

#### *Advanced coder setup or TL;DR click [Advance Developer Steps](#advance-developer-steps)* 

## Junior Coders Start Here:

### Setup

*What are these setup instructions doing?*<br/>

These instructions will install Git on your machine. Git is just a version control program which will allow you to transfer files from your machine to GitHub and vice versa. Once installed, the Git program can be used by opening Git Bash. The next part is forking (copying) the existing code on GitHub to your local GitHub account. This allows you to work with the files without making changes to production code.

<ol>
	<li>Install Git from [here](https://git-scm.com/downloads)</li>
	<li>Open Git Bash and navigate to the folder you wish to save the project to.</li>
	<li>Open up a new browser or tab and go to the qc-coders repo: [Q-C Coders](https://github.com/QC-Coders/qc-coders.github.io)</li>
	<li>Click on the "Fork" button</li>
		*You now have the repo forked under your own GitHub account.
	<li>After the repository has been forked, you will be taken to your copy of the Q-C Coders repo at 
	`<yourUsername>/qc-coders.github.io`</li><br/>
</ol>


### Cloning

*What are these cloning instructions doing?*<br/>

Cloning is simply putting the code that you previously forked (copied to your own GitHub repo) onto your local machine. 

<ol>
	<li>Open Git Bash Shell and navigate to the location you're going to save this project locally.</li>
		*Make a note of where this location is as you will use it later.
	<li>Type or copy: `git clone https://github.com/<yourUsername>/qc-coders.github.io.git`</li>
	<ul>	
		<li>Make sure to replace `<yourUsername>` with your GitHub Username</li>
		<li>This will download the entire qc-coders repo to your projects directory.</li><br/>
	</ul>
</ol>

### Configuring the Upstream

*What are these upstream instructions doing?*<br/>

Upstream is a way of keeping the files on your computer updated with any changes that take place in production. For instance, while you are making changes, someone else make a pull-request that gets merged...Whoa? Wait! Pull-request? Merge? Let's explain these terms. A pull-request is simply someone requesting to push updates, fixes or changes to the production server. A merge takes place when one of us accept the those changes. So, now your computer doesn't have the latest changes, so this is just what upstream does. Every time you use the upstream command (explained later), Git will check to make sure your files are the same as production.

<ol>
	<li>Using Git Bash navigate to the directory where you previously cloned the new qc-coders directory on your machine.
	</li>
		*Remember when this document said 'Make a note of where this location is'? Yep, that's the location!
	<li>Add the upstream to the qc-coders production repo:<br/>
		`git remote add upstream https://github.com/QC-Coders/qc-coders.github.io.git`
	</li>
		
	<ul>Great! You are almost ready to contrubute to qc-coders!</ul><br/>
</ol>

### Maintaining your Fork

*Didn't I already do this?*<br/>

Remember, a long time ago when you forked the production repo and then cloned it. (Essentially, putting qc-coders into your own GitHub and then making a copy of the code on your computer). Then we setup that upstream so you can get the latest and greatest changes. Well, this is what you will need to do **every** time you wish to keep that code updated. Oh, you thought it was going to do this automatically? Nope! (Guess, you have another project to add to your list to make this happen!) The term used for all of this is called: rebasing. Yes, another terrible name.<br/>

So each time you want to update your code base or (*most importantly*) before making a pull-request, follow these steps below:<br/>

<ol>
	<li>Make sure you are on the `staging branch`<br/>
		<br/>
		*Note: If you have used Git/GitHub before you may have seen the word `master` used. `Master` is for your own projects. When you fork/clone a project, your code will reside on the `staging branch`.<br/>
		<br/>
		Type in Git Bash:<br/>

  		`git status`<br/>
		<br/>
		The Git Bash console should read:<br/>
		
		`> On branch staging`<br/>
		`> Your branch is up-to-date with 'origin/staging'`
		<br/>
		<br/>
		
		If you are **not** on staging, you can get on the staging branch by typing:**<br/>
		`git checkout staging`<br/>
	</li>
	<li>Peform the rebase<br/>
		`git pull --rebase upstream staging`
	</li>
	<li>Update your GitHub repo with this new rebase<br/>
		`git push origin staging --force`
	</li>
</ol>

### Changes Branch & Making Changes

*What's a branch?*<br/>

A changes branch is a way of making changes without affecting your `staging branch`. You want to keep your `staging branch` should remain an exact replica of what is on production. So, you will create another branch for each feature/fix/update etc. This allows your `staging branch` to stay 'clean' and free from any changes.

<ol>
	<li>Make sure you're on the staging branch:
	Type in Git Bash:<br/>

  		`git status`<br/>
		<br/>
		The Git Bash console should read:<br/>
		
		`> On branch staging`<br/>
		`> Your branch is up-to-date with 'origin/staging'`
		<br/>
	</li>
	<li>If you are not on staging or your working directory is not clean, type in Git Bash:
		`git checkout staging`
	</li>
	<li>Create a branch off of `staging` with git:<br/>
		`git checkout -B branch/name-here` <br/>
		<br/>

		**Note:** Branch naming is important. Use a name like
	    `fix/short-fix-description` or `feature/short-feature-description`.
    </li>
    <li>Make your changes now and if you ever need to check to see which files have been changed type into Git 		Bash `git status`
    </li>
</ol>

### Pushing Your Changes to GitHub

*Push, pull, what?*

You will now put the code from your local machine back into your local qc-coders repository? Remember way back when you did that fork and it copied the production code from qc-coders to your personal GitHub repository? Yep, that's where your changes will go.

<ol>
	<li>Add your edited files:
		Indivudually add files by `git add <path to filename>`, or alternatively you can add **all** of your edited files by `git add *`.
	</li>
	<li>Commit your edits: `git commit -m <"brief description of the commit">`.</li>
	<li>Push your commits to your GitHub Fork: `git push -u origin <branch name here>`</li>
</ol>

### Making a Pull Request
<ol>
	<li>Now that your edited files have been committed, you will be prompted to create a pull
    	request on your GitHub Page.

    	<ul>By default, all pull-requests should be towards the qc-coders dev repo, `dev
    branch`.</ul>
    </li>
    <li>Submit a pull-request from **your** branch to qc-coders `dev branch`.</li>
    <li>The title (also called the subject) of your PR should be descriptive of your
    changes.<br/><br/>
    In the body of your pull-request include a more detailed summary of the changes you
    made.<br/>

    	<ul>If the pull-request is meant to fix an existing bug/issue, then, at the end of
        your PR's description, append the keyword `closes` and #xxxx (where xxxx
        is the issue number). Example: `closes #10`. This tells GitHub to
        close the existing issue, if the PR is merged.</ul>
    </li>
    <li>Once your PR is **accepted**, you may delete the branch you created to submit it.
	This keeps your working fork clean.

	You can do this with a press of a button on the GitHub PR interface. And also, you can
	delete the local copy of the branch with: `git branch -D branch/to-delete-name`
	</li>
	<li>After deleting the branch, make sure you rebase against the production code to keep your `staging branch` up to date: `git pull --rebase upstream staging` </li>
</ol>

### Rejected Pull-Request

*Oh no! My pull-request was rejected, now what?*

If you still have a local copy of the branch you, you can make the requested changes and amend your commit with:
<br/> 
`git commit --amend -m <"brief description of the ammend">` 
<br/>
This will update your existing
commit. When you push it to your fork you will need to do a force push to overwrite your old commit:<br/> 
`git push --force`

## Advance Developer Steps
<ol>
	<li>Fork the qc-coder repo</li>
	<li>Clone the new fork to your machine</li>
	<li>Add the upstream `git remote add upstream https://github.com/QC-Coders/qc-coders.github.io.git`
		<ul>Maintain upstream by: `git pull --rebase upstream staging`</ul>
	</li>
	<li>Verify you're on `staging branch` and create a new branch for editing code</li>
    <li>Push changes to GitHub</li>
    <li>Submit a pull request to qc-coders `dev branch`</li>
    <li>After your PR is merged, delete the branch and then rebase against production</li>
</ol>




