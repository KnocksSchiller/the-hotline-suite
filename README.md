# The Hotline Suite
A Single Page Website, that teaches the many ins and outs of the Hotline Miami modding scene. Includes guides, places to talk, workshop dives, a lost and found section and "HLM-likes", which discusses similar games to Hotline Miami.

This website serves as a starting point into the modding scene for newcomers, but also as an archive of old content, that we managed to preserve.

The project is currently in development and I'm planning to deploy it soon, once all the features are fully implemented. (one last thing to check out with GitHub's role system and filling the site with content with the help from the community).

## Who's in charge and how this project is handled
This project was made and is currently maintained by Knocks Schiller. The content itself is a community effort made by the fellow contributors.
Contributions by the community get pushed and handled in the dev-branch. Once they're greenlit by the maintainer (i.e. Knocks), they get merged into the main branch.

### The fellow contributors:
 - your name here

## Technical details
This website uses the VueJS framework and is hosted by AWS in two S3 buckets, one for production (or live) and one for development, where we check our contributions first before releasing them. Pushing into the repository triggers a pipeline, which builds the project in a container and uploads it to their respected S3 bucket. The structure is slightly different to the local build but works nearly identical, only difference being the download button actually working.
"Lost & Found" entries are stored as a .zip file in a separate folder inside the S3 bucket(s) to keep the repository's size as small as possible. Each entry is added manually into the bucket's folder after being thoroughly checked by the maintainer.

## For contributers or those interested. 
If you're new to coding consider installing *node.js* into your device first. After that you pull this project by typing
```
git clone https://github.com/KnocksSchiller/the-hotline-suite.git
```
in an empty folder using either Cmd, Git Bash, Powershell, Cygwin, etc. (whatever works on your device).
This creates a local version of this project in your system, which is also connected to this Git repository.

### Project setup
Once you open your IDE / text editor (I prefer Visual Studio Code for this), type in
```
npm install / npm ci
```
into the terminal. This will install all the libraries you need to run this project.

### Test the website locally
Typing
```
npm run serve
```
into the terminal creates a local build of the project, which you can view in your browser of choice, both on PC and on phone. With this build you can test your changes locally without having to bother the team.

## 
