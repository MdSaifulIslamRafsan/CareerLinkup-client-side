import { Helmet } from "react-helmet";

const Blogs = () => {
  return (
    <section id="faq" className="relative mx-auto px-2">
      <Helmet>
        <title>CareerLinkup || Blog</title>
      </Helmet>
      <h3 className="mb-14  text-center text-3xl font-semibold underline decoration-teal-200/80 lg:text-left xl:text-4xl">
        Blogs
      </h3>
      <div className="my-6">
        <div className="rounded-t-2xl bg-teal-600/80  w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
          <h4 className="text-lg font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client side?
          </h4>
        </div>
        <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/80  px-4 py-4">
          <div>
            <h5>
              <span className="font-bold">Access Token:</span> An access token
              is a cryptographic string representing the authorization granted
              to the client by the user. It is issued by the authentication
              server upon successful authentication and is used to access
              protected resources. Access tokens are time-bound and have limited
              permissions, usually specific to the scope of the user's
              authorization. They are sent with each request to the resource
              server to prove the client's authorization to access the requested
              resource.
            </h5>
            <br />
            <h5>
              <span className="font-bold">Refresh Token:</span> A refresh token
              is a long-lived credential used to obtain a new access token when
              the current access token expires. Unlike access tokens, refresh
              tokens are not sent with each request to the resource server.
              Instead, they are securely stored by the client application and
              exchanged for a new access token when needed. Refresh tokens have
              a longer lifespan than access tokens and are used to maintain the
              user's session without requiring frequent re-authentication.
            </h5>
            <br />
            <h5>
              <span className="font-bold">Storage on the Client Side:</span>
            </h5>
            <span className="font-bold">Access Token:</span>
            <ul className="!list-disc ml-10">
              <li>
                Access tokens are often stored in memory or in a client-side
                storage mechanism such as local storage or session storage.
              </li>
              <li>
                Storing access tokens in memory is generally more secure than
                storing them persistently (e.g., in cookies), as it reduces the
                risk of token theft through cross-site scripting (XSS) attacks.
              </li>
              <li>
                However, storing access tokens in memory means they will be lost
                if the user refreshes the page or closes the browser.
              </li>
            </ul>
            <span className="font-bold">Refresh Token:</span>
            <ul className="!list-disc ml-10">
              <li>
                Refresh tokens should be securely stored to prevent unauthorized
                access, as they can be used to obtain new access tokens.
              </li>
              <li>
                It is recommended to store refresh tokens in a secure HTTP-only
                cookie with the 'SameSite' attribute set to 'Lax' or 'Strict' to
                mitigate cross-site request forgery (CSRF) attacks.
              </li>
              <li>
                Additionally, the client application should implement measures
                to protect refresh tokens from theft, such as using anti-CSRF
                tokens and ensuring the application is secure against XSS
                attacks.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="rounded-t-2xl bg-teal-600/80 w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
          <h4 className="text-lg font-medium">
            What is express js? What is Nest JS?
          </h4>
        </div>
        <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/80  px-4 py-4">
          <div>
            <h5>
              <span className="font-bold">Express Js: </span>
              Express.js is a minimal and flexible Node.js web application
              framework that provides a robust set of features for building web
              and mobile applications. It is one of the most popular frameworks
              for Node.js due to its simplicity, flexibility, and scalability.
              Express.js provides a thin layer of fundamental web application
              features, such as routing, middleware, and request/response
              handling, allowing developers to build powerful and customizable
              web servers and APIs quickly.
            </h5>
            <br />
            <h5>
              <span className="font-bold">Nest JS: </span>
              NestJS is a progressive Node.js framework for building efficient,
              reliable, and scalable server-side applications. It is built with
              TypeScript and heavily inspired by Angular, which makes it ideal
              for developers familiar with Angular concepts. NestJS leverages
              modern JavaScript features and design patterns to provide a
              modular and extensible architecture for building server-side
              applications. It comes with built-in support for features such as
              dependency injection, middleware, routing, and more, enabling
              developers to create well-structured and maintainable codebases.
              Additionally, NestJS provides out-of-the-box support for GraphQL,
              WebSockets, microservices, and other advanced features, making it
              suitable for a wide range of application types and use cases.
            </h5>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="rounded-t-2xl bg-teal-600/80 w-full cursor-pointer select-none border-2 border-teal-600/30 px-4 py-4 text-gray-100 transition duration-300 hover:border-teal-600/80 hover:text-white">
          <h4 className="text-lg font-medium">Explain all jobs page code.</h4>
        </div>
        <div className="inline-flex w-full rounded-b-2xl border-x-2 border-b-2 border-dashed border-teal-600/80  px-4 py-4">
          <div className="space-y-4">
            <div>
              <span className="font-bold">Server-side : </span>
              <ul className="!list-disc ml-10">
                <li>
                  <span className="font-bold">all-jobs : </span>
                  Retrieves paginated job data based on the provided query
                  parameters such as page number, page size, and search keyword.
                </li>
                <li>
                  <span className="font-bold">jobs-count : </span>
                  Retrieves the total count of jobs based on the search keyword.
                </li>
              </ul>
            </div>
            <div>
              <span className="font-bold">Client-side : </span>
              <ul className="!list-disc ml-10">
                <li>
                  Imports necessary dependencies including React, axios for
                  making HTTP requests, Lottie for displaying a loading spinner
                  animation, and react-hook-form for form handling.
                </li>
                <li>
                  Defines state variables like itemsPerPage, currentPage, count,
                  and search to manage pagination and search functionality.
                </li>
                <li>
                  Uses useQuery hook from @tanstack/react-query for fetching
                  data and managing it's state.
                </li>
                <li>
                  Defines functions like getJobsData to fetch job data based on
                  pagination and search criteria, handleReset to reset search
                  criteria, and handlePaginationBtn to handle pagination button
                  clicks.
                </li>
                <li>
                  Utilizes useEffect hook to fetch job count data when the
                  search criteria changes.
                </li>
                <li>
                  Renders a search form, job listing table, and pagination
                  buttons.
                </li>
                <li>
                  Dynamically renders pagination buttons based on the total
                  number of pages and current page state.
                </li>
                <li>
                  Utilizes conditional rendering to display a loading spinner
                  while data is being fetched.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
