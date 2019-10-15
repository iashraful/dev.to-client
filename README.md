## [dev.to](https://dev.to) client [Demo](https://dev-to-client.netlify.com)
> A dev.to API based client application for blogging

## How to run on local machine?
* Fork this repository
* Clone it from your fork
* Open `user-config.json` file and update according to your blog configuration. i.e:  
* * "dev__to_username" is you dev.to handle/username/login name.
* * "twitter_username" is your twitter username
* * "disqus_shortname" is disqus shorname or discuss comments url prefix.

* Run `$ npm install`
* Run `$ npm run serve`  
**Also you can try with the docker.**

## Deploy to VPS/any machine
* I have included the docker file already. So, you can try with docker.

#### Docker Process
* RUN `sudo docker build -t iashraful/dev.to-client .`
* RUN `sudo docker run -it -p 5000:80 --rm --name dev.to-client iashraful/dev.to-client`  
**You can customize the port if you need. I that case, you must need to allow the post for tcp/ip connection**

#### Traditional Process
* Run `$ npm install`
* Run `$ npm run build`
* Now tell your web server to serve from `dist/` directory.  
**You must remember to forward every request to `/index.html`. 
Because this app handles routing with [Vue Router](https://router.vuejs.org/).**  

**And of course, You want to update anything please send a PR to my repository. :)**