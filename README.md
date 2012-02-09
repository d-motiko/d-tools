d-tools - Web development Tools from d-mótiko
=============================================

Current status: Just setting up the repository for sharing.

Tools
-----

### jQuery Fullsize Plugin

A simple jQuery plugin that fullsizes an image as background for a website. 

Usage sample (won't work on really lame browsers):

    <!doctype html>
    <html>
      <head>
        <title>Fullsize tryout</title>
        <script 
          type="text/javascript" 
          src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
          
        <script 
          type="text/javascript" 
          src="jquery.fullsize.js"></script>

        <style type="text/css">
          body {
            margin: 0; }
          
          img[rel=fullsize] {
            position: absolute;
            z-index: 0; }          
          
          #wrap {
            position: absolute;
            left: 0;
            top: 0;
          }
        </style>  

      </head>
      <body>
        <img rel="fullsize" src="images/background.jpg" />
        <div id="wrap">
          <h1>Hello World!</h1>
        </div>
      </body>
    </html>