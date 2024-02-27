# Driver's License Scanner

This web app allows a user to quickly scan the barcode on the back of their US driver's license and extract data from it. This can be tricky if the user webcam/camera is low enough quality. After enough failed attempts, the application will prompt the user to simply enter their information manually.

## To-Do

-   Polish UI/UX
-   Install jsdom & build out tests.

## Technologies

![React](https://img.shields.io/badge/frontend-react-61DBFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/frontend-ts-blue?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/frontend-tailwind-00C4C4?style=flat&logo=tailwindcss)
![ESLint](https://img.shields.io/badge/linter-eslint-4B32C3?style=flat&logo=eslint)
![Prettier](https://img.shields.io/badge/formatter-prettier-F8BC45?style=flat&logo=prettier)
![Vitest](https://img.shields.io/badge/specs-vitest-yellow?style=flat&logo=vitest)
![Vite](https://img.shields.io/badge/build-vite-A855F7?style=flat&logo=vite)

## Technology Choices

I hunted down a nice community Vite template that was a good starting place for how I envisioned the project being it featured most of the following (aside from the task-specific libraries):

-   **React:** I chose this because it is what ReMatter uses: there could be potentially better choices, but it is well-documented, well tolerated, and accessible.
-   **TailwindCSS:** Time is of the essence and Tailwind allows for me to spend less time putzing around with the cascade and more time crafting something decent.
-   **Vitest & Husky:** While I do not have many/any tests implemented, this workflow is huge to ensuring no disaster commits go out.
-   **TypeScript:** Not much to say: JS with guardrails. If I remember correctly, this is also in use at ReMatter.
-   **ZXing:** While the JS port is a little less documented, it is super well-tolerated and maintained. Barcode scanning is typically more reliable than OCR.
-   **react-webcam:** This was a harder choice, but react-webcam abstracts away some of the finicky parts of media streams, handles some compatibility, and is generally easy to use. That being said, it still allows a fair degree of access to the media constraints when spinning up a media stream. As far as I know, it is a little better maintained than react-camera-pro, but that's just anecdotal/observation.

### Hosting
To keep things simple, I just chose Vercel to host the [the live app](https://dl-scanner.vercel.app/). Fast and effective made sense for this type of project, but for a full production app that would likely change.

## Architecture

I could see myself changing some of the details based on implementation, but the skeleton is good. One component of that is not knowing how the information is going to be used/passed along. I'll break my decision making process down for now though.

-   I chose to forego using any router and make it an SPA. This has more to do with scope and lack of context: in reality and production, I assume this itself would be a route in a project.
-   Likewise, the two components used in the main app, "Camera" and "LicenseResults" are focused for the singular use of this app. With minor modifications they could be made more flexible and broken out further.
-   Additionally, with a little more scoping, I would break the hooks out into their own subdirectory.
-   As far as handling the DL data, I chose to store it in a form: without commiting to a form

In summary, the general sketch of the architecture is solid, but there is definitely room for some polish.

## Why use the PDF-417 barcode reader? Why not use Tesseract.js OCR?

Pretty simple: AAMVA standardization on barcodes means parsing the data through the barcode will be reliable, accurate, and fast. All of the issues I encountered were amplified by Tesseract.js and for the scale of the time-frame and the requirements, barcode scanning is difficult.

The catch is that you are at whims of the camera quality, the user's lighting, etc: The benefit here is that it is an all or nothing approach: a PDF-417 scans and passes it's Checksum evaluation or it doesn't. Considering one of the key points made in the assignment was the value of accuracy, this greatly informed my decision. Finally, I firmly believe that with a little more time and research I could solve some of the finicky nature of the scanning. UI/UX hints could guide the user to take a better picture. I also considered (a little too late unfortunately) that ZXING can accept a media stream and continuously scan it for the PDF-417 barcode. Depending on how CPU intensive that process is, it could be a really great pathway forward: essentially, just have the use hold the camera over the barcode until it recognizes it. If they cannot get it to work, they could opt-in to manual entry.

## Obstacles & Assumptions

These came in waves; parts of this assignment were fairly straightfoward, even downright fun. I learned a lot about the Media Stream API in the browser and I'm better off for it.

First and foremost, the app has a hard time scanning the barcode on laptops with integrated webcams and older phones. The bad news is that that it is a little frustrating. The good news is that there is zero compromise on accuracy. If it is acceptable, I really like the pattern of allowing the user to do manual entry if it isn't working. This is obviously subject to company policy and legal requirements, but it is a nice option if allowed.

-   Learning the Media Stream API took more time than I anticipated; it has some gotchas (namely the advanced optional constraints that are not as well-standardized and can also be device reliant as far as I know).
-   Hardware was tough: exploring and comparing options required setting up a quick environment, but it was hard to tell if it was my hardware that was failing me. It's still hard to say; I had a friend test the app with an eight year old phone and it just could not scan the barcode under any circumstances—something about the pictures it took just would not work.
-   Zxing's JS/TS port has weak documentation in my opinion; thankfully the original Java version is well-documented, but it definitely threw me for a loop at first.
-   Time. I wish I had another day or two at this point, but I have a full-time job and personal responsibilities/projects to balance.
-   Testing data. I really wanted to test with more driver's licenses and devices, but I only have access to a few: no "go-bags" filled with fake ID's, burner smartphones, and money here!
-   Finally, part of me wonders if there was a truly better way to implement this: potentially some better libraries or potentially a better language/ecosystem? Perhaps doing some of the lift server-side?

## Wrap-up

Thank you so much for the opportunity to do this challenge: even if you do not wish to proceed further with the interview process, it was a fun and interesting opportunity for me. If you want to chat more, I look forward. If not, zero worries whatsoever. Good luck on your search 🙂

## License

The project was scaffolded from the open source Vite template under the terms of the [MIT License](LICENSE). As such, I've left the original license in the project.
