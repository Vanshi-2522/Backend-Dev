1. SQL vs NoSQL 
Feature                  	SQL	                                NoSQL
Type	                 Relational	                        Non-relational
Schema	                 Fixed schema	                    Flexible schema
Data format              Tables (rows/columns)	            JSON-like documents
Example	                 MySQL, PostgreSQL	                MongoDB, Cassandra

Example:

SQL → Table: Students(id, name, gpa)
NoSQL (MongoDB) →
{
  "name": "Vanshika",
  "gpa": 3.8
}


2. CAP Theorem

CAP theorem states that a distributed system can only guarantee 2 out of 3:

C → Consistency
A → Availability
P → Partition Tolerance

Why not all 3?
Because in network failures (partition), system must choose:

Either give correct data (Consistency)
Or always respond (Availability)

3. When to Use MongoDB
    a. Unstructured Data
       Example: Social media posts
    b. Fast Development
       No fixed schema
    c. High Scalability
       Big data apps

4. BSON vs JSON

MongoDB uses BSON (Binary JSON) because:

Faster processing
Supports more data types (Date, Binary)
Efficient storage.

5. MongoDB Query
db.students.find({
  gpa: { $gt: 3.5 },
  course: "CS101"
})