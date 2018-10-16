# Skeleton node.js app
The purpose of this app is quickly test out container services that you may be
interested in testing such as spinning up containers on EC2 instances, Elastic
Container Service using Fargate, Elastic Kubernetes Service etc.

### Build & Run
If you want to build locally:
```
docker build -t neelypatel/basic-node-app .
```
or you can pull the latest image:
```
docker pull neelypatel/basic-node-app
```
To run it:
```
docker run -d --name basic-node-app -p 3000:3000 neelypatel/basic-node-app
```
Go to `localhost:3000` to see the message. You can also do a healthcheck at `localhost:3000/healthcheck`.

### Upcoming features
* docker-compose
* instructions and config for deploying to various AWS services and GCP services
* kubernetes related instructions and config
* more REST API endpoints and a database
* automated testing and CI environment

### dockerhub page
https://hub.docker.com/r/neelypatel/basic-node-app
