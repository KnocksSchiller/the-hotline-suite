# The Hotline Suite
A Single Page Website, that teaches the many ins and outs of the Hotline Miami modding scene. Includes guides, places to talk, workshop dives, a lost and found section and "HLM-likes", which discusses similar games to Hotline Miami.

This website serves as a starting point into the modding scene for newcomers, but also as an archive of lost content, that we managed to preserve.

The project is currently in development and is currently visible in its [dev domain](http://dev.the-hotline-suite.com).

## Who's in charge and how this project is handled
This project was made and is currently maintained by Knocks Schiller. The content itself is a community effort made by the [fellow contributors](https://github.com/KnocksSchiller/the-hotline-suite/wiki/The-Fellow-Contributors).

Contributions by the community get pushed and handled in the `dev-branch`. Once they're greenlit by the maintainer, they get merged into the main branch and therefore to the production-site.

## For contributers or those interested. 
This is the short version for those, who are already familiar with GitHub and coding in general. For a more thorough and accessable rundown see **[the contributor's guide](https://github.com/KnocksSchiller/the-hotline-suite/wiki/Contributor's-guide)**.

### The short version

Once you're added as a collaborator of this repository, and you're familiar with either this working environment or with coding in general, simply clone this repository with
```
git clone -b dev https://github.com/KnocksSchiller/the-hotline-suite.git
```
and checkout to a new branch with
```
git checkout -b dev-myBranch
```
(myBranch being a placeholder). After that, install the necessary Node.js libraries with
```
npm install
```
You can test the site and / or your changes with
```
npm run serve
```
which creates local build of the project. You can view the build in your browser of choice, both on PC and on phone.

Should you run into any problems, either contact the maintainer of this site or read the aforementioned contributor's guide.

## Technical details
This website uses the Vue.js framework and is hosted by AWS in two S3 buckets. Pushing and merging into the repository triggers a pipeline, which builds the project in a container and uploads it to their respected hosting environment. The structure is slightly different to the local build but works nearly identical, only difference being the download button in `Lost & Found` actually working.
Lost entries are stored as a `.zip` file in a separate folder inside AWS to keep the repository's size as small as possible. Each entry is added manually into the bucket's folder and publicly available for download after being thoroughly checked by the maintainer.