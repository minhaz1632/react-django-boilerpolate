This project is implemented with https://python-webpack-boilerplate.readthedocs.io/en/latest/setup_with_django/

Many of the examples available on internet about react django integration suggests to create a production build and import the static files to django template.
This approach has a limitation that the components in production builds are anonymized and hence difficult to debug. This implementation provides an integration to provide 
proper development environment for react. The Python Webpack Boilerplate package provides a hassle free boilerplate for webpack integration with django. 
This has been utilized to generate the react boilerplate.

1. Generated the boilerplate following the instructions in  [this link](https://python-webpack-boilerplate.readthedocs.io/en/latest/setup_with_django/).
2. Remove unnecessary packages.
3. Install react, react-dom, babel preset for react.
4. Make necessary changes in webpack config.
5. Configure react hot loader.

 