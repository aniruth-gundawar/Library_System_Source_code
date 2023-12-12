
# Library System Mern Stack Project

It is a web application for Library System .

For Now ,it has only CRUD Operation on Books . In future It will be Updated .

Website Link (Hosted):

https://lms-s12i.onrender.com/


#To run the application :

install nodeJs and MongoDB in your Desktop .

clone this repository in your Desktop .

run the following commands :








## Installation

Install my-project with npm

goto client folder and run the command :
```bash
  npm install 
```

now on root folder run the  command :

```bash
  npm run dev 
```
    
After Running you can use this web application .


## Documentation

## API requests 

### POST request for creating a book :

POST api/books

## request :

creating a book 

## payload : 

{
    name,description,author,ISBN,price ,quantity
}

## response 
//on successfull creation 

{
    book,
    message : "book created successfully " 
}
//otherwise
{
    error,
      message : "error in creating book "
}

### GET request for fetching all books :

GET api/books

## request :

fetching all books 

## payload : 

Empty json object

## response 
//on successfull Fetching 

{
    books,
    message : "All books Fetched successfully " 
}
//otherwise
{
    error,
      message : "Error in fetching all books "
}

### PUT request for updating a book :

PUT api/books/:id

## request :

updating a book 

## payload : 

{
    name,description,author,ISBN,price ,quantity
}

## response 
//on successfull updation 

{
  Book,
    message : " Book Updated Successfully " 
}
//otherwise
{
      error,
      message : "Error in updating book "
}


### DELETE request for deleting a book :

DELETE api/books/:id

## request :

Deleting a book 

## payload : 
 id of the book

## response 
//on successfull deletion 

{
    message : " Book deleted Successfully " 
}
//otherwise
{
      error,
      message : "Error in Deletion of book "
}

