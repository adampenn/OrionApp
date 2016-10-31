#!/bin/bash

url1="http://theorion.com/wp-json/wp/v2/posts?categories="
url2="&filter[posts_per_page]=4"
for i in {1..5000} 
do 
	content="$(wget "$url1$i$url2")"
done
