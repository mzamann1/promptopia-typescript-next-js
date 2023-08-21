
# Promptopia

**Description:**
Unlock the power of seamless user interaction with PromptOptia - a cutting-edge Next.js and React project with TypeScript support!

Tired of writing prompts? and forgetting promts after using it? Promptopia got a solution for you. Users can see communities saved prompts with tag specific filtering, also view other user's profile and their prompts.

A basic project to store your AI prompts with tag, and retreive it at ease.

🚀 **Elevate Your Web Experience:** PromptOptia is your gateway to crafting extraordinary web applications with speed and precision. Our project is built on the rock-solid foundation of Next.js and the versatility of React, enhanced by the type safety and clarity of TypeScript.

🌟 **Key Features:**

1. **Next-Level Performance:** Say goodbye to sluggish web apps. PromptOptia leverages Next.js to provide lightning-fast load times and optimized server-side rendering, ensuring your users get the best experience.

2. **Interactive UI:** With React at its core, PromptOptia empowers you to create dynamic and engaging user interfaces. Harness the power of reusable components for efficient development.

3. **TypeScript Brilliance:** Eliminate bugs before they happen! TypeScript brings type safety to your codebase, making it easier to catch and fix errors, ultimately speeding up development.

4. **SEO-Friendly:** Rank higher on search engines with Next.js's automatic SEO optimization, ensuring your content is easily discoverable.

5. **Customizable Styling:** Tailor the look and feel of your project with ease, thanks to the flexibility of CSS-in-JS, styled-components, or your preferred styling solution.

6. **Scalability:** Whether you're building a small personal site or a complex enterprise application, PromptOptia scales effortlessly to meet your needs.

7. **Open Source:** Join the community of developers contributing to PromptOptia's growth. Collaborate and share your ideas with like-minded individuals.

🔗 **Get Started:**
Ready to supercharge your web development journey? Clone PromptOptia from GitHub, and dive into the world of lightning-fast, interactive web applications.

📚 **Documentation:**
Access comprehensive documentation to guide you through every step of building with PromptOptia. From setup to deployment, we've got you covered.

🤝 **Contribute:**
We believe in the power of collaboration. Join us in making PromptOptia even better by contributing to our open-source project.

📈 **Stay Updated:**
Keep pace with the latest updates and enhancements to PromptOptia by following our GitHub repository and joining our vibrant community.

Embark on your web development adventure with PromptOptia today, and let your creativity flourish like never before! 💡


---


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Demo

Coming soon


## Features

- Google Authentication with NextAuth
- Retrive relative prompts by tags (clicking tags on prompt cards)
- Store/Retrieve your prompts with ease
- View other's prompts
- Search prompts from search bar (coming soon)

## Run Locally

Clone the project

```bash
  git clone https://github.com/mzamann1/promptopia-typescript-next-js.git
```

Go to the project directory

```bash
  cd promptopia-typescript-next-js
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


## Roadmap

- Making prompts public/private

-  Add more authentication options

- Dark/light mode


## Tech Stack

**Client:** React, Typescript, TailwindCSS

**Server:** Next.js, MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`GOOGLE_ID`
`GOOGLE_CLIENT_SECRET`
`MONGODB_URI`
`NEXTAUTH_URL`
`NEXTAUTH_SECRET`


## API Reference


#### Get Prompts

```http
  GET /api/prompt
```



#### Get Prompt

```http
  GET /api/prompt/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of prompt to fetch |


#### Update Prompt

```http
  PATCH /api/prompt/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of prompt to fetch |


| Request Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prompt`      | `string` | **Required**. prompt text |
| `tag`      | `string` | **Required**. tag associated with prompt |



#### Delete Prompt

```http
  DELETE /api/prompt/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of prompt to delete |



#### Get Prompt By Tag

```http
  GET /api/prompt/public/${tag}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `tag`      | `string` | **Required**. prompts with provided tag of all users to be searched  |


#### Get Prompts of current(logged in user)

```http
  GET /api/users/${id}/posts
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. logged-in user id |



#### Create new prompt

```http
  POST /api/prompt/new
```

| Request body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `string` | **Required**. Id of logged in user |
| `prompt`      | `string` | **Required**. prompt text |
| `tag`      | `string` | **Required**. tag associated with prompt |



## Acknowledgements

 - JS Mastery helped me building this code (https://www.jsmastery.pro/)

