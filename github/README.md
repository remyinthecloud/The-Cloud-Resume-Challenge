# The-Cloud-Resume-Challenge

For this project I followed "The Cloud Resume Challenge", specifically the AWS route. I chose AWS for my cloud provider as this is the cloud provider I've been studying since starting my journey in cloud. Plus this is the provider of choice of my current employer, which is an added benefit.

I didn't only want to follow the project outline but I also wanted to add my own twist to it. Which I believe makes this a great project especially for beginners, as it was meant to be looked at in this way, in my personal opinion. 

# Main Learning Goals
- [x] Create the website using **React** and **Javascript**. I want to learn more front end development and react is a widely popular tool used in the **front end development** world. Along with js
- [x] Add the live counter detailed in the project guidelines. I really want to implement this as it will enhance my js skills but more importantly allow me to create an **API** via **API Gateway in AWS**.
- [x] Piggy Backing off of the last goal, this will allow me to use **Python** Code in a **Lambda function** that will update a **Dynamo DB** table everytime someone visits my website and display that in the frontend. So everytime someone hits my website domain they inturn make the API call that triggers the Lambda function and updates the "view" count in **Dynamo DB**. 
- [x] Use an **S3 bucket** to host my static website
- [x] Use **CloudFront** to secure my website. *http --> https*
- [x] Use **Route53** to point a custom **DNS domain name** to the CloudFront distribution. (*remyinthecloud.com*)
- [h] Use **nodejs** specifically a framework called **cypress** and python to write custom tests for my website. Cypress will allow me to **test locally** to ensure my website meets my specific parameters set to ensure full functionality.
- [x] Implement **Source Control** using **Github** so everytime an update is made and pushed to this github repo, my web files that lie in my S3 bucket are updated automatically.
- [ ] Split the back end and front end code in this GitHub repo and use **GitHub Actions** to make the automatic deployments more seamless vs CloudFront.
- [ ] Create a **blog** documenting my journey
