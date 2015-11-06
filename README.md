# toolbar

What's used:

* eslint for code linting
* webpack as a build tool
* react + react-router
* babel for ES6 support

Structure:

* **src** app source code
  * **common** shared parts of the app
    * **components** React jsx components
    * **modules** JS modules
    * **styles** css
  * **dashboard** parts of the app related to dashboard
    * *(same as common structure)*
* **static** static files processed by webpack
* **www** webroot
  * **static** static files not processed by webpack
