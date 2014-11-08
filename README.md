sammorr.is
==========

It's my online portfolio.

## Requirements

* [Bundler](http://bundler.io). Install using `gem install bundler`.

## Usage

For first time usage, run `bundle install` to get the required Ruby dependancies like [Jekyll](https://github.com/jekyll/jekyll) and [Guard](https://github.com/guard/guard).

From then on use `bundle exec guard` to start Guard and watch for changes in sass and run Jekyll. When running locally, visit [Localhost:4000](http://localhost:4000) to view.

## Upload

Locally run `git remote add droplet user@**.***.***.**:repos/sammorr.is.git` for the first time. From then on use `git push droplet master` to push to server where a shell script will upload the _site folder to the correct location.

## Video Capture Process

Use [Reflector](http://www.airsquirrels.com/reflector/) to capture footage from iPad or iPhone.

Convert to webm (HD setting) and mp4 using [Miro Video Converter](http://www.mirovideoconverter.com/). Place exported files in `/assets/videos/` folder with file name being the handelised title of the post.