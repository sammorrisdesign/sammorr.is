sammorr.is
==========

It's my online portfolio. View the live version at [sammorr.is](http://www.sammorr.is).

## Requirements

* [Bundler](http://bundler.io). Install using `gem install bundler`.

## Installation

For first time usage, run `bundle install` to get the required Ruby dependancies like [Jekyll](https://github.com/jekyll/jekyll) and [Guard](https://github.com/guard/guard).

## Usage

From then on use `bundle exec guard` to watch for changes to the SASS and to run Jekyll. When running locally, visit [Localhost:4000](http://localhost:4000) to view.

## Deployment

If this is the first time deploying to the server, you'll need to set up a few things remotely. Install the correct version of `Jekyll` on the server with `gem install jekyll -v 2.50`.

Then you'll need to run the following commands from your user's home folder.

```
mkdir repos && cd repos
mkdir sammorr.is.git && cd sammorr.is.git
git init --bare
cd hooks
```

Inside the `/hooks` folder you should upload the [`post-receive`](https://github.com/sammorrisdesign/sammorr.is/blob/master/post-receive) script. Give the file permissions with `chmod +x post-receive`.

Locally, you can now setup the git droplet with `git remote add deploy ssh://*********@***.***.***.***:**/home/sammorris/repos/sammorr.is.git`. From then on you can run `git push droplet master` locally to deploy the site.

If you do not see an update, confirm the `post-receive` script is working by running `sh post-receive` within the `~/repos/sammorr.is.git/hooks` folder.

## Video Capture Process

Use [Reflector](http://www.airsquirrels.com/reflector/) to capture footage from iPad or iPhone.

Convert to webm (HD setting) and mp4 using [Miro Video Converter](http://www.mirovideoconverter.com/). Place exported files in `/assets/videos/` folder with file name being the handelised title of the post.