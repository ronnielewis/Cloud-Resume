// api url
const api_url = "https://hoazqtfkgj.execute-api.us-east-1.amazonaws.com/UpdateViewCountFunction";
const viewElement = document.getElementById('views');

updateViews();

async function updateViews() {
  const response = await fetch(api_url);
  const data = await response.json();
  viewElement.innerHTML = data;
}