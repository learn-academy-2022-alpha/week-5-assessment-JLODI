# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

  Your answer:
Ruby blocks are anonymous functions, which are functions that don't need to be defined with a function name. Blocks are made with the do/end or OR {} syntax and can be passed into methods. For example each do will let you itterate the function through an array or object. 

I remember when we worked on our own text-based adventure games, there's a way you can print each character of a string slowly by creating a method with "each do" which adds a brief sleep action before printing each character.

  Researched answer:
A block is a function without a name and is a way of passing behavior rather than data to a method. You can pass blocks through methods such as "times do" (for how many times specified, run the function), "each do" (for each element in the array, run the function), and "map do" (for each element in the array run the function, assign to a new array and return the new array). 


2. What is a gem?

  Your answer:
  A gem is a library of code functionality. Gems are snippets of Ruby code which can be easily used and shared. To install Rspec I would use the $'gem install rspec' command in terminal to setup the rspec gem. Gems are a community collaborative tool, especially when a developer wants to offer a snippet of code that can be helpful for other developers in their own projects out there.

  Researched answer:
  RubyGems is a package manager that distributes Ruby programs and libraries called "gems" which are designed to be easy to setup and share. 


3. What is Ruby on Rails?

  Your answer:
  Ruby on Rails is a web application framework written in Ruby.
  It is a Model View Controller or MVC framework which provides structure for databases and web pages. 

  I have some experience with creating and setting up databases through Ruby on Rails' Active Record (the Model process of MVC). The Active Record is pretty convenient with setting up the database and entries for you through console commands without interacting directly with the ruby code and also tracks the history of changes to the model.

  Researched answer:
  A widely popular development framework in Ruby which encourages the use of the MVC methodology with three interconnected elements: Model, View, and Controller. The User uses the Controller which manipulates the Model, updates the View which is seen by the User. The idea with this is to separate the internal workings of information (like the backend) from the way that information is presented to the user.


4. What is a relational database? Are there other kinds of databases?

  Your answer:
  Relational databases
  A relational database is a type of database that's layed out very much like a spreadsheet where information is displayed in a table of rows and columns. Databases can have many tables that have relationships to each other and data can be distinguished and accessed based on the relation to another piece of data in the database.

  I have some experience in class using an object-relational database management system called Postgres. Postgres manages the database through the OOP paradigm in mind.

  In contrast, non relational databases or "NoSQL" (Not Only SQL) don't store data in rows and columns like a spreadsheet, and instead uses a storage model that is best suited for the kind of data that it's storing. The kinds of storage model include: document databases, key-value databases, graph databases, wide-column databases.

  Researched answer:
  A relational database is a collection of data with established relationships between multiple databases usually organized and displayed as a set of rows and columns. Each row in the database is a separate record of data which is automatically assigned a primary key. Columns hold the attributes of each data record, where there's a value for each attribute per record.

  There are non-relational databases which don't store data in a column, row manner. The advantage with a non-relational database is storing the data in a flexible structure, which can be possibly changed in the future. Most noSQL databases are designed for the cloud.


5. What are primary keys? Why are they important?

  Your answer:
  In databases, a primary key is a unique id, usually a set of numbers/letters for each entry, or row of data. In Ruby on Rails the primary key is named an "ID". This is especially useful for example if two entries have the same name, like a person, but have slightly different data. Since only one row of data can have that one primary key, they can be distinguished by the primary key.

  When I was setting up a database in a Ruby on Rails app, every entry I submitted through the Ruby command line would automatically be assigned an ID by the app.


  Researched answer:
  A primary key is a column in the relational database set to be the unique identifier for that row of data. No two data entries can have a primary key.


## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes:
  REST stands for Representational State Transfer, and is a pattern to follow when structuring routes between server and client. RESTful routes is a set of standards used in many languages to create efficient and useful routes mapping between HTTP methods and CRUD actions. These conventions make it easier for developers to understand and navigate and application


2. JSON: 
JSON stands for Javascript object notation. It's a text based data format used to store and transfer data objects with attribute value pairs and arrays. It is easy for humans to read and write and machines to parse and generate.

3. ERB:
ERB stands for Embedded Ruby which lets you generate any kind of text from templates. Ruby code can be added to any plain text document (like HTML) using ERB templates.


4. Params:
Short for Parameters, Params is a method in Ruby that returns the action controller parameters object (which works more like a hash). This lets the developer access user data from Rails.

5. API:
API stands for Application Programming Interface. It is a set of code that controls how software interacts with other software when applications communicate. API provides public classes, methods and properties that establish how the software will interact. You can use Ruby on Rails to create APIs.