1. Advantages of Mongoose
Schema validation
Middleware support
Easy data modeling
Cleaner syntax

2. findOneAndUpdate() vs updateOne()
Feature	                  findOneAndUpdate()	                 updateOne()
Returns document	           Yes	                                 No
Use case	                   When updated data needed         	Only update

3. Middleware in Mongoose

Middleware are functions that run:

Before or after operations

Example:

schema.pre("save", function(next) {
  console.log("Before saving");
  next();
});

4. Pagination in Mongoose
const page = 1;
const limit = 10;

Model.find()
  .skip((page - 1) * limit)
  .limit(limit);


5. Embedding vs Referencing
Embedding:
Store data inside document
Faster reads
Example: User + Address
Referencing:
Store reference (ID)
Better for large data
Example: User → Orders