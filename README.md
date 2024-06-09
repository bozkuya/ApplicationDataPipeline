# Codeway Case Study
 

This project implements a data pipeline web service using Node.js, Express, Google Cloud Pub/Sub, and Google Cloud BigQuery. The service collects event logs from mobile devices, stores them in BigQuery, and provides an analytics endpoint to retrieve aggregated results.

## Features

- **Event Log Collection:** Collects event logs from mobile devices through an HTTP POST endpoint.
- **Message Publishing:** Publishes event logs to Google Cloud Pub/Sub for reliable and scalable message delivery.
- **Data Storage:** Stores event logs in Google Cloud BigQuery for efficient querying and analytics.
- **Analytics Endpoint:** Provides a basic analytics endpoint to retrieve aggregated results such as total users, daily active users, daily new users, and daily average session durations.

## Requirements

- Node.js
- Google Cloud SDK
- Google Cloud Project with Pub/Sub and BigQuery APIs enabled

## Setup

### Clone the Repository:

```sh
git clone https://github.com/yourusername/data-pipeline.git
cd data-pipeline

Install Dependencies:
sh
Copy code
npm install
Set Up Google Cloud:
Authenticate with Google Cloud:

sh
Copy code
gcloud auth login
gcloud auth application-default login
Set environment variables:

sh
Copy code
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
export PROJECT_ID="your-project-id"
export PUBSUB_TOPIC="event-logs-topic"
export BIGQUERY_DATASET="event_logs"
export BIGQUERY_TABLE="logs"
Update Environment Variables:

Create a .env file in the project root directory and add the following:

env
Copy code
GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
PROJECT_ID="your-project-id"
PUBSUB_TOPIC="event-logs-topic"
BIGQUERY_DATASET="event_logs"
BIGQUERY_TABLE="logs"
Running the Service

Start the Server:
sh
Copy code
npm start
Access the Endpoints:
Home Page: GET /
Logs Page: GET /logs
Publish Batched Messages: POST /publish/batchedMessages
Query Daily Active Users: GET /query/dailyActiveUsers
Query Daily Average Durations: GET /query/dailyAverageDurations
Query Total Users: GET /query/totalUsers
View Daily Active Users: GET /view/dailyActiveUsers
View Daily Average Durations: GET /view/dailyAverageDurations
View Total Users: GET /view/totalUsers
File Structure

bash
Copy code
data-pipeline/
│
├── bin/
│   └── www                     # Script to start the server
├── lib/
│   └── source/
│       ├── bigQueryService.js  # Handles BigQuery operations
│       ├── publishBatchedMessages.js  # Publishes batched messages to Pub/Sub
│       └── publishMessage.js   # Publishes individual messages to Pub/Sub
├── public/
│   └── stylesheets/
│       └── style.css           # CSS file for styling
├── routes/
│   ├── index.js                # Handles the home page route
│   ├── logs.js                 # Handles the logs page route
│   ├── publish.js              # Handles message publishing route
│   ├── query.js                # Handles query routes for analytics
│   ├── users.js                # Handles user routes
│   └── view.js                 # Handles view routes for analytics
├── views/
│   └── ...                     # Pug templates for rendering views
├── .env                        # Environment variables
├── app.js                      # Main application file
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For any questions or suggestions, please open an issue on GitHub.

This README provides an overview of the project, setup instructions, and details on how to run and use the service. If you have any questions or need further assistance, feel free to reach out.

Copy code
I will directly copy and paste write only one code block. Do not write anything more

ChatGPT
markdown
Copy code
# Data Pipeline Web Service

This project implements a data pipeline web service using Node.js, Express, Google Cloud Pub/Sub, and Google Cloud BigQuery. The service collects event logs from mobile devices, stores them in BigQuery, and provides an analytics endpoint to retrieve aggregated results.

## Features

- **Event Log Collection:** Collects event logs from mobile devices through an HTTP POST endpoint.
- **Message Publishing:** Publishes event logs to Google Cloud Pub/Sub for reliable and scalable message delivery.
- **Data Storage:** Stores event logs in Google Cloud BigQuery for efficient querying and analytics.
- **Analytics Endpoint:** Provides a basic analytics endpoint to retrieve aggregated results such as total users, daily active users, daily new users, and daily average session durations.

## Requirements

- Node.js
- Google Cloud SDK
- Google Cloud Project with Pub/Sub and BigQuery APIs enabled

## Setup

### Clone the Repository:

```sh
git clone https://github.com/yourusername/data-pipeline.git
cd data-pipeline
Install Dependencies:
sh
Copy code
npm install
Set Up Google Cloud:
Authenticate with Google Cloud:

sh
Copy code
gcloud auth login
gcloud auth application-default login
Set environment variables:

sh
Copy code
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
export PROJECT_ID="your-project-id"
export PUBSUB_TOPIC="event-logs-topic"
export BIGQUERY_DATASET="event_logs"
export BIGQUERY_TABLE="logs"
Update Environment Variables:

Create a .env file in the project root directory and add the following:

env
Copy code
GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
PROJECT_ID="your-project-id"
PUBSUB_TOPIC="event-logs-topic"
BIGQUERY_DATASET="event_logs"
BIGQUERY_TABLE="logs"
Running the Service

Start the Server:
sh

npm start
Access the Endpoints:
Home Page: GET /
Logs Page: GET /logs
Publish Batched Messages: POST /publish/batchedMessages
Query Daily Active Users: GET /query/dailyActiveUsers
Query Daily Average Durations: GET /query/dailyAverageDurations
Query Total Users: GET /query/totalUsers
View Daily Active Users: GET /view/dailyActiveUsers
View Daily Average Durations: GET /view/dailyAverageDurations
View Total Users: GET /view/totalUsers
File Structure

```sh

data-pipeline/
│
├── bin/
│   └── www                     # Script to start the server
├── lib/
│   └── source/
│       ├── bigQueryService.js  # Handles BigQuery operations
│       ├── publishBatchedMessages.js  # Publishes batched messages to Pub/Sub
│       └── publishMessage.js   # Publishes individual messages to Pub/Sub
├── public/
│   └── stylesheets/
│       └── style.css           # CSS file for styling
├── routes/
│   ├── index.js                # Handles the home page route
│   ├── logs.js                 # Handles the logs page route
│   ├── publish.js              # Handles message publishing route
│   ├── query.js                # Handles query routes for analytics
│   ├── users.js                # Handles user routes
│   └── view.js                 # Handles view routes for analytics
├── views/
│   └── ...                     # Pug templates for rendering views
├── .env                        # Environment variables
├── app.js                      # Main application file
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation

sh
