const resultsPerPage = 10; // Number of results per page
let currentPage = 1; // Current page
let totalResults = 0; // Total number of results

// Function to fetch data from the API
async function fetchData(page) {
  const apiUrl = `https://your-api-url.com/data?page=${page}&limit=${resultsPerPage}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    totalResults = data.totalCount; // Assuming API returns the total count of results
    displayData(data.results); // Function to display fetched data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to display data
function displayData(results) {
  // Display 'results' on the webpage
}

// Function to handle pagination
function handlePagination(action) {
  if (
    action === "next" &&
    currentPage < Math.ceil(totalResults / resultsPerPage)
  ) {
    currentPage++;
    fetchData(currentPage);
  } else if (action === "prev" && currentPage > 1) {
    currentPage--;
    fetchData(currentPage);
  }
}

// Initial data fetch
fetchData(currentPage);
