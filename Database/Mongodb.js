// MongoDB Interview Questions & Answers

const mongoDBInterviewQA = {
    basics: [
        {
            question: "What is MongoDB?",
            answer: "MongoDB is a NoSQL, document-oriented database that stores data in JSON-like BSON format."
        },
        {
            question: "What is BSON?",
            answer: "BSON (Binary JSON) is a binary-encoded serialization format used by MongoDB to store documents and make remote procedure calls."
        },
        {
            question: "Difference between SQL and MongoDB?",
            answer: "SQL uses tables/rows, MongoDB uses collections/documents. SQL is structured, MongoDB is flexible schema."
        }
    ],

    operations: [
        {
            question: "How to insert documents?",
            answer: "db.collection.insertOne({}) or db.collection.insertMany([{}, {}])"
        },
        {
            question: "How to find documents?",
            answer: "db.collection.find({query}) returns cursor. Use findOne() for single document."
        },
        {
            question: "How to update documents?",
            answer: "db.collection.updateOne/updateMany({filter}, {$set: {fields}})"
        },
        {
            question: "How to delete documents?",
            answer: "db.collection.deleteOne({filter}) or deleteMany({filter})"
        }
    ],

    advanced: [
        {
            question: "What are indexes in MongoDB?",
            answer: "Indexes improve query performance. Create with db.collection.createIndex({field: 1})"
        },
        {
            question: "What is aggregation framework?",
            answer: "Aggregation pipeline processes documents through stages like $match, $group, $sort for complex queries."
        },
        {
            question: "What are transactions?",
            answer: "Transactions ensure ACID compliance for multi-document operations (MongoDB 4.0+)"
        },
        {
            question: "What is sharding?",
            answer: "Sharding distributes data across multiple servers for horizontal scaling."
        },

        {
            question: "How to perform data backup in MongoDB?",
            answer: "Use mongodump for backup and mongorestore for restoring data."
        },

        {
            question: "What is replication in MongoDB?",
            answer: "Replication involves maintaining multiple copies of data across different servers for redundancy and high availability."
        },

        {
            question: "How to handle schema design in MongoDB?",
            answer: "Schema design should consider data access patterns, embedding vs referencing, and denormalization for performance."
        },

        {
            question: "What are some common data types in MongoDB?",
            answer: "Common data types include String, Number, Boolean, Array, Object, Date, Null, and Binary data."
        },

        {
            question: "How to optimize query performance in MongoDB?",
            answer: "Use indexes, avoid large documents, limit fields returned, and analyze queries with explain()."
        },

        {
            question: "What is the difference between find() and findOne()?",
            answer: "find() returns a cursor to multiple documents, while findOne() returns a single document."
        },

        {
            question: "How to handle relationships in MongoDB?",
            answer: "Use embedding for one-to-few relationships and referencing for one-to-many or many-to-many relationships."
        },

        {
            question: "What is the purpose of the $lookup stage in aggregation?",
            answer: "$lookup performs a left outer join to another collection in the aggregation pipeline."
        },

        {
            question: "How to monitor MongoDB performance?",
            answer: "Use MongoDB Cloud Manager, Ops Manager, or built-in tools like mongotop and mongostat."
        },

        {
            question: "What are capped collections?",
            answer: "Capped collections are fixed-size collections that maintain insertion order and automatically overwrite oldest entries when full."
        },

        {
            question: "How to implement full-text search in MongoDB?",
            answer: "Create a text index on fields and use $text operator in queries for full-text search capabilities."
        },

        {
            question: "What is the role of the WiredTiger storage engine?",
            answer: "WiredTiger is the default storage engine in MongoDB that provides document-level locking, compression, and better concurrency."
        },

        {
            question: "How to handle geospatial data in MongoDB?",
            answer: "Use geospatial indexes and queries like $geoWithin and $near to store and query location-based data."
        },

        {
            question: "What are some security features in MongoDB?",
            answer: "Security features include authentication, authorization, encryption at rest and in transit, and auditing."
        }
        
    ]
};
