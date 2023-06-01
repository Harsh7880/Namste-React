# Namste-React

Assignment -->

Question 1)  What is Emmet?
Answer 1) Emmet is a web development abbreviation syntax. hat enables developers to write HTML and CSS code quickly and efficiently. It is also known as Emmet Toolkit or Emmet abbreviations. it provides set of abbreviations that expant into full fledged HTML and CSS code.

Questions 2) Difference between a Library and Framework
Answer 2)

Library : A library is a collection of prewritten code modules or functions that developers can use to perform specific tasks or solve particular problems. It provides reusable code that can be called by an application to extend its functionality.
Developers have control over the flow of their application and selectively use the library's components as needed.

Framework : A framework is a more comprehensive and structured software environment that provides a foundation for building applications.
It offers a set of rules, conventions, and tools that dictate the overall structure and flow of the application.
Developers build their applications within the framework's predefined architecture and follow its guidelines.

Question 3) What is CDN? Why do we use it?
Answer 3) CDN stands for Content Delivery Network. It is a distributed network of servers located in multiple data centers around the world. The purpose of a CDN is to deliver web content, such as images, CSS files, JavaScript files, videos, and other static assets, to end-users quickly and efficiently.

When a user requests a web page or resource from a website, the request typically goes to the nearest CDN server instead of the origin server where the website is hosted. The CDN server that is geographically closest to the user can respond to the request, resulting in faster content delivery and reduced latency. This is known as serving content from the edge, as the CDN servers are located closer to the user's geographic location.

Question 4) Why is React known as React?
Answer 4) React, the JavaScript library for building user interfaces, is known as "React" because its primary concept revolves around reacting to changes in data and efficiently updating the user interface based on those changes.

Questions 5) What is crossorigin in script tag?
Answer 5) The crossorigin attribute in the <script> tag is used to specify how the browser should handle cross-origin requests when loading a JavaScript file from a different domain.

When a web page includes a <script> tag to load an external JavaScript file, the browser typically makes a cross-origin request to fetch that file. Cross-origin requests are requests for resources from a different domain, protocol, or port than the one serving the web page.

The crossorigin attribute can take the following values:

anonymous: This is the default value if the crossorigin attribute is present but no value is specified. With anonymous, the browser makes the cross-origin request without including any credentials (e.g., cookies or HTTP authentication). This is typically used when loading public or shared JavaScript files that don't require authentication.

use-credentials: When use-credentials is specified, the browser includes credentials (e.g., cookies) in the cross-origin request. This is used when the JavaScript file requires authentication or the server expects credentials to be included.


Question 6) What is diference between React and ReactDOM ? 
Answer 6)  React is the core library that enables the creation of reusable UI components and manages their state and rendering, while ReactDOM is responsible for the interaction between React components and the browser's DOM, handling rendering and updating of the actual web page.

Questions 7) What is difference between react.development.js and react.production.js files via CDN?
Answer 7) react.development.js :- The react.development.js file is intended for use in development environments.
It includes additional warnings, error messages, and helpful development tools.
It provides more detailed error messages and stack traces to aid in debugging and development.

react.production.js:- The react.production.js file is meant for use in production environments.
It is optimized for performance and has a smaller file size.
It removes development-specific code, warnings, and debugging tools to improve runtime performance.

Question 8) What is async and defer?
Answer 8) Async (<script async>):
The async attribute tells the browser to fetch the script file asynchronously while continuing to parse and render the HTML document.
When a script tag with the async attribute is encountered, the browser initiates the download of the script file in the background and continues parsing the HTML document without waiting for the script to be fully downloaded and executed.
Once the script file is downloaded, it is executed immediately, potentially interrupting the parsing/rendering of the HTML document.
The order in which scripts with async are executed may vary, as it depends on which script finishes downloading first.
Use async when the order of script execution is not critical and the script does not rely on other scripts or the DOM being fully loaded.
Example: <script src="script.js" async></script>

Defer (<script defer>):
The defer attribute also allows the browser to fetch the script file asynchronously, but it defers the script's execution until the HTML parsing is complete.
With defer, the browser continues parsing the HTML document without blocking, and the script is executed in the order they appear in the document once parsing is finished.
The scripts with defer are executed just before the DOMContentLoaded event, which occurs when the HTML document has been fully parsed and the DOM is ready.
Unlike the async attribute, scripts with defer are executed in the order they appear in the HTML document.
Use defer when the script relies on the DOM being fully loaded or when the script order is important.
Example: <script src="script.js" defer></script>

Q

