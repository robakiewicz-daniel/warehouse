This is a simple program demonstrating database operations that can be performed from a "panel" constructed as a website. Visually, the program shines with simplicity, but its goal during development was to utilize object-oriented programming. Similar programs can be found online, as this was a recruitment project I had the pleasure of participating in. However, I slightly refined and expanded the project for academic purposes. The project allows for displaying and deleting products from the database. A separate page, displayed without reloading, allows for adding products.

For development, I utilized knowledge in the following areas:

Databases
HTML and CSS
Bootstrap and website responsiveness (adapting the appearance to any screen size)
Object-oriented JavaScript
Object-oriented PHP
Object-orientation has been optimized by distributing it across separate files.

INSTALLATION
The first step in installing the program is to install XAMPP, which allows you to set up a local server that supports PHP and databases. During installation, you need to install Apache and MySQL. (The program itself may not always automatically download PHP, so it’s worth checking if it has been downloaded. https://www.php.net/)
Next, in the XAMPP folder, you need to locate the htdocs folder, into which the program files should be copied.
The penultimate step is to start XAMPP and the Apache and MySQL services it includes.
Finally, you just need to open a browser, enter localhost/phpmyadmin in the address bar, create a new database named warehouse, and import the downloaded database.
It’s also advisable to check the config.php file and ensure that all database connection details are correct.
The application itself is available at 127.0.0.1 or localhost. To simplify the installation process, I removed some of the program's "features" and eliminated Composer, which would have had to be installed separately via the command line, as well as NODE.js. This extended the production process due to significant software restructuring.

OVERVIEW
When you open the htdocs folder, you’ll see the main files you should familiarize yourself with first, especially the readme.txt, config.php, and warehouse.sql files (our database).

src (contains the entire software of our website)
backend (contains all database functionality <-> website)
core and products (contains all classes and objects needed for the website to function, the products folder contains objects that represent the types of products that can be added to the database)
frontend (contains all client-side functionality and the website's appearance)
pages (responsible for displaying the form for adding and displaying products)
js (responsible for all client-side functionality of the software)