Solution Documentation
======================

## Table of Contents

- Hipages - Full Stack Engineer Tech Challenge
    - [Overview](#overview)
    - [Technical Overview](#technical-overview)
    - [Getting Started](#getting-started)
    - [API Document](#api-document)
        - [1. All Leads](#1-all-leads)
        - [2. Update Status](#2-update-status)
    - [Business Requirements](#business-requirements)
    - [Conclusion](#conclusion)

---

## Overview

This service in test provides the restful APIs to get all leads to show, accept or decline it from the invited leads.
I have fully used the provided boilerplate from Hipages.

Please refer to the [API Document](#api-document) for the API details and [Business requirements](#business-requirements)

## Technical Overview

`Backend Technical Stack`

Here are lists of my choices for this project as follows:

- [Node js v10.15](https://nodejs.org/)
- [Typescript v3.2.2](https://www.typescriptlang.org/)
- [Express v4.16.4](https://expressjs.com/)
- [TypeORM v0.2.29](https://typeorm.io/)

I have experience using [Sequelize](https://sequelize.org/) before, 
however, I used TypeORM in this project because I wanted to try out a new ORM which I am unfamiliar with. 

`Frontend Technical Stack`

For the frontend, Here are my lists as follows:

- [React v17.0.1](https://reactjs.org/)
- [Material UI v4.11.0](https://material-ui.com/)

React is the one I chose however, I have many years of experience using AngularJS and Angular 8.

## Getting Started

```shell
$ git clone https://github.com/xyzcocktail/hipages-fullstack-assessment.git 
$ cd hipages-fullstack-assessment
$ docker-compose up -d (RUN) 
$ docker-compose down (STOP)
```
- In the Docker env, I have set it to the localhost with the port 3000, you can access at [http://localhost:3000](http://localhost:3000)

---
## API Document

- Request Head

| property     | value              | type   | required |
| ------------ | ------------------ | ------ | -------- |
| Content-Type | `application/json` | string | required |

### 1. All Leads (or filtering with Ids)

#### Request
- [GET] /api/jobs/:id

#### Params
- id : number (option)

#### Response example
```JSON
{
  "message": "Successful",
  "type": "IJobsDetails",
  "data": [
    {
      "id": 1,
      "status": "new",
      "suburbId": 1,
      "categoryId": 1,
      "contactName": "Luke Skywalker",
      "contactPhone": "0412345678",
      "contactEmail": "luke@mailinator.com",
      "price": 20,
      "description": "Integer aliquam pulvinar odio et convallis. ",
      "createdAt": "2020-12-15T17:18:00.000Z",
      "updatedAt": null,
      "suburb": {
        "id": 1,
        "name": "Sydney",
        "postcode": "2000"
      },
      "category": {
        "id": 1,
        "name": "Plumbing",
        "parentCategoryId": 0,
        "parentName": null
      }
    },
    ...
  ]
}
```

### 2. Update Status

#### Request
- [PUT] /api/jobs/:id

#### Params
- id : number (required)

#### Body
| property   | value           | type         | required              |
| ---------- | --------------- | ------------ | --------------------- |
| status     | accepted        | string       | accepted or declined  |

#### Example
```json
{
  "status": "accepted"
}
```

#### Response Example
```JSON
{
  "message": "Successful",
  "type": "IJobsDetail",
  "data": {
    "id": 1,
    "status": "accepted",
    "suburbId": 1,
    "categoryId": 1,
    "contactName": "Luke Skywalker",
    "contactPhone": "0412345678",
    "contactEmail": "luke@mailinator.com",
    "price": 20,
    "description": "Integer aliquam pulvinar odio et convallis. ",
    "createdAt": "2020-12-15T17:18:00.000Z",
    "updatedAt": "2020-12-15T17:19:00.000Z",
    "suburb": {
      "id": 1,
      "name": "Sydney",
      "postcode": "2000"
    },
    "category": {
      "id": 1,
      "name": "Plumbing",
      "parentCategoryId": 0,
      "parentName": null
    }
  }
}
```

## Business Requirement

Create a lead management UI for a tradie. This should be presented as a single page application (SPA) using a modern JS framework.

1. Invited Tab
    - The first view you need to create is the Invited tab, which contains all leads in the new status.
    - As you can see in the screenshot, each lead is a card in a list which contains the following pieces of information:
        * Contact first name
        * Date created
        * Suburb
        * Category
        * ID
        * Description
        * Price
    - Along with that information you can see two buttons: Accept and Decline
        * Upon clicking on Accept, the lead must be updated to the accepted status in the database
        * Upon clicking on Decline, the lead must be updated to the declined status in the database

2. Accepted Tab
    - The second view you need to create is the Accepted tab, which contains all leads in the accepted status.
    - As you can see in the screenshot, the lead cards follow a similar format and contain some additional data:
        * Contact full name
        * Contact phone number
        * Contact email

   ### Notes
    * For the icons in the UI, you can use something like font-awesome or SVG icons, whatever you choose.
    * There are jobs already loaded into the database

## Conclusion

While I have been in this challenge, I didn't have any problem completing this task.
I chose some of modern js framework in the description.

Just one thing I haven't been cleared, there was a bit of confusion in the READ.me where the first name 
in the "Invited" tab would only show the "first name", whereas the "Accepted" tab shows an additional information 
which requires the full name from the DB column "contact_name".

It is obviously better if we could separate this one named column into two or have two more extra name fields 
like "first_name" and "last_name". 

We could consider few enhancements if more time was allowed:

1. I have added a little of unit testing on the backend side using Jest. 
   I would build more stable system using TDD and BDD since there will be less risk caused in the system.
2. State changes - there is no indication of (confirm modal) any of ongoing process or event triggered.
3. It would be better to have a proper pipelines in CI/CD process with automation.
4. We might need to consider the vulnerabilities of API and add more secure layer and test env in the pipeline to check.

Overall, I have been cleared myself and have tried myself to understand what was the purpose of this test.

I hope everything I did is accurate and comprehensible 

I really enjoyed taking this task :) 

Thank you. 








