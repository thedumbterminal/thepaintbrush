# thepaintbrush

## Requirements

* [rbenv](https://github.com/rbenv/rbenv)
* Bundler

## Running locally

* Install ruby: `rbenv install 2.7.2`
* Rehash shims: `rbenv rehash`
* Clone the repo
* Change into the directory
* Install bundler: `gem install bundler`
* Install gems: `bundler install`
* Rehash shims: `rbenv rehash`
* Start the server: `jekyll serve --livereload`
* Then visit:

[http://localhost:4000/](http://localhost:4000/)

## Shop books

To download all the images in the `_data/books.json` and save them locally run:

````
ruby scripts/create_book_images.rb
````
