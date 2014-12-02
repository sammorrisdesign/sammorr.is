sammorr.is
==========

It's my online portfolio. View the live version at [sammorr.is](http://www.sammorr.is).

## Requirements

* [Bundler](http://bundler.io). Install using `gem install bundler`.

## Usage

For first time usage, run `bundle install` to get the required Ruby dependancies like [Jekyll](https://github.com/jekyll/jekyll) and [Guard](https://github.com/guard/guard).

From then on use `bundle exec guard` to start Guard and watch for changes in sass and run Jekyll. When running locally, visit [Localhost:4000](http://localhost:4000) to view.

## Deployment

To deploy to the server, you'll need to get the following [this guide](https://www.digitalocean.com/community/tutorials/how-to-deploy-jekyll-blogs-with-git) However, you'll also need to add the following extra lines to the `post-receive` script
```shell
PUBLIC_WWW=/var/www/sammorr.is/public_html
SUBDOMAIN_FOLDER=/var/www/sammorr.is/subdomains/*
```

Then after the `jekyll deploy...` line
```shell
cp -R $SUBDOMAIN_FOLDER $PUBLIC_WWW
```

Locally run `git remote add deploy ssh://*********@***.**.***.**:*****/home/sammorris/repos/sammorr.is.git` for the first time. From then on use `git push deploy master` to push to server where a shell script will upload the `_site` folder to the correct location.

## Video Capture Process

Use [Reflector](http://www.airsquirrels.com/reflector/) to capture footage from iPad or iPhone.

Convert to webm (HD setting) and mp4 using [Miro Video Converter](http://www.mirovideoconverter.com/). Place exported files in `/assets/videos/` folder with file name being the handelised title of the post.