// Import the Google Cloud client library
const { BigQuery } = require('@google-cloud/bigquery');
const bigquery = new BigQuery();

/**
 * Fetches daily active users data from BigQuery
 * @returns {Promise<string>}
 */
async function queryDailyActiveUsers() {

    // SQL query to retrieve data
    const sqlQuery = "SELECT * FROM `myproject.myapp.daily_active_users`";

    const options = {
        query: sqlQuery,
        // The location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    // Execute the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to complete
    const [rows] = await job.getQueryResults();

    // Display the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));

    // Return the results as JSON
    return JSON.stringify(rows);
}

/**
 * Fetches daily average session durations from BigQuery
 * @returns {Promise<string>}
 */
async function queryDailyAverageDurations() {

    // SQL query to retrieve data
    const sqlQuery = "SELECT \n" +
        "  event_date,\n" +
        "  CAST(AVG(session_duration) / 1000  AS INT64) AS average_seconds,\n" +
        "  ROUND(CAST(AVG(session_duration) AS INT64) / 60000, 2) AS average_minutes,\n" +
        "  ROUND(CAST(AVG(session_duration) AS INT64) / 3600000, 2) AS average_hours\n" +
        "FROM \n" +
        "  (\n" +
        "    SELECT \n" +
        "      DISTINCT session_id AS session, \n" +
        "      MAX(event_time) - MIN(event_time) AS session_duration,\n" +
        "      EXTRACT(\n" +
        "        DATE FROM TIMESTAMP_MILLIS(event_time)) AS event_date \n" +
        "    FROM \n" +
        "      `myproject.myapp.events`\n" +
        "    GROUP BY \n" +
        "      EXTRACT(DATE FROM TIMESTAMP_MILLIS(event_time)), \n" +
        "      session_id\n" +
        "  ) \n" +
        "GROUP BY \n" +
        "  event_date;";

    const options = {
        query: sqlQuery,
        // The location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    // Execute the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to complete
    const [rows] = await job.getQueryResults();

    // Display the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));

    // Return the results as JSON
    return JSON.stringify(rows);
}

/**
 * Fetches total user count from BigQuery
 * @returns {Promise<string>}
 */
async function queryTotalUsers() {

    // SQL query to retrieve data
    const sqlQuery = "SELECT COUNT(DISTINCT user_id) AS total_users FROM `myproject.myapp.events`";

    const options = {
        query: sqlQuery,
        // The location must match that of the dataset(s) referenced in the query.
        location: 'US',
    };

    // Execute the query as a job
    const [job] = await bigquery.createQueryJob(options);
    console.log(`Job ${job.id} started.`);

    // Wait for the query to complete
    const [rows] = await job.getQueryResults();

    // Display the results
    console.log('Rows:');
    rows.forEach(row => console.log(row));

    // Return the results as JSON
    return JSON.stringify(rows);
}

module.exports = { queryDailyActiveUsers, queryDailyAverageDurations, queryTotalUsers };
