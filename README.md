Hello everyone,

This documentation will show you the deployment process, starting from registration on the Netlify website, the process of connecting Netlify with the Github project, deploying the project to netlify, and testing the deployment by making a pull request to the main branch and merging it afterwards.

After that, there are steps to buy a .site domain on Niagahoster, then connect it to Netlify and Domain with Cloudflare foe make a custom domain on Netlify.

Furthermore, there is an explanation section about this website and the developer of this website as well.

# Table of contents
* Git and Github
* Netlify
* Niagahoster
* Cloudflare
* Custom Domain on Netlify with Niagahoster and Cloudflare
* About Website
* About Me

# Git and Github

Before going further into this documentation, there are a few things to do first on Git and Github.

1. Take the files in the previous project, on the old github repository using git clone and move them to the new local repository.

![git-clone](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/422f90c8-259c-4b31-bf8b-63094f76b0f2)

2. Resetting the old remote repository in the new local repository with the new remote repository, with git remote set-url origin "yourcloneurl".

![git-set-new-repo](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/ac897cfe-23b4-4304-9455-64fabcedbdd9)

3. Create a new branch on the new local and remote repository.

![git-new-branch](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/012f5a3d-c69e-498e-9aa3-aa26ce8cfe8a)

4. Switch to the newly created branch from the main branch, with git checkout "branchname".

![git-new-branch-local](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/6b3b5fef-d72b-42fd-a264-f92db384e074)

5. Push all the files in the local repository to the remote repository using git push origin "branchname".

![git-push-suryftr](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/1dc053f7-3029-496f-9e9b-fda3de7b2b39)

6. After that you can make a pull request to main branch and merge it.

# Netlify 

## Register to Netlify
1. Visit Netlify webite on https://www.netlify.com/ and Click Sign Up

![netlify-site](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/8c973bec-01b9-426f-b161-54d170a30e5a)

2. Choose your Sign Up method

![netlify-sign-up](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/6762016c-4728-4ee6-95bf-294b4fd4ecf1)
![netlify-sign-up-wt-mail](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/348273c0-e983-4d0f-93b8-20f4f0c16c05)

3. Now you have registered to Netlify
![netlify-user-dashboard](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/579636c4-fceb-464e-871e-7c159467ef2b)

## Add new site to your netlify account
1. Choose Sites Menu and Click on Add new site

![netlify-add-new-site](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/bec4447b-ed22-4638-9cca-a90fefd083f1)

2. Choose your Git Provider to connect it on netlify

![netlify-deploy-project](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/0f74826f-89ad-4df9-874a-aabebaa8d8a3)

3. Pick your repository project, that you want to deploy

![netlify-pick-repo](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/f3a288cf-c2b0-4859-8e3f-530797b1b13b)

4. Review configuration for your deploy project, such as choose branch that you want use, and many more, after that Click Deploy "yourrepositoryname"

![netlify-deploy-config1](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/a38798a4-05af-404d-b27c-a4204d2db84e)
![netlify-deploy-config2](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/8f2c1577-fe08-4419-a0a8-7848608b2f96)

5. Now your website has been deploy on Netlify, to check it you can click the link above, that it will generate automatic from Netlify system

![netlify-site-is-deployed](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/4ab187b3-948f-4919-9572-309b5e8b7849)

6. You can change your website name on Site configuration menu, and Click "Change site name"

![netlify-change-site-name](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/180e75ce-2207-4ca4-ab8e-cda3d6044864)

# Niagahoster

1. Visit Niagahoster webite on https://www.niagahoster.co.id/ and choose menu domain, after that choose check domain

![niagahoster-site](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/587853ff-f4a0-43e7-bd1f-4b91a73ec217)

2. On search form, type your site name and the domain name you wanna use, after that Click Check Now, to make sure your site name and domain name is available, not currently used

![niagahoster-cek-domain](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/f3fa49b1-5a58-43eb-ba60-e085ddf220a0)

3. If it available, next you can choose the duration, and go to next steps

![niagahoster-after-cek](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/997896a2-66eb-44b8-926c-b1cc09f3def8)

4. Checkout your site payment, you have to sign up / login to your Niagahoster accont first, before you continue your payment

![niagahoster-chart-cekout](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/fa29fa67-bf40-4851-958b-f511602dce23)

5. Now you have your account and your domain site service has active

![niagahoster-domain-has-active](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/8d3ee2e2-167a-474e-a2b2-941f7a603a04)

# Cloudflare

## Register to Cloudflare
1. Visit Cloudflare webite on https://www.cloudflare.com/ and and Click Sign Up

![cloudflare-site](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/5f868936-7656-4136-b339-0dbb20c391c6)

2. Enter your email and password for your account, after that Click Sign Up

![cloudflare-sign-up](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/ef9a3fa9-3eff-4f23-9483-0a6b1d8bc687)

3. Now you you have a your Cloudflare account, to continue Click "Add a website or application"

![cloudflare-sign-up-success](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/cb517691-77c7-4a49-b8cc-7a51b2707ad2)

## Add site to Cloudflare
1. Enter your site name and domain, use it from site on Niagahoster that you have create and buy before with your account, and after that Click "Add site"

![cloudflare-add-site](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/06c82bde-8765-4c39-951f-cbf7b9c6d4b4)

2. Choose your plan for your site, on this case you can choose "Free" plan, and Click "Continue"

![cloudflare-choose-plan](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/33e21af5-ce1c-4da6-8ff8-889ce8fd9a52)

3. The Cloudflare will scan and generate new DNS for your site, after the scan is complete you can Click "Continue"

![cloudflare-dns-scan-complete](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/187ebcd1-9fb8-4f91-8f52-94a965538092)

4. Change your nameservers, Log in to your administration account for your domain registrar (on this case, your Niagahoster account and choose to your site that you enter on cloudflare before, and Click "Manage Service") 

Add and copy your Cloudflare's nameservers
![cloudflare-change-nameserver](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/5fd8ea86-c433-4143-9b75-cb1dc553ba47)

5. Choose on your account Niagahoster "Manage Service", scroll down to "Overview Domain" section, choose to Update Nameservers, and Paste  your Cloudflare's nameservers before on default Niagahoster, change Nameserver 1 and Nameserver 2 with it, and save it
![niagahoster-change-nameserver](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/66596b65-0945-4463-8e7f-3df028d6d259)

6. After change/update your Niagahoster's nameservers with your Cloudflare's Nameserver, back to your Cloudflare account and save your change by Click "Done, check nameservers"

7. Registrar can take 24 hours to process nameservers update. You will receive an email when your site is active on Cloudflare

Pending Nameserver Update
![cloudflare-pending-nameserver](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/16a3d210-cb39-4d5e-a291-5e9c8e07f9d0)

Email notification your site has active on Cloudflare
![cloudflare-active-notif](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/22fb7735-c182-425f-8cfc-afc2382a95ac)

8. On Quick Start Guide, you can configure your domain settings to improve security, optimalize performance, and get the most from your account

![cloudflare-quick-start](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/071ec64d-a641-40a8-bd5c-47fd390f55c3)

9. On "DNS" menu you can find section "DNS managenment for your site", by Click "Add Record" you can add the DNS record (in this case, you can add the default name and domain site on your Netlify deploy project) and Save it

This DNS record is usually used when you want to connect one or more subdomains to the main domain.
![cloudflare-dns-manage1](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/cfe19172-3df7-417b-868a-96410d8b4505)
Canonical Name, otherwise known as CNAME is a type of DNS record that is used to create an alias for the domain or subdomain that you own.

# Custom Domain on Netlify with Niagahoster and Cloudflare

1. On your deploy website project, choose menu "Site Configuration" and go to "Domain management" you can custom and add new domain (in this case is your domain that you has been already create and buy it from Niagahoster and it's already connect to Cloudflare nameservers)

![netlify-add-custom-domain1](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/74ea94bf-bedb-4b8d-8058-1930c2d41014)
![netlify-add-custom-domain2](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/2a10bd74-c26e-401f-99bd-896e15472577)

2. Now you have a new domain custom

![netlify-custom-domain-active](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/055ccf32-4e92-4fb3-bf4f-4c2408ee205b)

3. Make sure you already have add a DNS record on "DNS" menu in Cloudflare, you have receive an email notification that your site is already active on Cloudflare

![cloudflare-dns-manage2](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/21ba8976-fa89-4610-b44e-1fa433db1c6a)

4. Preview (Opening your website using link original namesite and domain on Netlify)

![netlify-origin-domain-preview](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/1f7d5803-9d90-4fda-b08f-3ac1b91f5a2d)

5. Preview (Opening your website using link custom namesite and domain on Netlify with connect Niagahoster and Cloudflare)

![netlify-cutom-domain-preview](https://github.com/RevoU-FSSE-2/week-4-SuryaFtr/assets/127850712/64dbd4ea-ecb7-47a6-af83-b2cf20cba179)

# About Website

Banana Dish Recipe Website (Banana Chef New Version) is the new website version that develoved from the old version of this website before.

The content of this website, is to show a recipes for how to make banana dishes, which are accompanied by a video tutorial demo recipe for making banana dishes.

##  The language used on this website

1. HTML
2. CSS
3. Javascript

## The skills are used in making the previous version of this website

1. Build webpage using a correct semantics for each elements
2. Applying responsive design with media query
3. Creating form set that includes input text, textarea, submit button, and one of radio buttons, checkboxes, and select
4. Centering element using Flex
5. Creating a Fixed or Sticky Nav Header

## Additional skills are used in making the New Version of this website
1. Applying custom font using @font-face
2. Applying text-shadow to text
3. Applying 1 responsive background image (using contain or cover)
4. Applying 1 responsive image with picture + source + srcset method
5. Creating one Asymmetrical Grid
6. Using advanced form element (date, color, local date, range picker) and make it has correct form attributes as it desired
7. Creating simple animation with two method, animation and transition

## (Old Version)Some content and functions interaction on this website that need attention

This website is a one-page website, where the menu links and some buttons on this website will not work as they should.

However, there are several interaction functions that must be considered on this website.

### 1. The function of the hamburger icon button

At the top right of the website there is an image of a hamburger icon, which will appear when opening this website at a screen resolution of less than 1024 pixels. Or the device used to open this website is a mobile device. Which image is a button that will trigger a function to display hidden navigation menu (navbar) content on the left side of the website, when the button is clicked.

### 2. The radio button selection function, in the content for filling out a form

In the content section for filling out a form, at the bottom of the website, there is an inquiry form providing 2 radio button form options. Which answer choice from the form radio button will affect the content of the next form filling.

## (New Version)Some content and functions interaction on this website that need attention

### 1. Responsive image

In the 'most favorite banana dish' section there is a responsive image with the 'image+ source+ srcset' method.
Which image will have a different perspective and a more focused image, at a mobile resolution of 320 pixels to 425 pixels.

### 2. The animation and transition

There is an animation and transition function using CSS, namely in the header title section using the 'animation' method and in the image section the types of bananas use the 'transition' method

### 3. Asymmetrical Grid

In the image section of the types of bananas, use 'display: grid' in the CSS style, where the grid dimensions used are 4 columns and 3 rows.
At a mobile resolution of 375 pixels to 767 pixels, the grid dimensions will change to 2 columns and 4 rows.
At a mobile resolution of 320 pixels, the grid dimensions will change to 1 column and 1 row.

## Website Layout
Website link (Primary-Domain) : https://suryaftr97.site

Website link (Netlify Sub-Domain) : https://sfrbancef.netlify.app/

# About Me

![Surya Faturohman Photo](https://i.ibb.co/2S8gZvr/suryaftr-pic-1.png "Surya Faturohman Photo")

RevoU FSSE Section Barcelona 

Team 6

"I am from Bogor and the graduated student of a high school majoring in software engineering class on 2015 and also a graduate of Pakuan University majoring in computer science on 2022."

"My motivation to join RevoU was to return to my former soul and enthusiasm, to code a program and upgrade my skills more in the field of software engineering."

## Contact Me
Phone : 0838 1142 2863

E-Mail : suryafaturohman@gmail.com

LinkedIn : https://www.linkedin.com/in/surya-faturohman/


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/6H2sAzcR)
