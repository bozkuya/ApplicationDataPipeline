# Application Data Pipeline
 

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

```bash
git clone https://github.com/yourusername/data-pipeline.git
cd data-pipeline
```


Install Dependencies:
```bash
npm install
```
Set Up Google Cloud:
Authenticate with Google Cloud:

gcloud auth login
gcloud auth application-default login
Set environment variables:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/service-account-file.json"
export PROJECT_ID="your-project-id"
export PUBSUB_TOPIC="event-logs-topic"
export BIGQUERY_DATASET="event_logs"
export BIGQUERY_TABLE="logs"
```
